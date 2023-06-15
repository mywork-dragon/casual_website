import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import camelcaseKeys from "camelcase-keys";

import { getPost, getPostsData, getCategories } from "@/lib/api";
import Preloader from "@/components/preloader";
import BlogBody from "@/components/Blog/Body";

export default function BlogPost({ post, relatedBlogs }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Preloader />;
  }

  if (!post) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://buttercms.com/static/v2/images/favicon.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={post.url} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:description" content={post.metaDescription} />
        <meta name="twitter:description" content={post.metaDescription} />
      </Head>
      <BlogBody post={post} relatedBlogs={relatedBlogs} />
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const post = await getPost(params.slug);
    const category = post.categories[0].slug;
    let relatedBlogs = [];
    if (category) {
      relatedBlogs = (await getPostsData({ category })).posts;
    }
    if (relatedBlogs?.length) {
      relatedBlogs = (await getPostsData()).posts;
    }
    const categories = await getCategories();
    return {
      props: {
        post: camelcaseKeys(post),
        categories,
        relatedBlogs: camelcaseKeys(relatedBlogs),
      },
      revalidate: 3600,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const posts = (await getPostsData()).posts;

      return {
        paths: posts.map((post) => `/blog/${post.slug}`),
        fallback: true,
      };
    } catch (e) {
      /* Empty */
    }
  }

  return {
    paths: [],
    fallback: false,
  };
}
