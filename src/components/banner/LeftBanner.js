import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-5 pl-4 pr-4 lg:pl-16">
        <h4 className=" text-lg font-normal text-designColor">WELCOME TO MY SHOWCASES</h4>
        <div className='flex flex-row' style={{alignItems:'center'}}>
          <h1 className="text-3xl lg:text-6xl font-bold text-white flex flex-row">
            Hi, I'm <span className="text-designColor capitalize">&nbsp;Vishal Boine</span>
          </h1>
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Passionate Full Stack Developer dedicated to crafting dynamic and innovative web solutions. From frontend design to backend development, I blend creativity with technical expertise to deliver seamless digital experiences. Let's collaborate and bring your ideas to life!
        </p>
      </div>
    </div>
  );
}

export default LeftBanner