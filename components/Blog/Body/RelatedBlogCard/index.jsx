import React from "react";
import Link from "next/link";

const RelatedBlogCard = ({ title, summary, slug }) => {
  return (
    <div
      style={{ backgroundImage: "url(/images/blog/pattern.png)" }}
      className="!px-7 !py-5 border border-text-300 rounded-md hover:bg-primary-500 transition-all duration-300 cursor-pointer !mt-8"
    >
      <Link href={`/blog/${slug}`}>
        <a>
          <p className="uppercase text-text-100 font-inter font-bold text-xs">
            5 Min read
          </p>
          <h1 className="font-inter font-extrabold text-xl leading-6 text-text-300 !mt-3">
            {title}
          </h1>
          <p className="!mt-3 line-clamp-3 text-text-100 font-lora text-sm leading-5">
            {summary}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default RelatedBlogCard;
