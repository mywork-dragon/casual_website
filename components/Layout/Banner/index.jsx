import React, { useState } from "react";

const Banner = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full sm:mt-4 lg:mt-24 relative top-16">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full sm:relative sm:-top-10 md:top-auto flex justify-center items-center">
          <img
            src="/images/footerBanner.png"
            className="lg:max-w-5xl h-auto object-cover hidden sm:block"
          />
          <div className="sm:absolute sm:-mt-12 md:-mt-8 flex flex-col items-center">
            <p className="text-center max-w-lg font-lora font-normal text-sm md:text-base lg:text-lg text-text-300">
              Get the latest tips on how to build, ship and optimize your
              consumer tech products, delivered straight to your inbox.
            </p>
            <form
              action="https://causallabs.us21.list-manage.com/subscribe/post?u=90fb20275d7f65ea298fd2a50&amp;id=3dfa4b7f7e&amp;f_id=00205ae1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_self"
              className="w-full sm:w-4/5 md:w-full h-12 sm:h-9 md:h-10 lg:h-[50px] bg-white p-0.5 pl-4 sm:pl-8 mt-4 lg:mt-8 rounded-[53px] shadow-input flex items-center justify-between validate"
            >
              <div className="w-full mr-4">
                <input
                  className="bg-transparent w-full font-lora font-normal text-15 leading-6 required email"
                  placeholder="Your email goes here"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  htmlFor="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                />
              </div>
              <button
                type="submit"
                className="h-full px-6 uppercase hover:opacity-80 transition-all duration-300 text-white bg-text-300 tracking-wide font-bold text-xs leading-4 rounded-[53px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
