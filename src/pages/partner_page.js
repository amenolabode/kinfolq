import React from "react";
import LayOut from "../components/layout";

const PartnerPage = () => {
  return (
    <LayOut
      pageTitle={"Become a Sponsor"}
      layOutContent={
        <div className="w-full p-[64px] bg-gold">
          <h2 className="text-white text-[60px] font-bold capitalize">
            Our sponsorship tiers for this conference are:
          </h2>
          <p className="text-white font-medium text-[28px] leading-40 pt-[32px]">
            They are building the next generation of technology companies and
            wield enormous levels of influence and buying power due to their
            high-impact, high-paying roles in tech and finance.
          </p>
        </div>
      }
    />
  );
};

export default PartnerPage;
