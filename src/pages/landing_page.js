/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef } from "react";
import { Header } from "../components/header";
import ListComponent from "../components/list_items";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberCard from "../components/members_card";
import Footer from "../components/footer";
import { heroImage, imageUrls, partnerUrls } from "../utils/cloudinary_images";
import { members } from "../utils/member_data";
import { paths } from "../utils/routes";
import { useNavigate } from "react-router-dom";

import RevealAnimation from "../components/reveal_animation";

const LandingPage = () => {
  const navigate = useNavigate();

  const settings = {
    // dots: false,
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 500,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col text-white justify-center items-center">
      <Header />
      <div className="pt-[124px] w-full max-w-[2880px]">
        <div className=" mb-[64px] mx-[64px]">
          <RevealAnimation
            child={
              <p className="text-white text-[28px] italic font-[700] leading-40">
                An invite-only conference for 300 Ambitious Black technologist
                in NYC this fall
              </p>
            }
            delay={0.25}
          />
          <RevealAnimation
            delay={0.5}
            child={
              <h2 className="text-white text-[92px] font-bold leading-tight tracking-tighter capitalize mt-[12px]">
                THE BLACK TECH CONFERENCE
              </h2>
            }
          />

          <RevealAnimation
            delay={0.75}
            child={
              <p className="text-white font-bold text-[28px] leading-40 mt-[24px]">
                Our 2nd Annual NYC Conference. SEPT 29 - OCT 1 2023
              </p>
            }
          />
        </div>

        <RevealAnimation
          delay={0.75}
          child={
            <div className="bg-lightgray bg-center bg-cover bg-no-repeat h-[800px] overflow-hidden">
              <img src={heroImage} alt="" className="w-full" />
            </div>
          }
        />

        <ListComponent
          bgColor={"bg-gold"}
          title={"Apply to attend our conference"}
          subtitle={
            "A $250 ticket purchase is required if accepted to confirm your attendance"
          }
          OnClick={() => {
            navigate(paths.TICKET);
          }}
        />
        <ListComponent
          bgColor={"bg-black"}
          title={"Our Agenda"}
          OnClick={() => {
            navigate(paths.AGENDA);
          }}
        />
        <ListComponent
          bgColor={"bg-gold"}
          title={"Become a sponsor"}
          subtitle={"Our sponsorship tiers for this conference are:"}
          OnClick={() => {
            navigate(paths.PARTNER);
          }}
        />
        <div className="px-[64px] mt-[64px]">
          <RevealAnimation
            delay={0.75}
            child={
              <div className="flex items-end gap-32 self-stretch">
                <h2 className="text-[60px] font-bold text-white">
                  Our Gatherings
                </h2>
                <p className="font-medium text-[28px] leading-40">
                  We partner with leading tech companies & brands to host
                  brunches, co-living houses at conferences and concerts, pitch
                  competitions, day parties, kickbacks, and more to bring driven
                  Black people in tech together in meaningful ways that catalyse
                  relationship-building among one another.
                </p>
              </div>
            }
          />

          <RevealAnimation
            delay={0.75}
            child={
              <div className="mb-[48px]">
                <iframe
                  src="https://www.youtube.com/embed/66XwG1CLHuU?autoplay=1&mute=1&playlist=66XwG1CLHuU&loop=1&controls=0"
                  className="w-full h-[720px] mt-[64px]"
                ></iframe>
              </div>
            }
          />
        </div>
        <div className="overflow-hidden mb-[64px]">
          <div className="flex space-x-8 w-fit">
            <RevealAnimation
              delay={0.25}
              child={
                <div className="h-[320px] w-[358px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dqicwto8t/image/upload/w_1000,f_auto,q_auto/v1691972952/Kinfolq/members/people/5_pmgrxh.jpg"
                    alt=""
                  />
                </div>
              }
            />
            <RevealAnimation
              delay={0.5}
              child={
                <div className="h-[320px] w-[358px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dqicwto8t/image/upload/w_1000,f_auto,q_auto/v1691972950/Kinfolq/members/people/1_owf3sr.jpg"
                    alt=""
                  />
                </div>
              }
            />
            <RevealAnimation
              delay={0.75}
              child={
                <div className="h-[320px] w-[358px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dqicwto8t/image/upload/w_1000,f_auto,q_auto/v1691972920/Kinfolq/members/people/2_gorkfp.jpg"
                    alt=""
                  />
                </div>
              }
            />
            <RevealAnimation
              delay={1}
              child={
                <div className="h-[320px] w-[358px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dqicwto8t/image/upload/w_1000,f_auto,q_auto/v1691972926/Kinfolq/members/people/3_gsmcga.jpg"
                    alt=""
                  />
                </div>
              }
            />
            <RevealAnimation
              delay={1.25}
              child={
                <div className="h-[320px] w-[358px]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/dqicwto8t/image/upload/w_1000,f_auto,q_auto/v1691972897/Kinfolq/members/people/4_rxkduw.jpg"
                    alt=""
                  />
                </div>
              }
            />
          </div>
        </div>
        <div className="bg-white p-[64px] mb-[64px]">
          <div className="w-full flex items-center">
            <div className="w-full bg-black h-[1px] m-auto"></div>
            <h2 className="self-center w-2/3 text-center text-black text-[18px] font-medium capitalize my-8">
              PREVIOUS SPONSORS
            </h2>
            <div className="w-full bg-black h-[1px] m-auto"></div>
          </div>

          <Slider {...settings}>
            {partnerUrls.map((url, index) => (
              <div key={index} className="flex items-center">
                <img
                  className="h-[40px] w-fit m-auto align-center flex"
                  src={url}
                  alt={`${index + 1}`}
                />
              </div>
            ))}
          </Slider>
          {/* </div> */}
        </div>
        <div className="flex w-full p-[64px] flex-col items-center gap-[64px]">
          <span className="flex flex-col justify-center items-center self-stretch">
            <RevealAnimation
              delay={0.75}
              child={
                <div className="flex justify-center items-center self-stretch">
                  <h2 className="text-[60px] font-bold capitalize">
                    Our Members
                  </h2>
                </div>
              }
            />
            <RevealAnimation
              delay={0.75}
              child={
                <p className="text-white text-center font-medium text-[28px] leading-40">
                  They are building the next generation of technology & finance
                  companies
                </p>
              }
            />
          </span>
          <div className="grid grid-cols-4 gap-12">
            {members.map((member, index) => (
              <RevealAnimation
                delay={0.75}
                child={
                  <MemberCard
                    key={index}
                    imgSrc={member.imgSrc}
                    name={member.name}
                    role={member.role}
                  />
                }
              />
            ))}
          </div>

          <div className="mb-[64px] items-center flex flex-col">
            <RevealAnimation
              delay={0.75}
              child={
                <h2 className="text-[32px] font-bold capitalize text-center mb-[32px]">
                  They are founders, operators, investors, & alumni at
                  institutions like
                </h2>
              }
            />
            <div className="bg-[#ffffff] rounded-[16px] p-16">
              <div className="grid grid-cols-5 gap-12 items-center">
                {imageUrls.map((url, index) => (
                  <RevealAnimation
                    delay={0.75}
                    child={
                      <img
                        key={index}
                        src={url}
                        alt={`${index + 1}`}
                        className="h-12 w-content m-auto"
                      />
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
