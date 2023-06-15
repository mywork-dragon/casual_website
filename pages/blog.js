import Blogs from "@/components/Blog/Blogs";
import Hero from "@/components/Blog/Hero";
import { getCategories, getPostsData } from "@/lib/api";
import camelcaseKeys from "camelcase-keys";
import Head from "next/head";
import React from "react";

const BlogLanding = ({ posts, categories, pagination }) => {
  return (
    <>
      <Head>
        <title>
          Causal: Feature flagging and A/B testing software for product dev
          teams
        </title>
      </Head>
      <Hero />
      <Blogs posts={posts} categories={categories} pagination={pagination} />
    </>
  );
};

export default BlogLanding;

export async function getStaticProps() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
  if (butterToken) {
    try {
      const blogPosts = await getPostsData();
      const categories = await getCategories();
      return {
        props: {
          posts: camelcaseKeys(blogPosts.posts),
          categories,
          pagination: {
            nextPage: blogPosts.nextPage,
            prevPage: blogPosts.prevPage,
            count: blogPosts.count,
          },
        },
        revalidate: 3600,
      };
    } catch (e) {
      return {
        props: { posts: [], categories: [] },
      };
    }
  }

  return { props: { posts: [], categories: [] }, revalidate: 3600 };
}
