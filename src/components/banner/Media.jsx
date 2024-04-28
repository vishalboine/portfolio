import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiExpress, SiNodedotjs, SiMongodb } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mt-10 mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon bg-gradient-to-r from-[#0A0118] to-[#140033]" onClick={()=>window.open('https://twitter.com/Vishal76027938', '_blank')}>
              <FaTwitter />
            </span>
            <span className="bannerIcon bg-gradient-to-r from-[#0A0118] to-[#140033]" onClick={()=>window.open('https://www.linkedin.com/in/vishal-boine-215596199/', '_blank')}>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mt-10 mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon bg-gradient-to-r from-[#0A0118] to-[#140033]">
              <FaReact />
            </span>
            <span className="bannerIcon bg-gradient-to-r from-[#0A0118] to-[#140033]">
              <SiNodedotjs  />
            </span>
            <span className="bannerIcon bg-gradient-to-r from-[#0A0118] to-[#140033]">
              <SiExpress />
            </span>
            <span className="bannerIcon bg-gradient-to-r from-[#0A0118] to-[#140033]">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media