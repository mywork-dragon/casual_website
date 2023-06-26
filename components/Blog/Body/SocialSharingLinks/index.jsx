import React, { useState, useEffect } from "react";
import {
  AiFillFacebook,
  AiOutlineLink,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

export const SOCIALS = {
  twitter: "http://twitter.com/intent/tweet/?url=",
  facebook: "http://www.facebook.com/sharer.php?u=",
  mail: "mailto:?subject=&body=",
};
import copy from "clipboard-copy";
import { toast } from "react-toastify";

const SocialSharingLinks = () => {
  const currentLocation =
    typeof window !== "undefined" ? window.location.href : "";
  const handleCopyLink = () => {
    const currentURL = window.location.href;
    copy(currentURL);
    toast.success("Link copied to clipboard", {
      autoClose: 3000,
    });
  };
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;
  return (
    <div className="sm:!sticky z-10 top-24 w-full sm:w-auto">
      <div className="space-y-5 flex flex-col border-r-4 border-secondary-600 pr-8">
        {/* <a
          href={`${SOCIALS.facebook}${currentLocation}`}
          target="_blank"
          className="hover:text-primary-500"
        >
          <AiFillFacebook size="30" />
        </a>
        <a
          href={`${SOCIALS.twitter}${currentLocation}`}
          target="_blank"
          className="hover:text-primary-500"
        >
          <AiOutlineTwitter size="30" />
        </a>
        <a
          href={`${SOCIALS.mail}${currentLocation}`}
          target="_blank"
          className="hover:text-primary-500"
        >
          <AiOutlineMail size="30" />
        </a> */}
        <a
          onClick={handleCopyLink}
          className="hover:text-primary-500 cursor-pointer"
        >
          <AiOutlineLink size="30" />
        </a>
      </div>
    </div>
  );
};

export default SocialSharingLinks;
