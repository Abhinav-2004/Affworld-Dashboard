import React from "react";
import "../../CSS/ThirdSection.css";
const ThirdSection = () => {
  return (
    <>
      <div className="dekstop-view flex flex-col justify-between items-center m-[5%] p-[2%]">
        <div className="flex w-[100%] text-[2vw] text-left font-semibold">
          Profits from Diverse traffic sources.
        </div>
        <div className="flex justify-center items-center flex-row mt-[5%]">
          <div className="w-[50%] flex flex-col justify-center items-center">
            <div>
              {" "}
              <img
                src="/assets/images/thirdsection1.png"
                className="h-[18vw]"
              />
            </div>
            <div className="w-[100%] text-left mt-[5%] text-[3vh] font-semibold text-[#5266a9]">
              Social media and mobile platforms.
              <span className="text-[#9e4bf1] font-semibold"> app traffic</span>
            </div>
            <div className="text-left font-semibold text-md mt-[2%] text-[#5266a9]">
              We collaborate with social marketers and affiliate marketers who
              possess the expertise to capitalize on their social media
              followers. This applies to various platforms such as Facebook,
              Pinterest, Instagram, TikTok, and Snapchat, utilizing the
              potential of affiliate marketing tools. Among these tools is
              Affworld's intelligent direct link - a remarkable solution for
              seamlessly connecting offers with relevant traffic. Mobile app
              developers and proprietors of messenger groups, chats, and
              channels can also leverage this tool to monetize their offerings.
              This is due to its ability to turn any converting button or image
              into a source of revenue for them
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center">
            <div className="w-[100%] text-left mt-[5%] text-[3vh] font-semibold text-[#5266a9]">
              Desktop or mobile
              <span className="text-[#9e4bf1] font-semibold">
                {" "}
                website traffic
              </span>
            </div>
            <div className="text-left font-semibold text-md mt-[2%] text-[#5266a9]">
              If you operate a News or Books website, maintain a Marketing or
              SEO blog, or provide services like URL Shortening or File
              Converting, you've likely considered the potential of earning
              through online advertising or affiliate marketing. Join Affworld,
              the reputable ad network for publishers, and experience elevated
              CPM rates.
            </div>

            <div>
              <img src="/assets/images/thirdsection2.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-view flex flex-col justify-between items-center m-[5%] p-[2%]">
        <div className="flex w-[100%] text-2xl text-center font-semibold">
          Profits from Diverse traffic sources.
        </div>
        <div className="flex justify-center items-center flex-col mt-[5%]">
          <div className="w-auto flex flex-col justify-center items-center">
            <div className="w-[100%] flex justify-center items-center">
              {" "}
              <img
                src="/assets/images/thirdsection1.png"
                className="w-[60%]"
              />
            </div>
            <div className="w-[100%] text-left mt-[5%] text-[3vh] font-semibold text-[#5266a9]">
              Social media and mobile platforms
              <span className="text-[#9e4bf1] font-semibold"> app traffic</span>
            </div>
            <div className="text-left font-semibold text-md mt-[2%] text-[#5266a9]">
              We collaborate with social marketers and affiliate marketers who
              possess the expertise to capitalize on their social media
              followers. This applies to various platforms such as Facebook,
              Pinterest, Instagram, TikTok, and Snapchat, utilizing the
              potential of affiliate marketing tools. Among these tools is
              Affworld's intelligent direct link - a remarkable solution for
              seamlessly connecting offers with relevant traffic. Mobile app
              developers and proprietors of messenger groups, chats, and
              channels can also leverage this tool to monetize their offerings.
              This is due to its ability to turn any converting button or image
              into a source of revenue for them
            </div>
          </div>
          <div className="w-auto flex flex-col justify-center items-center mt-[5%]">
            <div className="w-[100%] text-left mt-[5%] text-[3vh] font-semibold text-[#5266a9]">
              Desktop or mobile
              <span className="text-[#9e4bf1] font-semibold">
                {" "}
                website traffic
              </span>
            </div>
            <div>
              <img src="/assets/images/thirdsection2.png" />
            </div>
            <div className="text-left font-semibold text-md mt-[2%] text-[#5266a9]">
              If you operate a News or Books website, maintain a Marketing or
              SEO blog, or provide services like URL Shortening or File
              Converting, you've likely considered the potential of earning
              through online advertising or affiliate marketing. Join Affworld,
              the reputable ad network for publishers, and experience elevated
              CPM rates.
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
