import RoundedButton from "@/components/Button/Rounded";
import { dateFormateHandler } from "@/lib/index";
import React from "react";

const Card = ({
  fields: { person_name, quote, post_title, company_name },
  index,
  published,
  slug,
}) => {
  const rotate = index % 2 === 0 ? -1 : 1;
  let noSpace = false;
  if (
    index === 0 ||
    (window.innerWidth > 1023 && index % 3 === 0) ||
    (window.innerWidth < 1024 && index % 2 === 0)
  ) {
    noSpace = true;
  }
  const date = dateFormateHandler(published || new Date());
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
            <p className="font-inter text-text-300 font-bold text-xs leading-4">
              {date.monthName} {date.dateNumber}, {date.fullYear}
            </p>
            <p className="font-inter text-text-300 font-bold text-xs leading-4 mt-0.5">
              {person_name}
            </p>
          </div>
        </div>
        <div className="mt-7">
          <h1 className="font-inter font-extrabold text-2xl text-text-300 leading-7">
            {post_title.split("{{company_name}}").join(company_name)}
          </h1>
          <p className="font-lora font-normal text-text-100 text-base leading-6 mt-1 line-clamp-3">
            {quote}
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center items-center mt-11">
        <RoundedButton href={`/case-study/${slug}`}>Read more</RoundedButton>
      </div>
    </div>
  );
};

export default Card;
