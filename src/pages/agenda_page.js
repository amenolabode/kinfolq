import React, { useState } from "react";
import LayOut from "../components/layout";
import { motion } from "framer-motion";

const AgendaPage = () => {
  const [activeBar, setactiveBar] = useState("day_one");
  return (
    <LayOut
      pageTitle={"Agenda"}
      layOutContent={
        <>
          <motion.div className="px-[64px] pt-[64px] bg-gold">
            <motion.div className="flex items-end gap-32 self-stretch">
              <h2 className="w-1/2 text-[60px] font-bold text-white leading-[112%]">
                Our <br></br> Agenda
              </h2>
              <p className="w-full font-medium text-[28px] leading-40">
                They are building the next generation of technology companies
                and wield enormous levels of influence and buying power due to
                their high-impact, high-paying roles in tech and finance.
              </p>
            </motion.div>

            <motion.div className="bg-black flex p-[8px] rounded-[4px] mt-[64px]">
              <div
                className={`${
                  activeBar === "day_one" && "bg-gold"
                } cursor-pointer text-center w-full text-white text-[24px] capitalize px-[32px] py-[16px] `}
                onClick={() => {
                  setactiveBar("day_one");
                }}
              >
                Day 1, Friday September 15th
              </div>
              <div
                className={`${
                  activeBar === "day_two" && "bg-gold"
                } cursor-pointer text-center w-full text-white text-[24px] capitalize px-[32px] py-[16px] `}
                onClick={() => {
                  setactiveBar("day_two");
                }}
              >
                Day 2, Saturday September 16th
              </div>
              <div
                className={`${
                  activeBar === "day_three" && "bg-gold"
                } cursor-pointer text-center w-full text-white text-[24px] capitalize px-[32px] py-[16px] `}
                onClick={() => {
                  setactiveBar("day_three");
                }}
              >
                Day 3, Sunday September 17th
              </div>
            </motion.div>
          </motion.div>
        </>
      }
    />
  );
};

export default AgendaPage;
