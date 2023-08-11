import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  // const navigate = useNavigate();
  const MobileSideNavItems = () => {
    return (
      <div className="flex justify-start  w-full h-full pl-[20px] pr-[100px] py-8 bg-black ">
        <div className="flex justify-end"></div>
        <div className="flex-col items-center justify-center w-full mt-24 space-y-8 text-white">
          <h1 className="mb-4 text-[20px] font-semibold ">Home</h1>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed top-0 z-50 flex flex-col w-full h-auto ">
      <div className="flex items-center justify-between w-full px-4 py-3 bg-black md:px-16">
        {/* <Drawer
            // open={openNavBar}
            anchor={"left"}
            className="w-[200px]"
            // onClose={() => setOpenNavBar(false)}
          >
            {MobileSideNavItems()}
          </Drawer> */}

        <img src="./assets/Kinfolq.png" alt="Logo" className="w-14 lg:w-20" />

        <div className=" text-white items-center hidden flex justify-end items-center gap-8 flex-shrink-0 self-stretch">
          {/* <Link to="/" className="text-white ">
            Home
          </Link>
          <Link to="/partner" className="text-white ">
            Home
          </Link> */}
        </div>
      </div>
    </div>
  );
};
