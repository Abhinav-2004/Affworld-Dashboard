import React, { useState } from "react";
import "../../CSS/Navbar.css";
import { Button } from "@chakra-ui/react";
import { AiOutlineDown, AiOutlineUser } from "react-icons/ai";
import {RxHamburgerMenu} from "react-icons/rx";
import {RxCross1} from "react-icons/rx";
const Navbar = () => {
    const [displayFeatures, setDisplayFeatures]=useState(false);
    const [mobileDisplay,setMobileDisplay]=useState(false);
  return (<>
    <div className="dekstop-view Navbar-container flex justify-between items-center">
      <div className="flex justify-center items-center text-3xl font-semibold affworld-logo">
        Affworld Technologies
      </div>
      <div className="middle-options flex justify-between items-center text-xl font-semibold">
        <button className="optionFeatures flex justify-center items-center gap-2"
            onMouseOver={()=>{
                setDisplayFeatures(true);
            }}
            onMouseOut={()=>{setDisplayFeatures(false)}}
        >
          <div className="flex justify-center items-center">Features</div>
          <div className="arrow flex justify-center items-center">
            <AiOutlineDown
              className="flex justify-center items-center"
              size={13}
            />
          </div>
        </button>
        <button className="optionFeatures flex justify-between items-center gap-10 text-xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center">Solutions</div>
            <div className="arrow flex justify-center items-center">
              <AiOutlineDown
                className=" flex justify-center items-center"
                size={13}
              />
            </div>
          </div>
        </button>
        <button className="optionFeatures flex justify-between items-center gap-10 text-xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center">Ad Format</div>
            <div className="arrow flex justify-center items-center">
              <AiOutlineDown
                className="flex justify-center items-center"
                size={13}
              />
            </div>
          </div>
        </button>
        <button className="optionFeatures flex justify-between items-center gap-10 text-xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center">Resources</div>
            <div className=" arrow flex justify-center items-center">
              <AiOutlineDown
                className="flex justify-center items-center"
                size={13}
              />
            </div>
          </div>
        </button>
        <button className="optionFeatures flex justify-between items-center gap-10 text-xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center">Company</div>
            <div className="arrow flex justify-center items-center">
              <AiOutlineDown
                className="flex justify-center items-center"
                size={13}
              />
            </div>
          </div>
        </button>
        <button className="optionFeatures flex justify-between items-center gap-10 text-xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center">Blog</div>
            <div className="arrow flex justify-center items-center">
              <AiOutlineDown
                className="flex justify-center items-center"
                size={13}
              />
            </div>
          </div>
        </button>
      </div>
      <div className="button-container flex justify-between items-center gap-10">
        <Button
          textColor={"#14B082"}
          border={"2px solid #14B082"}
          paddingLeft={"5"}
          paddingRight={"5"}
        >
          Log In
        </Button>
        <Button
       
          _hover={`backgroundColor:"#14B082"`}
          textColor={"white"}
          backgroundColor={"#14B082"}
          border={"2px solid #14B082"}
          paddingLeft={"7"}
          paddingRight={"7"}
        >
          Start
        </Button>
      </div>
    </div>
   {displayFeatures &&  <div onMouseOver={()=>{setDisplayFeatures(true)}} onMouseLeave={()=>{setDisplayFeatures(false)}} className="hover-model-features">
        <div className="option-background block">
            <div className="flex justify-between items-center">
                <div className="internal-option flex flex-col justify-start items-center text-center w-[100%]">
                    <div className="title flex justify-center item-center font-bold text-xl">
                        Traffic Quality
                    </div>
                    <div className="description font-semibold text-gray-500">
                        For 97% of our customers, this is affworld #1 advantage
                    </div>
                </div>

                <div className="internal-option flex flex-col justify-start items-center text-center w-[100%]">
                    <div className="title flex justify-center item-center font-bold text-xl">
                        Traffic Volume
                    </div>
                    <div className="description font-semibold text-gray-500">
                        For 97% of our customers, this is affworld #1 advantage
                    </div>
                </div>

                <div className="internal-option flex flex-col justify-start items-center text-center w-[100%]">
                    <div className="title flex justify-center item-center font-bold text-xl">
                        Ad Perfomance
                    </div>
                    <div className="description font-semibold text-gray-500">
                        For 97% of our customers, this is affworld #1 advantage
                    </div>
                </div>

                <div className="internal-option flex flex-col justify-start items-center text-center w-[100%]">
                    <div className="title flex justify-center item-center font-bold text-xl">
                        Solution
                    </div>
                    <div className="description font-semibold text-gray-500">
                        For 97% of our customers, this is affworld #1 advantage
                    </div>
                </div>
                
                
            </div>
            <div className="flex justify-center items-center">
                <div className="lower-option1-background flex flex-row justify-center items-center w-[50%] gap-10">
                    <div className="flex justify-center items-center">
                        <AiOutlineUser fill="white" size={70} className="border-2 border-white rounded-full"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-lg font-bold ">
                            Latest Features                           
                        </div>
                        <div className="text-md font-semibold ">
                           New Ad format, suvery format. Only in Affworld
                        </div>
                    </div>
                </div>

                <div className="lower-option2-background flex flex-row justify-center items-center w-[50%] gap-10">
                    <div className="flex justify-center items-center">
                        <AiOutlineUser fill="white" size={70} className="border-2 border-white rounded-full"/>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-lg font-bold ">
                            Latest Features                           
                        </div>
                        <div className="text-md font-semibold ">
                           New Ad format, suvery format. Only in Affworld
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>}

    <div className="mobile-view Navbar-container flex justify-between items-center">
      <div className="flex justify-center items-center text-xl font-semibold affworld-logo">
        Affworld Technologies
      </div>
      <div className="button-container flex justify-between items-center gap-10">
        <Button
          textColor={"#14B082"}
          border={"2px solid #14B082"}
          paddingLeft={"5"}
          paddingRight={"5"}
        >
          Log In
        </Button>
        <Button
         className="start-button"
          _hover={`backgroundColor:"#14B082"`}
          textColor={"white"}
          backgroundColor={"#14B082"}
          border={"2px solid #14B082"}
          paddingLeft={"7"}
          paddingRight={"7"}
        >
          Start
        </Button>
        <button onClick={()=>{
            setMobileDisplay(!mobileDisplay);
        }} className="flex justify-center items-center">
        <RxHamburgerMenu size={30}/>
        </button>
      </div>
    </div>
    {mobileDisplay && <div className="hover-model-features-mobile">
    <div className="hover-model-div-mobile absolute z-50 bg-[white] w-[100vw] flex-row justify-center items-center">
    <div className="flex flex-row justify-center items-center">
    <div className="middle-options flex-col justify-center items-center text-md font-semibold" >
        <div className="flex flex-col gap-10">
        <button className="optionFeatures flex justify-center items-center ">
          <div className="flex justify-center items-center">Features</div>
        </button>
        <button className="optionFeatures flex justify-center items-center gap-10 text-md font-semibold">
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center">Solutions</div>
          </div>
        </button>
        <button className="optionFeatures flex justify-center items-center gap-10 text-md font-semibold">
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center">Ad Format</div>
            
          </div>
        </button>
        <button className="optionFeatures flex justify-center items-center gap-10 text-md font-semibold">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">Resources</div>
          </div>
        </button>
        <button className="optionFeatures flex justify-center items-center gap-10 text-md font-semibold">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">Company</div>
          </div>
        </button>
        <button className="optionFeatures flex justify-center items-center gap-10 text-md font-semibold">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">Blog</div>
          </div>
        </button>
        </div>
      </div>
    </div>
    
    </div>
    </div>}

    

 </> );
};

export default Navbar;
