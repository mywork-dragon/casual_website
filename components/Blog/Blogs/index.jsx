import React, { useState, useEffect } from "react";
import Card from "./Card";
import RoundedButton from "@/components/Button/Rounded";

const Blogs = ({ posts, pagination }) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  if (!render) return null;
  return (
    <div className="mt-12 lg:mt-0 lg:-skew-y-2 w-full overflow-y-visible">
      <div className="w-full relative pt-12 sm:pt-20 bg-secondary-500">
        <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {posts?.length
              ? posts.map((blog, index) => (
                  <Card key={index} {...blog} index={index} />
                ))
              : null}
          </div>
          {!!pagination?.nextPage ? (
            <div className="w-full flex justify-center items-center mt-20 relative top-5 z-10 rotate-1">
              <RoundedButton href="/">Load More</RoundedButton>
            </div>
          ) : (
            <div className="pt-20 w-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
