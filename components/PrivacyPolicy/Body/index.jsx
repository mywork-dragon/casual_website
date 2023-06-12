import { dateFormateHandler } from "@/lib/index";
import Link from "next/link";
import React, { useMemo } from "react";
import slugify from "slugify";

const content = {
  sections: [
    {
      title: "Personal information we collect",
      content: `
      <p><span style="font-weight: bold;">Information you provide to us</span>. Personal information you may provide to us through the Service or otherwise includes:</p>
      <ul>
<li><strong>Business Contact data</strong>, such as your first and last name, mailing address, Company name, and email address.</li>
<li><strong>Communications</strong> that we exchange with you, including when you contact us with questions or feedback, through the Service or otherwise.</li>
<li><strong>Marketing data</strong>, such as your preferences for receiving our marketing communications and details about your engagement with them.</li>
<li><strong>Other data</strong> not specifically listed here, which we will use as described in this Privacy Policy or as otherwise disclosed at the time of collection.</li>
</ul>
<p><span style="font-weight: bold;">Third-party sources</span>. We may combine personal information we receive from you with personal information we obtain from other sources, such as:</p>
<ul>
<li><strong>Public sources</strong>, such as government agencies, public records, social media platforms, and other publicly available sources.</li>
<li><strong>Data providers</strong>, such as information services and data licensors that provide demographic and other information.</li>
<li><strong>Our affiliate partners</strong>, such as our affiliate network provider and publishers, influencers, and promoters who participate in our paid affiliate programs.</li>
<li><strong>Marketing partners</strong>, such as joint marketing partners and event co-sponsors.</li>
</ul>
<p><span style="font-weight: bold;">Automatic data collection</span>. We, our service providers, and our business partners may automatically log information about you, your computer or mobile device, and your interaction over time with the Service, our communications and other online services, such as:</p>
<ul>
<li><strong>Device data</strong>, such as your computer’s or mobile device’s operating system type and version, manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g., phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes), language settings, mobile device carrier, radio/network information (e.g., Wi-Fi, LTE, 3G), and general location information such as city, state or geographic area.</li>
<li><strong>Online activity data</strong>, such as pages or screens you viewed, how long you spent on a page or screen, the website you visited before browsing to the Service, navigation paths between pages or screens, information about your activity on a page or screen, access times and duration of access, and whether you have opened our marketing emails or clicked links within them.</li>
</ul>
<p><span style="font-weight: bold;">Cookies and similar technologies</span>. Like many online services, we use the following technologies:</p>
<ul>
<li><strong>Cookies</strong>, which are text files that websites store on a visitor’s device to uniquely identify the visitor’s browser or to store information or settings in the browser for the purpose of helping you navigate between pages efficiently, remembering your preferences, enabling functionality, helping us understand user activity and patterns, and facilitating analytics and online advertising.</li>
<li><span style="font-weight: bold;">Session Replay Technologies</span><span style="font-weight: normal;">.</span>&nbsp;We use third party services provided by FullStory that employ software code to record users’ interactions with the Services in a manner that allows us to watch DVR-like replays of those user sessions. The replays include users’ clicks, mobile app touches, mouse movements, scrolls, and keystrokes during those sessions. These replays help us diagnose usability problems and identify areas for improvement. You can learn more about FullStory at <a href="https://www.fullstory.com/legal/privacy-policy">https://www.fullstory.com/legal/privacy-policy</a>&nbsp;and you can opt-out of session recording by FullStory at <a href="https://www.fullstory.com/optout/.">https://www.fullstory.com/optout/. </a></li>
</ul>
      `,
    },
    {
      title: "How we use your personal information",
      content: `
      <p>We may use your personal information for the following purposes or as otherwise described at the time of collection:</p>
      <p><span style="font-weight: bold;">Service delivery</span>. We may use your personal information to:</p>
      <ul>
<li>provide, operate and improve the Service and our business;</li>
<li>communicate with you about the Service, including by sending announcements, updates, and support and administrative messages;</li>
<li>understand your needs and interests related to the Service and our communications;</li>
<li>and provide support, respond to your requests, questions and feedback.</li>
</ul>
<p>Research and development. We may use your personal information for research and development purposes, including to analyze and improve the Service and our business. As part of these activities, we may create aggregated, de-identified or other anonymous data from personal information we collect. We make personal information into anonymous data by removing information that makes the data personally identifiable to you. We may use this anonymous data and share it with third parties for our lawful business purposes, including to analyze and improve the Service and promote our business.</p>
<p><span style="font-weight: bold;">Marketing</span>. We, our service providers and our third-party partners may collect and use your personal information for marketing purposes, including sending you Causal Labs-related or other direct marketing communications as permitted by law. You may opt-out of our marketing communications as described in the <a href="#opt-out" rel="noopener">Opt-out of marketing</a> section below.</p>
<ul id="compliance">
<li>comply with applicable laws, lawful requests, and legal process, such as to respond to subpoenas or requests from government authorities;</li>
<li>protect our, your or others’ rights, privacy, safety or property (including by making and defending legal claims);</li>
<li>audit our internal processes for compliance with legal and contractual requirements or our internal policies;</li>
<li>enforce the terms and conditions that govern the Service;</li>
<li>and prevent, identify, investigate and deter fraudulent, harmful, unauthorized, unethical or illegal activity, including cyberattacks and identity theft.</li>
</ul>
<p><span style="font-weight: bold;">With your consent</span>. In some cases, we may specifically ask for your consent to collect, use or share your personal information, such as when required by law.</p>
      `,
    },
    {
      title: "How we share your personal information",
      content: `
      <p>We may share your personal information with the following parties and as otherwise described in this Privacy Policy or at the time of collection.</p>
      <p><span style="font-weight: bold;">Service providers</span>. Third parties that provide services on our behalf or help us operate the Service or our business (such as hosting, information technology, email delivery, marketing, and website analytics).</p>
      <p><span style="font-weight: bold;">Business and marketing partners</span>. Third parties with whom we collaborate on joint activities (such as co-sponsors of contests and promotions), with whom we have entered into joint marketing relationships or other joint ventures, or who we think may offer you products or services that you may enjoy.</p>
      <p><span style="font-weight: bold;">Professional advisors</span>. Professional advisors, such as lawyers, auditors, bankers and insurers, where necessary in the course of the professional services that they render to us.</p>
      <p><span style="font-weight: bold;">Authorities and others</span>. Law enforcement, government authorities, and private parties, as we believe in good faith to be necessary or appropriate for the <a href="#compliance" rel="noopener">compliance and protection purposes</a> described above.</p>
      <p><span style="font-weight: bold;">Business transferees</span>. Acquirers and other relevant participants in business transactions (or negotiations and diligence for such transactions) involving a corporate divestiture, merger, consolidation, acquisition, reorganization, sale or other disposition of all or any portion of the business or assets of, or equity interests in, Causal Labs or our affiliates (including, in connection with a bankruptcy or similar proceedings).</p>
      `,
    },
    {
      title: "Your choices",
      content: `
      <p>You have the following choices with respect to your personal information.</p>
      <p id="opt-out"><span style="font-weight: bold;">Opt-out of marketing communications</span>. You may opt-out of marketing-related emails by following the opt-out or unsubscribe instructions at the bottom of the email, or by <a href="#How-to-contact-us" rel="noopener">contacting us</a>. Please note that if you choose to opt-out of marketing-related emails, you may continue to receive service-related and other non-marketing emails.</p>
      <p><span style="font-weight: bold;">Do Not Track</span>. Some Internet browsers may be configured to send “Do Not Track” signals to the online services that you visit. We currently do not respond to “Do Not Track” or similar signals. To find out more about “Do Not Track,” please visit <a href="http://www.allaboutdnt.com.">http://www.allaboutdnt.com. </a></p>
      <p><span style="font-weight: bold;">Declining to provide information</span>. We need to collect personal information to provide certain services. If you do not provide the information we identify as required or mandatory, we may not be able to provide those services.</p>
      `,
    },
    {
      title: "Other sites and services",
      content:
        "The Service may contain links to websites, mobile applications, and other online services operated by third parties. In addition, our content may be integrated into web pages or other online services that are not associated with us. These links and integrations are not an endorsement of, or representation that we are affiliated with, any third party. We do not control websites, mobile applications or online services operated by third parties, and we are not responsible for their actions. We encourage you to read the privacy policies of the other websites and mobile applications and online services you use.",
    },
    {
      title: "Security",
      content:
        "We employ a number of technical, organizational and physical safeguards designed to protect the personal information we collect. However, security risk is inherent in all internet and information technologies and we cannot guarantee the security of your personal information.",
    },
    {
      title: "International data transfer",
      content:
        "We are headquartered in the United States and may use service providers that operate in other countries. Your personal information may be transferred to the United States or other locations where privacy laws may not be as protective as those in your state, province, or country.",
    },
    {
      title: "Children",
      content: `The Service is not intended for use by children under 13 years of age. If we learn that we have collected personal information through the Service from a child under 13 without the consent of the child’s parent or guardian as required by law, we will delete it. We encourage parents or guardians with concerns to contact us.`,
    },
    {
      title: "Changes to this Privacy Policy",
      content: `
      We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on the Service. If required by law we will also provide notification of changes in another way that we believe is reasonably likely to reach you, such as via email or another manner through the Service. Any modifications to this Privacy Policy will be effective upon our posting the modified version (or as otherwise indicated at the time of posting). In all cases, your use of the Service after the effective date of any modified Privacy Policy indicates your acceptance of the modified Privacy Policy.
      `,
    },
    {
      title: "How to contact us",
      content: `<ul>
      <li>Email: <a href="mailto:privacy@causallabs.io">privacy@causallabs.io </a></li>
      <li>Mail: 30R Jamaica St, Boston, MA 02130</li>
      <li>Phone: (617) 752-1553</li>
      </ul>`,
    },
  ],
  title: "Privacy Policy",
  effective_date: new Date(),
  description: `This Privacy Policy describes the privacy practices of Causal Labs,
  Inc. ("Causal Labs," "we", “us” or "our") and how we handle personal
  information that we collect through our digital properties that link
  to this Privacy Policy, including our website (collectively, the
  “Service”), as well as through other activities described in this
  Privacy Policy.
  <br>
  <br>
  Causal Labs tools used by our business customers to conduct product
  analytics, A/B testing, feature flagging, and machine learning
  operations. This Privacy Policy does not apply to information that
  we process on behalf of our business customers while providing the
  Causal Labs platform and services to them. Our use of this
  information is restricted by our agreements with those business
  customers. If you have concerns regarding personal information that
  we process on behalf of a business, please direct your concerns to
  that business. 
  <br>
  <br>
  Our websites, products and services are designed for businesses and
  their representatives. We do not offer products or services for use
  by individuals for their personal, family or household purposes.
  Accordingly, we treat all personal information we collect as
  pertaining to individuals in their capacities as business
  representatives and not their individual capacities.`,
};

const PrivacyPolicyBody = () => {
  const beautifulDate = useMemo(
    () => dateFormateHandler(content.effective_date),
    []
  );
  return (
    <div className="w-full mt-12 sm:mt-24">
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-9 xl:px-6 mx-auto">
        <div className="lg:max-w-2xl mt-8 sm:mt-24 lg:mt-0">
          <h1 className="uppercase lg:max-w-xl text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
            {content.title}
          </h1>
          <p className="font-lora lg:max-w-401 text-base leading-6 sm:text-lg sm:leading-6.5 text-text-100 font-normal mt-2 sm:mt-4">
            Effective as of {beautifulDate.formattedDate}.
          </p>
        </div>
        <div>
          <p
            dangerouslySetInnerHTML={{ __html: content.description || "" }}
            className="font-lora text-lg leading-7 text-text-100 mt-3 sm:!mt-5 lg:!mt-10"
          ></p>
          <p className="text-2xl font-bold text-text-300 !mt-4">Index</p>
          <ul className="list-disc mt-6 space-y-2">
            {content.sections.map((section, index) => (
              <li key={index} className="ml-4">
                <Link href={`#${slugify(section.title)}`}>
                  <a className="text-base font-bold leading-4 text-text-300 hover:text-primary-500">
                    {section.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 space-y-5">
          {content.sections.map((section, index) => (
            <div
              className="scroll-mt-36"
              key={index}
              id={slugify(section.title)}
            >
              <Link href={`#${slugify(section.title)}`}>
                <a className="uppercase hover:text-primary-500 text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-4.5xl font-extrabold lg:leading-12.5 text-text-300">
                  {section.title}
                </a>
              </Link>
              <div
                className="mt-6 text-xl font-inter rich-text"
                dangerouslySetInnerHTML={{ __html: section.content || "" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyBody;
