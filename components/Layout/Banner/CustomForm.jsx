import React, { useState, useEffect } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  const clearFields = () => {
    setEmail("");
  };
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);
  return (
    <div className="w-full mt-4 lg:mt-8">
      {status === "error" && (
        <div
          className="w-full mb-2 text-red-600 text-base leading-4 font-bold"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" ? (
        <div
          className="w-full text-text-300 font-extrabold text-lg leading-6 text-center"
          dangerouslySetInnerHTML={{
            __html: "You’re in! Thank you for signing up",
          }}
        />
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e)}
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_self"
          className="w-full !border sm:!border-none !border-black sm:w-4/5 md:w-full h-12 sm:h-9 md:h-10 lg:h-[50px] bg-white p-0.5 pl-4 sm:pl-8 rounded-[53px] shadow-input flex items-center justify-between validate"
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
      )}
    </div>
  );
};

export default CustomForm;
