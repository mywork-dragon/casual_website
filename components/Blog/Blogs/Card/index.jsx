import RoundedButton from "@/components/Button/Rounded";
import { dateFormateHandler } from "@/lib/index";
import React from "react";

const Card = ({ title, index, updated, author, summary, slug }) => {
  let rotate = 1;
  if (index === 1 || index % 4 === 0) {
    rotate = -1;
  } else if (index === 0 || index % 3 == 0 || index % 2 === 0) {
    rotate = 1;
  }
  let noSpace = false;
  if (
    index === 0 ||
    (window.innerWidth > 1023 && index % 3 === 0) ||
    (window.innerWidth < 1024 && index % 2 === 0)
  ) {
    noSpace = true;
  }
  const date = dateFormateHandler(updated || new Date());
  return (
    <div
      style={{
        transform: `rotate(${rotate}deg)`,
        marginLeft: noSpace ? 0 : "",
      }}
      className="px-8 mt-10 sm:ml-10 py-7 bg-white rounded-3xl shadow-card flex flex-col items-start justify-between"
    >
      <div>
        <div className="flex items-center space-x-3">
          <div>
            <img
              src={author?.profile_image || "/images/blog/avatar.svg"}
              style={{ borderRadius: author?.profile_image ? "" : 0 }}
              className="w-12 h-auto object-cover rounded-full"
            />
          </div>
          <div>
            <p className="font-inter text-text-300 font-bold text-xs leading-4">
              {date.dateNumber}.{date.monthName} {date.fullYear}.
            </p>
            <p className="font-inter text-text-300 font-bold text-xs leading-4 mt-0.5">
              {author?.first_name || " "} {author?.last_name || " "}
            </p>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="font-inter font-extrabold text-2xl text-text-300 leading-7">
            {title}
          </h1>
          <p className="font-lora font-normal text-text-100 text-base leading-6 mt-1 line-clamp-3">
            {summary}
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center items-center mt-11">
        <RoundedButton href={`/blog/${slug}`}>Read more</RoundedButton>
      </div>
    </div>
  );
};

export default Card;