import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const Banner = () => {
  const url =
    "https://causallabs.us21.list-manage.com/subscribe/post?u=90fb20275d7f65ea298fd2a50&amp;id=3dfa4b7f7e&amp;f_id=00205ae1f0";
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
            <div className="w-full">
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
