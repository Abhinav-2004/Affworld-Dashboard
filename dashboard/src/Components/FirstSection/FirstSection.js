import React from "react";
import "../../CSS/FirstSection.css";
import BackgroundImage from "../FirstSection/firstsection1.png";
const FirstSection = () => {
  return (
    <>
      <div className="dekstop-view main-div flex justify-between items-center flex-row m-[5%] p-[2%] mt-0">
        <div className="w-[50%] flex flex-col">
          <div className="w-[100%] flex text-left text-[5vh] font-semibold text-[#392976]">
            You've discovered the
            <span className="flex text-[#9e4bf1]">&nbsp;Ultimate&nbsp;</span>
          </div>
          <div className="w-[100%] flex text-left text-[5vh] font-semibold text-[#392976]">
            advertising network for publishers.
          </div>
          <div className="w-[100%] flex text-left text-[2vh] font-semibold mt-[2%] text-[#392976]">
            Partner with us for a lifetime and receive
            <br />
            personalized assistance to boost your earnings.
          </div>
          <div className="w-[100%] flex text-left text-[3vh] font-semibold mt-[2%]">
            <button className="signup text-[#392976] flex justify-center items-center pl-4 pr-4 pt-2 pb-2 border-4 border-[#9e4bf1] rounded-full font-bold">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between items-center">
          <div className="cards flex flex-col justify-center items-center p-6">
            <div className="text-3xl">12 000 +</div>
            <div className="text-3xl border-b-4 border-[red] pb-4">
              advertisers
            </div>
          </div>
          <div className="cards flex flex-col justify-center items-center p-6">
            <div className="text-3xl">100 %</div>
            <div className="text-3xl border-b-4 border-[red] pb-4">
              fillrate
            </div>
          </div>
          <div className="cards flex flex-col justify-center items-center p-6">
            <div className="text-3xl">10 minutes</div>
            <div className="text-3xl border-b-4 border-[red] pb-4">
              approval
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-view flex flex-col justify-center items-center m-[5%] p-[2%] mt-0">
        <div className="flex justify-center items-center">
          <img src={BackgroundImage} alt="" />
        </div>
        <div className="mt-[5%] text-[#392976]">
          <div className="flex justify-center items-center text-xl">
            You've discovered the
            <span className="flex text-[#9e4bf1]">&nbsp;Ultimate&nbsp;</span>
          </div>
          <div className="flex justify-center items-center text-xl">
            advertising network for publishers.
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-[5%] gap-5">
          <div className="flex flex-col items-center justify-center mt-[5%] text-center">
            Partner with us for a lifetime and receive
            <br />
            personalized assistance to boost your earnings.
          </div>
          <button className="signup text-[#392976] flex justify-center items-center pl-4 pr-4 pt-2 pb-2 border-4 border-[#9e4bf1] rounded-full font-bold ">
            Sign Up
          </button>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center mt-[5%]">
          <div className="cards flex flex-col justify-center items-center p-6">
            <div className="text-3xl">12 000 +</div>
            <div className="text-3xl border-b-4 border-[red] pb-4">
              advertisers
            </div>
          </div>
          <div className="cards flex flex-col justify-center items-center p-6">
            <div className="text-3xl">100 %</div>
            <div className="text-3xl border-b-4 border-[red] pb-4">
              fillrate
            </div>
          </div>
          <div className="cards flex flex-col justify-center items-center p-6">
            <div className="text-3xl">10 minutes</div>
            <div className="text-3xl border-b-4 border-[red] pb-4">
              approval
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
