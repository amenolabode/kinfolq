import React from "react";
import { FaArrowCircleRight, FaArrowUp } from "react-icons/fa";

const ListComponent = ({ title, subtitle, bgColor }) => {
  return (
    <div className={`${bgColor} px-[64px] py-[64px]` }>
      <div className="flex items-center justify-between">
        <span>
          <h2 className="text-[60px] font-[700] capitalize mb-[8px]">
            {title}
          </h2>
          <p className="text-white text-[28px] font-[500] leading-10">
            {subtitle}
          </p>
        </span>
        <div className="p-[36px] border hover:bg-white border-white rounded-[137px] group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-45 transition duration-300 ease-in-out group-hover:text-black"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 5 5 12"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
