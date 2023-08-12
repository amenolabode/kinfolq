import React from "react";
import { Header } from "../components/header";
import ListComponent from "../components/list_items";

const LandingPage = () => {
  const cloudinaryImageUrl =
    "https://res.cloudinary.com/dqicwto8t/image/upload/v1691803140/4512ee901a65a245d8af0a8dcfa15d0a_c5u5sy.png";
  return (
    <div className="text-white">
      <Header />
      <div className="mt-[124px] mb-[64px] mx-[64px]">
        <p className="text-white text-[28px] italic font-[700] leading-40">
          An invite-only conference for 300 Ambitious Black technologist in NYC
          this fall
        </p>
        <h2 className="text-white text-[92px] font-bold leading-tight tracking-tighter capitalize mt-[12px]">
          THE BLACK TECH CONFERENCE
        </h2>
        <p className="text-white font-bold text-[28px] leading-40 mt-[24px]">
          Our 2nd Annual NYC Conference. SEPT 29 - OCT 1 2023
        </p>
      </div>

      <div className="bg-lightgray bg-center bg-cover bg-no-repeat h-[800px] overflow-hidden">
        <img src={cloudinaryImageUrl} alt="" />
      </div>
      <ListComponent
        bgColor={"bg-gold"}
        title={"Apply to attend our conference"}
        subtitle={
          "A $250 ticket purchase is required if accepted to confirm your attendance"
        }
      />
      <ListComponent bgColor={"bg-black"} title={"Our Agenda"} />
      <ListComponent
        bgColor={"bg-gold"}
        title={"Become a sponsor"}
        subtitle={"Our sponsorship tiers for this conference are:"}
      />
      <div className="px-[64px] mt-[64px]">
        <div className="flex items-end gap-32 self-stretch">
          <h2 className="text-[60px] font-bold text-white">Our Gatherings</h2>
          <p className="font-medium text-[28px] leading-40">
            We partner with leading tech companies & brands to host brunches,
            co-living houses at conferences and concerts, pitch competitions,
            day parties, kickbacks, and more to bring driven Black people in
            tech together in meaningful ways that catalyse relationship-building
            among one another.
          </p>
        </div>
        <div className="">
          <iframe
            src="https://www.youtube.com/embed/66XwG1CLHuU?autoplay=1&mute=1&playlist=66XwG1CLHuU&loop=1&controls=0"
            className="w-full h-[720px] mt-[64px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
