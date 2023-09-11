import React from "react";
import "../../CSS/Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiLogoGoogle } from "react-icons/bi";
const Footer = () => {
  return (<>
    <div className="dekstop-view-footer">
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

      <div className="footer-div-2 flex flex-col justify-between items-start gap-20">
        <div className="flex flex-col justify-start items-center gap-10">
            <div className="signup-text-before flex justify-start items-center text-[#9e4bf1]">SignUp for AffWorld Updates</div>
            <div className="signup-text">Click here to Signup</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-0">
          <div className="image1"><img src="/assets/images/applepaylogo.png"/></div>
          <div className="image2"><img src="/assets/images/mastercardlogo.png"/></div>
          <div className="image3"><img src="/assets/images/paypal.png"/></div>
          <div className="image4"><img src="/assets/images/bitcoin.png"/></div>
        </div>
      </div>
    </div>

    <div className="footer-bottom-div">
      <div className="bottom-text flex justify-center items-center font-semibold ">
        © 2023 AffWorld.in
      </div>

      <div className="bottom-navbar flex justify-between items-center gap-2 font-semibold ">
        <div className="bottom-text flex justify-center items-center text-center">Terms & Policies</div>
        <div className="bottom-text flex justify-center items-center">Terms for publisher</div>
        <div className="bottom-text flex justify-center items-center">Privacy Policy</div>
        <div className="bottom-text flex justify-center items-center">Cookies policy</div>
      </div>

      <div className="bottom-text flex justify-center items-center font-bold ">
        Report Abuse
      </div>
    </div>
    </div>
    
    <div className="mobile-view">
    <div className="footer-main-div flex flex-col justify-between items-center w-[100%]">
      <div className="footer-div-1 flex flex-col  justify-between items-start gap-10">
        <div className="footer-bio flex flex-col justify-start items-start">
          <div className="affworld-logo-text text-[#392976]">
            AffWorld.in
          </div>
          <div className="flex flex-row justify-start items-center text-[#9e4bf1] font-semibold width-[100%]">
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

      <div className="footer-div-2 flex flex-col justify-between items-start gap-20">
        <div className="flex flex-col justify-start items-center gap-10">
            <div className="flex justify-start items-center text-[#9e4bf1]">SignUp for AffWorld Updates</div>
            <div className="signup-text">Click here to Signup</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-0">
          <div className="image1"><img src="/assets/images/applepaylogo.png"/></div>
          <div className="image2"><img src="/assets/images/mastercardlogo.png"/></div>
          <div className="image3"><img src="/assets/images/paypal.png"/></div>
          <div className="image4"><img src="/assets/images/bitcoin.png"/></div>
        </div>
      </div>
    </div>

    <div className="footer-bottom-div">
      <div className="bottom-text flex justify-center items-center font-semibold ">
        © 2023 AffWorld.in
      </div>

      <div className="bottom-navbar flex  flex-col justify-between items-center gap-2 font-semibold ">
        <div className="bottom-text flex justify-center items-center text-center">Terms & Policies</div>
        <div className="bottom-text flex justify-center items-center">Terms for publisher</div>
        <div className="bottom-text flex justify-center items-center">Privacy Policy</div>
        <div className="bottom-text flex justify-center items-center">Cookies policy</div>
      </div>

      <div className="bottom-text flex justify-center items-center font-bold ">
        Report Abuse
      </div>
    </div>
    </div>
  </>);
};

export default Footer;
