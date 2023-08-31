import React, { useState, useEffect } from "react";
import Card from "./Card";

const CaseStudies = ({
  data,
}: {
  data: {
    fields: {
      person_name: string;
      quote: string;
      post_title: string;
      company_name: string;
    };
    index: number;
    published: Date;
    slug: string;
  }[];
}) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  if (!render || !data?.length) return null;
  return (
    <div className="mt-12 lg:mt-0 lg:-skew-y-2 w-full overflow-y-visible">
      <div className="w-full relative pt-12 sm:pt-20 bg-secondary-500 !pb-20">
        <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data?.length
              ? data.map((caseStudy, index) => (
                  <Card key={index} {...caseStudy} index={index} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
