import React from "react";
import "../../CSS/Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiLogoGoogle } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer-main-div flex justify-between items-center w-[100%]">
      <div className="footer-div-1 flex justify-between items-start">
        <div className="footer-bio flex flex-col justify-start items-center">
          <div className="affworld-logo-text text-[#392976]">
            <BiLogoGoogle size={50} fill="#9e4bf1" /> AffWorld.in
          </div>
          <div className="flex flex-row justify-start items-center text-[#9e4bf1] font-semibold">
            Affworld is dedicated to curating unforgettable advertising
            experinces by orchestrating innovative solutions across various
            platforms, including video, advanced TV, rich media, and social
            media. We merge the art and science of advertising to meticulously
            craft campaigns that elevate and enrich the experience of
            consumers,brands, and publishers alike.
          </div>

          <div className="flex flex-row justify-start items-center gap-10">
            <div>
              <BsTwitter />
            </div>
            <div>
              <BsFacebook />
            </div>
            <div>
              <BsLinkedin />
            </div>
            <div>
              <BsInstagram />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start text-sm font-semibold gap-2 text-[#392976]">
          <div className="text-md font-bold ">ABOUT US</div>
          <div className="text-[#9e4bf1]">Undertone</div>
          <div className="text-[#9e4bf1]">Leadership</div>
          <div className="text-[#9e4bf1]">Newsroom</div>
          <div className="text-[#9e4bf1]">Creative Gallery</div>
          <div className="text-[#9e4bf1]">Terms Of Use</div>
          <div className="text-[#9e4bf1]">Privacy</div>
          <div className="text-[#9e4bf1]">OPT OUT</div>
          <div className="text-[#9e4bf1]">CCPA Notice</div>
          <div className="text-[#9e4bf1]">Data Access Request</div>
          <div className="text-[#9e4bf1]">Sitemap</div>
        </div>

        <div className="flex flex-col justify-start items-start text-sm font-semibold gap-2 text-[#392976]">
          <div className="text-md font-bold">WORK WITH US</div>
          <div className="text-[#9e4bf1]">Careers</div>
          <div className="text-[#9e4bf1]">Locations</div>
          <div className="text-[#9e4bf1]">Contact</div>
          <div className="text-[#9e4bf1]">Ad Take Down policy</div>
        </div>

        <div className="flex flex-col justify-start items-start text-sm font-semibold gap-2 text-[#392976]">
          <div className="text-md font-bold">SOLUTIONS</div>
          <div className="text-[#9e4bf1]">Display</div>
          <div className="text-[#9e4bf1]">Video & CTV</div>
          <div className="text-[#9e4bf1]">Quick Turnaround</div>
          <div className="text-[#9e4bf1]">Social Influencers & Content</div>
          <div className="text-[#9e4bf1]">Retail Solutions</div>
          <div className="text-[#9e4bf1]">Publisher Solutions</div>
          <div className="text-[#9e4bf1]">Creative Solutions</div>
          <div className="text-[#9e4bf1]">Data, Tech & Measurements</div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col justify-start items-center">
            <div className="flex justify-start items-center">SignUp for AffWorld Updates</div>
            <div>Click here to Signup</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;