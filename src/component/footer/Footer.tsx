import { useState } from "react";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState("");

  const toggleAccordion = (heading: string) => {
    setActiveAccordion(activeAccordion === heading ? "" : heading);
  };

  return (
    <div className="w-full bottom-0 bg-primarydark pt-8">
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-32">
        <FooterColumn
          heading="Products"
          links={["Explore", "Launchpad", "Invest"]}
          active={activeAccordion === "Products"}
          toggleAccordion={toggleAccordion}
        />
        <FooterColumn
          heading="Quick access"
          links={["Curate", "Report a bug", "Request a feature"]}
          active={activeAccordion === "Quick access"}
          toggleAccordion={toggleAccordion}
        />
        <FooterColumn
          heading="Resources"
          links={["Blog", "Docs", "Newsletter", "Litepaper", "FAQ"]}
          active={activeAccordion === "Resources"}
          toggleAccordion={toggleAccordion}
        />
        <FooterColumn
          heading="Company"
          links={["About Us", "Media Kit", "Privacy Policy"]}
          active={activeAccordion === "Company"}
          toggleAccordion={toggleAccordion}
        />
        <FooterColumn
          heading="Connect with us"
          links={["Twitter", "Discord", "Telegram", "Linkedin", "Instagram", "Youtube"]}
          active={activeAccordion === "Connect with us"}
          toggleAccordion={toggleAccordion}
        />
      </div>
      <p className="text-center rela py-8 text-white text-sm">&copy; 2023-2024, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
