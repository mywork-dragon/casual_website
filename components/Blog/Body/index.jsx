import { dateFormateHandler } from "@/lib/index";
import React from "react";

const BlogBody = ({ post, relatedBlogs }) => {
  const { title, summary, author, updated, body } = post;
  const date = dateFormateHandler(updated || new Date());
  console.log(relatedBlogs, "<==relatedBlogs");
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="max-w-[660px] flex flex-col items-start justify-center mx-auto">
          <h1 className="uppercase text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
            {title}
          </h1>
          <p className="font-lora text-text-100 font-normal text-2xl leading-7 opacity-30 !mt-3">
            {summary}
          </p>
          <div className="flex items-center space-x-3 mt-10">
            <div>
              <img
                src={author?.profile_image || "/images/blog/avatar.svg"}
                style={{ borderRadius: author?.profile_image ? "" : 0 }}
                className="w-12 h-auto object-cover rounded-full"
              />
            </div>
            <div>
              <p className="font-inter text-text-300 font-bold text-sm leading-4">
                {author?.first_name || " "} {author?.last_name || " "}
              </p>
              <p className="font-inter text-secondary-600 font-bold text-sm leading-4 mt-1">
                {date.dateNumber}.{date.monthName} {date.fullYear}. -{" "}
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
    </div>
  );
};

export default BlogBody;
