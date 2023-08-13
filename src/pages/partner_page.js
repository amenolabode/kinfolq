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
          <div className="flex items-start gap-[32px] self-stretch mt-[64px]">
            <div className="flex flex-col items-start gap-[16px] w-2/3">
              <p className="text-[28px] capitalize font-semibold">
                Gold Sponsor
              </p>
              <h2 className="text-[60px] font-semibold capitalize">$15K+</h2>
            </div>
            <div className="flex flex-col items-start gap-[16px] w-full">
              <p className="text-[24px] font-semibold">PERKS</p>
              <ul class="list-disc pl-6 text-[24px] mb-[32px]">
                <li className="mb-[8px]">
                  A dedicated email blast to the Kinfolq community about your
                  company/initiatives
                </li>
                <li className="mb-[8px]">
                  Hackathon prize named after your organization
                </li>
                <li className="mb-[8px]">
                  Speaking opportunity on one of our conference panels
                </li>
                <li className="mb-[8px]">
                  In-person recognition during every day of programming
                </li>
                <li className="mb-[8px]">
                  Shared speaking slot with industry leaders at the conference
                </li>
                <li className="mb-[8px]">
                  Represent your company at our career fair
                </li>
                <li className="mb-[8px]">
                  Logo placement & recognition on the conference website &
                  materials
                </li>
                <li className="mb-[8px]">
                  Access to attendee resume book & hackathon semifinalists
                </li>
                <li className="mb-[8px]">
                  Two free tickets for you or anyone you nominate
                </li>
              </ul>
              <div className="bg-white h-[1px] w-full"></div>
            </div>
          </div>
          <div className="flex items-start gap-[32px] self-stretch mt-[64px]">
            <div className="flex flex-col items-start gap-[16px] w-2/3">
              <p className="text-[28px] capitalize font-semibold">
                Silver Sponsor
              </p>
              <h2 className="text-[60px] font-semibold capitalize">$7500</h2>
            </div>
            <div className="flex flex-col items-start gap-[16px] w-full">
              <p className="text-[24px] font-semibold">PERKS</p>
              <ul class="list-disc pl-6 text-[24px] mb-[32px]">
                <li className="mb-[8px]">
                  Speaking opportunity on one of our conference panels
                </li>
                <li className="mb-[8px]">
                  In-person recognition during every day of programming
                </li>
                <li className="mb-[8px]">
                  Shared speaking slot with industry leaders at the conference
                </li>
                <li className="mb-[8px]">
                  Represent your company at our career fair
                </li>
                <li className="mb-[8px]">
                  Logo placement & recognition on the conference website &
                  materials
                </li>
                <li className="mb-[8px]">
                  Access to attendee resume book & hackathon semifinalists
                </li>
                <li className="mb-[8px]">
                  Two free tickets for you or anyone you nominate
                </li>
              </ul>
              <div className="bg-white h-[1px] w-full"></div>
            </div>
          </div>
          <div className="flex items-start gap-[32px] self-stretch mt-[64px]">
            <div className="flex flex-col items-start gap-[16px] w-2/3">
              <p className="text-[28px] capitalize font-semibold">
                Bronze Sponsor
              </p>
              <h2 className="text-[60px] font-semibold capitalize">$5000</h2>
            </div>
            <div className="flex flex-col items-start gap-[16px] w-full">
              <p className="text-[24px] font-semibold">PERKS</p>
              <ul class="list-disc pl-6 text-[24px] mb-[32px]">
                
                <li className="mb-[8px]">
                  Logo placement & recognition on the conference website &
                  materials
                </li>
                <li className="mb-[8px]">
                  Access to attendee resume book & hackathon semifinalists
                </li>
                <li className="mb-[8px]">
                  One free ticket for you or anyone you nominate
                </li>
              </ul>
              <div className="bg-white h-[1px] w-full"></div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default PartnerPage;
