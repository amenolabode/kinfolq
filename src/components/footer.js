import { Divider } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-black w-full px-[64px] pt-[128px] pb-[64px] flex flex-col text-white justify-center items-center">
      <div className="max-w-[2880px] w-full">
        <div className="flex justify-stretch">
          <h2 className="w-full text-[60px] font-bold capitalize">
            Contact Our Team
          </h2>
          <div className="w-full grid grid-cols-2 gap-[32px] text-black text-[24px] font-bold capitalize">
            <p>Timi Dayo-Kayode👋🏾</p>
            <p>Insta: @oversabiboyy</p>
            <p>Email: t@kinfolq.com</p>
            <p>Twitter: @heistimi</p>
          </div>
        </div>
        <Divider className="h-[1px] bg-grey" />
        <div className="flex justify-between">
          <span>©️ Kinfolq@2023, All Rights Reserved.</span>
          <div className="space-x-[16px]">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
