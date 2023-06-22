import SubmitRoundedButton from "@/components/Button/SubmitRoundedButton";
import TextGraphic from "@/components/TextGraphic";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactBody = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast("Form submitted successfully", {
          type: "success",
          autoClose: 3000,
        });
      } else {
        toast("An error occurred while submitting the form", {
          type: "error",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast("An error occurred while submitting the form", {
        type: "error",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    if (errors?.firstName) {
      toast("First name is required", {
        type: "error",
        autoClose: 3000,
      });
    }
    if (errors?.lastName) {
      toast("Last name is required", {
        type: "error",
        autoClose: 3000,
      });
    }
    if (errors?.email) {
      toast("Email is required", {
        type: "error",
        autoClose: 3000,
      });
    }
  }, [errors]);
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h1 className="uppercase text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
              We’d love to
              <br className="hidden lg:inline-block" />
              hear from you
            </h1>
            <p className="font-lora text-base leading-6 sm:text-lg sm:leading-6.5 text-text-100 font-normal mt-2 sm:mt-4">
              Email us at{" "}
              <a
                href="mailto:hello@casual.com"
                className="font-bold hover:text-black"
              >
                <TextGraphic bottom="4px" height="8px">
                  hello@casual.com
                </TextGraphic>
              </a>{" "}
              or fill out the form.
            </p>
            <div className="flex items-center justify-center mt-20">
              <img
                src="/images/contact/graphic.png"
                className="max-w-[271px] h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:max-w-[50%] !mt-16 lg:!mt-0 !mb-0 sm:!mb-16 md:!mb-24 lg:!mb-0">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full space-y-3 flex flex-col items-end"
              >
                <input
                  className="!px-5 w-full py-2.5 border border-secondary-600 rounded-md font-lora text-text-100 font-base leading-8"
                  placeholder="First Name*"
                  {...register("firstName", {
                    required: true,
                    validate: (value) => !!value.length,
                  })}
                />
                <input
                  className="!px-5 w-full py-2.5 border border-secondary-600 rounded-md font-lora text-text-100 font-base leading-8"
                  placeholder="Last Name*"
                  {...register("lastName", {
                    required: true,
                    validate: (value) => !!value.length,
                  })}
                />
                <input
                  className="!px-5 w-full py-2.5 border border-secondary-600 rounded-md font-lora text-text-100 font-base leading-8"
                  placeholder="Email*"
                  type="email"
                  {...register("email", {
                    required: true,
                    validate: (value) => value.includes("@"),
                  })}
                />
                <input
                  className="!px-5 w-full py-2.5 border border-secondary-600 rounded-md font-lora text-text-100 font-base leading-8"
                  placeholder="Company"
                  {...register("company")}
                />
                <input
                  className="!px-5 w-full py-2.5 border border-secondary-600 rounded-md font-lora text-text-100 font-base leading-8"
                  placeholder="How did you hear about us?"
                  {...register("howDidYouHearAboutUs")}
                />
                <textarea
                  className="!px-5 w-full py-2.5 border border-secondary-600 rounded-md font-lora text-text-100 font-base leading-8"
                  placeholder="Message"
                  {...register("message")}
                />
                <div className="!mt-10">
                  <SubmitRoundedButton>Submit</SubmitRoundedButton>
                </div>
              </form>
            ) : (
              <div className="w-full space-y-3 flex flex-col">
                <h1 className="font-inter text-2xl font-bold leading-7">
                  Thanks for reaching out! Someone on our team will be in touch
                  soon.
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
