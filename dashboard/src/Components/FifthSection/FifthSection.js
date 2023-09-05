import React from 'react'
import "../../CSS/FifthSection.css";
const FifthSection = () => {
  return (
    <div className='flex flex-col justify-between items-center m-[5%] p-[2%] mt-[2%]'>
      <div className='heading-text flex text-4xl font-semibold text-[#57a1c4]'>Monetize your traffic</div>

      <div className='image-container flex w-[100%] items-center justify-center gap-2 mt-[2%]'>
        <div>
            <img src='/assets/images/fifthsection1.png'/>
        </div>
        <div>
            <img src='/assets/images/fifthsection2.png'/>
        </div>
        <div>
            <img src='/assets/images/fifthsection3.png'/>
        </div>
      </div>
    </div>
  )
}

export default FifthSection
