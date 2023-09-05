import React from "react";
import '../../CSS/SectionTwo.css';
const SectionTwo = () => {
  return (
    <div className="affworld-works flex justify-center items-center flex-col bg-[#831bf323] m-[5%] p-[2%] h-fit">
      <div className="heading-text flex w-[100%] text-[300%] text-left ml-[4%] text-[#392976]">
        How AffWorld Works
      </div>
      <div className="flex w-[100%] text-left text-[13px] ml-[4%] mt-[1%] text-[#9e4bf1] font-semibold">
        With Affworld, you can easily initiate a high-quality partner program
        designed specifically for your industry. It's a quick and
        <br />
        straightforward process that only requires a few minutes of your time!
      </div>
      <div>
        <div className="flex justify-center items-center">
        <div className="card-group mt-[6%] text-[#5b3eff] font-semibold">
          <div className="card1 flex flex-col justify-center items-center bg-white border-2 w-[20vw] rounded-3xl">
            <div className="flex justify-start items-left pt-7 pl-7 pr-7 w-[100%]">
              <img src="/assets/images/sectiontwo1.png" className="w-[50%]" />
            </div>
            <div className="flex justify-start items-left p-7 w-[100%] text-2xl">
              eCommerce
            </div>
            <div className="flex justify-start items-left w-[100%]  pl-7 pr-7 pb-7">
              We streamline online stores' performance tracking via partner
              programs in a single dashboard.
            </div>
          </div>
          <div className="card1 flex flex-col justify-center items-center bg-white border-2 w-[20vw] rounded-3xl">
            <div className="flex justify-start items-left pt-7 pl-7 pr-7 w-[100%]">
              <img src="/assets/images/sectiontwo2.png" className="w-[50%]" />
            </div>
            <div className="flex justify-start items-left p-7 w-[100%] text-2xl">
              Service
            </div>
            <div className="flex justify-start items-left w-[100%] pl-7 pr-7 pb-7">
              We assist in creating effective partner programs for both online
              and offline services, yielding proven outcomes.
            </div>
          </div>
          <div className="card1 flex flex-col justify-center items-center bg-white border-2 w-[20vw] rounded-3xl">
            <div className="flex justify-start items-left pt-7 pl-7 pr-7 w-[100%]">
              <img src="/assets/images/sectiontwo3.png" className="w-[50%]" />
            </div>
            <div className="flex justify-start items-left p-7 w-[100%] text-2xl">
              Finance
            </div>
            <div className="flex justify-start items-left w-[100%] pl-7 pr-7 pb-7">
              We assist MT4/5 and crypto businesses in launching partner
              programs and establishing reliable partnerships.
            </div>
          </div>
          <div className="card1 flex flex-col justify-center items-center bg-white border-2 w-[20vw] rounded-3xl">
            <div className="flex justify-start items-left pt-7 pl-7 pr-7 w-[100%]">
              <img src="/assets/images/sectiontwo4.png" className="w-[50%]" />
            </div>
            <div className="flex justify-start items-left p-7 w-[100%] text-2xl">
              iGaming
            </div>
            <div className="flex justify-start items-left w-[100%] pl-7 pr-7 pb-7">
              We elevate transparency and trust for online casinos, sportsbooks,
              and gambling affiliate networks.
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
