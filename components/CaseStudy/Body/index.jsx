import React from "react";

const CaseStudyBody = ({
  background_copy,
  person_name,
  goals_copy,
  challenges_copy,
  solutions_copy,
  outcomes_copy,
}) => {
  return (
    <div className="w-full mt-10 sm:mt-14">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto flex flex-col items-center justify-center">
        <div className="max-w-[700px] w-full flex flex-col text-left">
          <h1 className="text-text-300 font-inter text-2xl leading-8 sm:text-4.5xl sm:leading-[54px] font-extrabold">
            Background
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: background_copy || "" }}
            className="rich-text-renderer !mt-6"
          ></div>
          <h1 className="text-text-300 mt-14 font-inter text-2xl leading-8 sm:text-4.5xl sm:leading-[54px] font-extrabold">
            {person_name.split(" ")[0]}’s Top Goals
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: goals_copy || "" }}
            className="rich-text-renderer !mt-6"
          ></div>
          <div className="flex items-center mt-14">
            <div className="w-16 lg:-ml-24">
              <img
                src="/images/caseStudy/challenges.png"
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="text-text-300 ml-8 font-inter text-2xl leading-8 sm:text-4.5xl sm:leading-[54px] font-extrabold">
              Challenges
            </h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: challenges_copy || "" }}
            className="rich-text-renderer !mt-6"
          ></div>
          <div className="flex items-center mt-14">
            <div className="w-16 lg:-ml-24">
              <img
                src="/images/caseStudy/solution.png"
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="text-text-300 ml-8 font-inter text-2xl leading-8 sm:text-4.5xl sm:leading-[54px] font-extrabold">
              Solution
            </h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: solutions_copy || "" }}
            className="rich-text-renderer !mt-6"
          ></div>
          <div className="flex items-center mt-14">
            <div className="w-16 lg:-ml-24">
              <img
                src="/images/caseStudy/outcomes.png"
                className="w-full h-auto object-cover"
              />
            </div>
            <h1 className="text-text-300 ml-8 font-inter text-2xl leading-8 sm:text-4.5xl sm:leading-[54px] font-extrabold">
              Outcomes
            </h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: outcomes_copy || "" }}
            className="rich-text-renderer !mt-6"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyBody;
