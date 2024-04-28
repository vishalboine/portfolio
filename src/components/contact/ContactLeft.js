import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0A0118] to-[#140033] p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-[#fb0052]">Vishal Boine</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Passionate MERN stack developer with a knack for crafting dynamic web applications. From frontend design to backend development, I thrive on creating seamless digital experiences. Let's build something amazing together!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9004049466</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">raov38131@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4 text-[#fb0052]">Find me in</h2>
        <div className="flex gap-4">
          <span className="contactIcon text-designColor bg-gradient-to-r from-[#0A0118] to-[#140033] hover:bg-gradient-to-l hover:from-[#0A0118] hover:to-[#fb0052] hover:text-white" onClick={()=>window.open('https://twitter.com/Vishal76027938', '_blank')}>
            <FaTwitter size={30}/>
          </span>
          <span className="contactIcon text-designColor bg-gradient-to-r from-[#0A0118] to-[#140033] hover:bg-gradient-to-l hover:from-[#0A0118] hover:to-[#fb0052] hover:text-white" onClick={()=>window.open('https://www.linkedin.com/in/vishal-boine-215596199/', '_blank')}>
            <FaLinkedinIn size={30}/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft