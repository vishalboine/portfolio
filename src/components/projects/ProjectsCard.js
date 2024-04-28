import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const ProjectsCard = ({ title, des, src, url, isGlobeIcon }) => {
  return (
    <div className="w-10/12 m-auto lg:w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col bg-gradient-to-r from-[#0A0118] to-[#140033] hover:bg-gradient-to-l hover:from-[#0A0118] hover:to-[#fb0052] hover:text-white transition-colors duration-1000 projectDiv">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-[#0a0118] inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer" onClick={()=> window.open(url, '_blank')}>
                <BsGithub/>
              </span>
              {isGlobeIcon && <span className="text-lg w-10 h-10 rounded-full bg-[#0a0118] inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer" onClick={()=> window.open('https://codebusters.neofinancials.com/', '_blank')}>
                <FaGlobe />
              </span>}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard