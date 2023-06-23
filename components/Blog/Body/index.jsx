import { dateFormateHandler } from "@/lib/index";
import React, { useMemo } from "react";
import SocialSharingLinks from "./SocialSharingLinks";
import RelatedBlogCard from "./RelatedBlogCard";
import TextGraphic from "@/components/TextGraphic";

const BlogBody = ({ post, relatedBlogs }) => {
  const { title, summary, author, body, slug, published } = post;
  const date = dateFormateHandler(published || new Date());

  const filteredRelatedBlogs = useMemo(() => {
    return relatedBlogs?.length
      ? relatedBlogs?.filter((blog) => blog.slug !== slug)
      : [];
  }, [relatedBlogs]);
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex flex-col sm:flex-row justify-center items-start sm:space-x-20 space-y-10 sm:space-y-0">
          <SocialSharingLinks />
          <div className="max-w-[660px] flex flex-col items-start justify-center">
            <h1 className="uppercase text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
              {title}
            </h1>
            <p className="font-lora text-text-100 font-normal text-2xl leading-7 opacity-30 !mt-3">
              {summary}
            </p>
            <div className="flex items-center space-x-3 mt-10">
              {author?.profile_image ? (
                <div>
                  <img
                    src={author?.profile_image}
                    style={{ borderRadius: author?.profile_image ? "" : 0 }}
                    className="w-12 h-auto object-cover rounded-full"
                  />
                </div>
              ) : null}
              <div>
                <p className="font-inter text-text-300 font-bold text-sm leading-4">
                  {author?.first_name || " "} {author?.last_name || " "}
                </p>
                <p className="font-inter text-secondary-600 font-bold text-sm leading-4 mt-1">
                  {date.monthName} {date.dateNumber}, {date.fullYear} -{" "}
                  <span className="text-text-300 uppercase">7 min read</span>
                </p>
              </div>
            </div>
            <div
              className="!mt-5 blog-rich-text"
              dangerouslySetInnerHTML={{ __html: body || "" }}
            />
          </div>
        </div>
        <div className="max-w-[800px] mx-auto">
          {filteredRelatedBlogs?.length ? (
            <div className="!mt-20">
              <h1 className="text-text-300 text-2xl leading-8 sm:text-4.5xl sm:leading-11.5 font-extrabold">
                <TextGraphic>RELATED</TextGraphic> POSTS
              </h1>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 md:space-x-6">
                {filteredRelatedBlogs?.map((blog, index) => (
                  <RelatedBlogCard {...blog} key={index} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BlogBody;
