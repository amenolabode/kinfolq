import React from "react";

const ListComponent = ({ title, subtitle, bgColor, OnClick }) => {
  return (
    <div onClick={OnClick} className={`${bgColor} px-[64px] py-[64px] group`}>
      <div className="flex items-center justify-between">
        <span>
          <h2 className="text-[60px] font-[700] capitalize mb-[8px]">
            {title}
          </h2>
          <p className="text-white text-[28px] font-[500] leading-10">
            {subtitle}
          </p>
        </span>
        <div className="p-[36px] border-2 border-white rounded-[137px] group-hover:scale-150 group-hover:rotate-175 transform origin-right transition-transform duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-45 transition duration-300 ease-in-out transform"
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
