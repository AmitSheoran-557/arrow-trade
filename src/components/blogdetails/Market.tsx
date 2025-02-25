import React from "react";
import Image from "next/image";
import CommonAIDriven from "../common/CommonAiDriven";
import { CHANGING_GAME_HEADING_LIST, CHANGING_GAME_LIST, MARKET_HEADING_LIST, MARKET_INSIGHTS_LIST } from "../../utils/helper";

const Market = () => {
  return (
    
    <div className="flex justify-center bg-darkBlue items-center py-[180px]">
      <div className="flex container relative max-w-[1140px] ">
        <div className="flex flex-col gap-y-[180px] ">
          <CommonAIDriven
            map={MARKET_INSIGHTS_LIST}
            heading="What are AI-Driven "
            colorHeading="Market Insights?"
            description="AI-driven market insights harness the power of artificial intelligence to analyze vast amounts of market data in real time, providing actionable information that can help traders and investors make informed decisions."
            image="/assets/images/webp/ai-driven-img-1.webp"
          />

          <CommonAIDriven
            map={CHANGING_GAME_LIST}
            heading="How AI-Driven Market insights are "
            colorHeading="Changing The Game"
            image="/assets/images/webp/ai-driven-img-2.webp"
          />
        </div>
        <div className="max-w-[485px] w-full flex justify-end">
          <div className="bg-driven sticky top-1 max-w-[364px] w-full border border-solid border-cyan rounded-3xl py-[30px] max-h-[525px]">
            <div className="flex gap-4 px-5 items-center">
              <Image className="max-w-20 w-full"
                src={"/assets/images/webp/card-profile-img-1.webp"}
                width={80}
                height={80}
                alt="profile image"
              />
              <p className="font-semibold text-white leading-[150%] max-md:text-sm">
                Darrell Steward
              </p>
            </div>{" "}
            <div className="flex flex-col px-5  gap-y-4">
              <p className="font-semibold leading-[121%] mt-6 text-white max-md:text-sm">
                What are AI-Driven Market Insights?
              </p>
              {MARKET_HEADING_LIST.map((item, index) => (
                <p className="text-white/70 leading-[150%] max-md:text-sm">
                  {item}
                </p>
              ))}
            </div>
            <div className="my-5 h-0.5 bg-white/25 w-full"></div>
            <div className="flex flex-col px-5  gap-y-4">
              <p className="font-semibold leading-[121%] text-white max-md:text-sm">
                What are AI-Driven Market Insights?
              </p>
              {CHANGING_GAME_HEADING_LIST.map((item, index) => (
                <p
                  key={index}
                  className="text-white/70 leading-[150%] max-md:text-sm"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
