import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "../../CSS/SeventhSection.css"
const SeventhSection = () => {
  return (
    <div className="flex justify-center items-center flex-col  m-[5%] p-[2%]">
      <div className="faq-text text-6xl flex w-[100%] text-left text-[#392976] font-semimedium">
        Frequently Asked Questions
      </div>
      <div className="accordion-div flex justify-center items-center w-[100%] mt-[5%]">
        <Accordion allowToggle>
          <AccordionItem sx={{width:"70vw", padding:'10px'}}
          >
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" sx={{color:'#392976', fontWeight:'medium', fontSize:'21px'}}>
                Why do I need Affworld for my business
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem sx={{width:"70vw", padding:'10px'}}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" sx={{color:'#392976', fontWeight:'medium', fontSize:'21px'}}>
                What offers shall I choose to test Affworld traffic?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem sx={{width:"70vw", padding:'10px'}}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" sx={{color:'#392976', fontWeight:'medium', fontSize:'21px'}}>
                Can I integrate Affworld with my business domain?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem sx={{width:"70vw", padding:'10px'}}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" sx={{color:'#392976', fontWeight:'medium', fontSize:'21px'}}>
                Can I migrate to Affworld without losing my data?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem sx={{width:"70vw", padding:'10px'}}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" sx={{color:'#392976', fontWeight:'medium', fontSize:'21px'}}>
                Is my data safe with Affworld?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          
        </Accordion>
      </div>
    </div>
  );
};

export default SeventhSection;
