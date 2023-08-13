import React from "react";

const MemberCard = ({ imgSrc, name, role }) => {
  return (
    <div className="flex flex-col items-start gap-[28px] flex-1">
      <div className="w-full rounded-[400px] border border-4 border-white overflow-hidden">
        <img className="object-cover w-full h-full" src={imgSrc} alt="" />
      </div>
      <div className="w-full">
        <p className="text-[20px] text-center font-bold capitalize">{name}</p>
        <p className="text-white text-center text-base font-normal">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
