import React, { useState } from "react";
import Popunder from "./Components/Popunder";
import SocialBar from "./Components/SocialBar";
import InPagePush from "./Components/InPagePush";
import NativeBanners from "./Components/NativeBanners";
import Banners from "./Components/Banners";
import "../../CSS/FourthSection.css";
const FourthSection = () => {
  const [active, setActive] = useState(1);
  function handleClick(number) {
    setActive(number);
  }
  return (
    <>
      <div className="dekstop-view flex flex-col justify-between items-center m-[5%] p-[2%]">
        <div className="flex w-[100%] text-[2vw] text-left font-semibold">
          <span className="text-[#9e4bf1]">Online Ads </span>&nbsp;
          <span className="text-[#392976]"> for publishers</span>
        </div>
        <div className="flex flex-row justify-center text-[#5266a9] item gap-10 mt-[6%] font-semibold text-xl">
          <div
            className={`flex justify-center text-[#5266a9] items-center p-4 m-2 ${
              active === 1
                ? "border-4 rounded-full border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(1);
              }}
            >
              Popunder
            </button>
          </div>
          <div
            className={`flex justify-center text-[#5266a9] items-center p-4 ${
              active === 2
                ? "border-4 rounded-full border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(2);
              }}
            >
              Social Bar
            </button>
          </div>
          <div
            className={`flex justify-center text-[#5266a9] items-center p-4 ${
              active === 3
                ? "border-4 rounded-full border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(3);
              }}
            >
              In-Page Push(Social Bar)
            </button>
          </div>
          <div
            className={`flex justify-center text-[#5266a9] items-center p-4 ${
              active === 4
                ? "border-4 rounded-full border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(4);
              }}
            >
              Native Banners
            </button>
          </div>
          <div
            className={`flex justify-center text-[#5266a9] items-center p-4 ${
              active === 5
                ? "border-4 rounded-full border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(5);
              }}
            >
              Banners
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-[4%]">
          {active === 1 && (
            <>
              <Popunder />
            </>
          )}
          {active === 2 && (
            <>
              <SocialBar />
            </>
          )}
          {active === 3 && (
            <>
              <InPagePush />
            </>
          )}
          {active === 4 && (
            <>
              <NativeBanners />
            </>
          )}
          {active === 5 && (
            <>
              <Banners />
            </>
          )}
        </div>
      </div>

      <div className="mobile-view flex flex-col justify-between items-center m-[5%] p-[2%]">
        <div className="flex w-[100%] text-2xl text-left font-semibold">
          <span className="text-[#9e4bf1]">Online Ads </span>&nbsp;
          <span className="text-[#392976]"> for publishers</span>
        </div>
        <div className="flex flex-row justify-center text-[#5266a9] item gap-10 mt-[6%] font-semibold text-sm">
          <div
            className={`flex justify-center text-[#5266a9] items-center p-1 m-2 ${
              active === 1
                ? "border-4 rounded-md border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(1);
              }}
            >
              Popunder
            </button>
          </div>
          <div
            className={`flex justify-center text-[#5266a9] items-center p-1 ${
              active === 2
                ? "border-4 rounded-md border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(2);
              }}
            >
              Social Bar
            </button>
          </div>

          
        </div>

        <div className="flex flex-row justify-center text-[#5266a9] item gap-2 mt-[6%] font-semibold text-sm">
          

          <div
            className={`flex justify-center text-[#5266a9] items-center p-1 ${
              active === 3
                ? "border-4 rounded-md border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(3);
              }}
            >
              In-Page Push(Social Bar)
            </button>
          </div>
          <div
            className={`flex justify-center text-[#5266a9] items-center p-1 ${
              active === 4
                ? "border-4 rounded-md border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(4);
              }}
            >
              Native Banners
            </button>
          </div>
          <div
            className={`flex justify-center text-[#5266a9] items-center p-1 ${
              active === 5
                ? "border-4 rounded-md border-[#9e4bf1]"
                : "border-none"
            }`}
          >
            <button
              onClick={() => {
                handleClick(5);
              }}
            >
              Banners
            </button>
          </div>
        </div>

        <div className="components first-letter:flex justify-center items-center mt-[4%]">
          {active === 1 && (
            <>
              <Popunder />
            </>
          )}
          {active === 2 && (
            <>
              <SocialBar />
            </>
          )}
          {active === 3 && (
            <>
              <InPagePush />
            </>
          )}
          {active === 4 && (
            <>
              <NativeBanners />
            </>
          )}
          {active === 5 && (
            <>
              <Banners />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FourthSection;
