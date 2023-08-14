import React from "react";
import LayOut from "../components/layout";
import ListComponent from "../components/list_items";
import { useNavigate } from "react-router-dom";
import { paths } from "../utils/routes";
import { eventDetails } from "../utils/events_details_data";

const BuyTicket = () => {
  const navigate = useNavigate();
  return (
    <LayOut
      pageTitle={"Get a Ticket"}
      layOutContent={
        <div className="w-full bg-gold">
          <div className="p-[64px]">
            <h2 className="text-white text-[60px] font-bold capitalize">
              Our sponsorship tiers for this conference are:
            </h2>
            <p className="text-white font-medium text-[28px] leading-40 pt-[32px]">
              They are building the next generation of technology companies and
              wield enormous levels of influence and buying power due to their
              high-impact, high-paying roles in tech and finance.
            </p>
            <div className="py-[56px]">
              <table className="w-full table-auto border">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-[24px]">Host</th>
                    <th className="text-left p-[24px]">GIZMODO</th>
                    <th className="text-left p-[24px]">GIZMODO</th>
                    <th className="text-left p-[24px]">GIZMODO</th>
                    <th className="text-left p-[24px]">GIZMODO</th>
                    <th className="text-left p-[24px]">GIZMODO</th>
                  </tr>
                </thead>
                <tbody>
                  {eventDetails.map((row, rowIndex) => (
                    <tr className="border-b" key={rowIndex}>
                      <td className="p-[24px]">{row.label}</td>
                      {row.items.map((item, itemIndex) => (
                        <td className="p-[24px]" key={itemIndex}>
                          {item}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ListComponent
            title={"Buy A Ticket To Attend"}
            subtitle={"A ticket for this conference is $250 per attendee"}
            OnClick={() => navigate(paths.TICKET)}
            bgColor={"bg-black"}
          />
        </div>
      }
    />
  );
};

export default BuyTicket;
