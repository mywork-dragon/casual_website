import React from "react";

const CaseStudyHero = ({
  post_title,
  company_name,
  quote,
  person_name,
  person_title,
  person_headshot,
}) => {
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto border-b-2 border-secondary-600 pb-14">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-end">
          <div className="flex items-end !mt-12 lg:!mt-0 lg:max-w-[529px]">
            <h1 className="text-text-300 font-inter text-2xl leading-8 sm:text-4.5xl sm:leading-[54px] font-extrabold">
              {post_title.split("{{company_name}}").join(company_name)}
            </h1>
          </div>
          <div className="relative">
            <div className="hidden sm:block absolute max-w-xl sm:-left-48 lg:left-[-475px] -top-16">
              <img
                src="/images/caseStudy/speech.png"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="sm:absolute max-w-401 sm:-left-24 lg:-left-96 top-0 flex flex-col items-center justify-center">
              <p className="font-lora text-text-300 text-base leading-6 text-center -rotate-3">
                {quote}
              </p>
              <p className="text-center font-inter text-text-300 font-bold text-base leading-6 -rotate-3">
                {person_name}
                <br></br>
                {person_title}
              </p>
              <img
                src="/images/caseStudy/jobCase.png"
                className="h-auto object-cover w-24 !mt-2"
              />
            </div>
            <div className="max-w-md w-full">
              <img
                src={person_headshot}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
