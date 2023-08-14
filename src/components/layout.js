import React from "react";
import { Header } from "../components/header";
import Footer from "../components/footer";
import { heroImage } from "../utils/cloudinary_images";

const LayOut = ({ layOutContent, pageTitle }) => {
  return (
    <div className="flex flex-col text-white justify-center items-center">
      <Header />
      <div className="w-full max-w-[2880px]">
        <div className="relative">
          <div className="bg-lightgray bg-center bg-cover bg-no-repeat h-[724px] overflow-hidden">
            <img src={heroImage} alt="" className="w-full" />
          </div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute top-[500px] text-[92px] inset-0 flex pl-[64px] text-white font-semibold tracking-[-3.68px] capitalize">
            {pageTitle}
          </div>
        </div>
        <div className="w-full max-w-[2880px]">{layOutContent}</div>
      </div>

      <Footer />
    </div>
  );
};

export default LayOut;
