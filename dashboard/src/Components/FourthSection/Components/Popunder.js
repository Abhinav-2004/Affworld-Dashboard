import React from "react";

const Popunder = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex">
          <img src="/assets/images/popunderImg.png" className="w-[18vw]" />
        </div>
        <div className="font-sm font-semibold text-[#0000007d]">
          When User clicks on the website, Ads open in new tab.
        </div>
      </div>

      <div className="flex flex-col h-[100%] justify-center items-center gap-10">
        <div className="flex text-left text-2xl font-bold text-[#9e4bf1] w-[100%]">
          Popunder
        </div>
        <div className="flex text-left text-[#5266a9] w-[100%]">
          Popunder ads appear in a fresh browser window or tab, often concealed
          behind the main window. The Affworld popunder script ensures complete
          responsiveness at 100%.
        </div>

        <div className="flex flex-row w-[100%] text-left gap-20">
            <button className="text-semibold text-[#413737]">Demo</button>
            <button className="text-semibold text-[#9e4bf1]">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Popunder;
