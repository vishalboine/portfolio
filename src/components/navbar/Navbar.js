import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo, profileOne, profilePhoto} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont navbar">
      <div style={{fontFamily:'sans-serif', fontSize:'30px', display:'flex', alignItems:'center'}}>
        <img
          className='w-10 h-10'
          src={profilePhoto}
          alt="profilePhoto"
        />
        <b style={{color:'white'}}>PORT</b><b style={{color:'#fb0052'}}>FOLIO</b>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-[#0a0118] w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-[#0a0118] p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={profileOne} alt="proflePhoto" />
                <p className="text-sm text-gray-400 mt-2">
                Passionate MERN stack developer with a knack for crafting dynamic web applications. 
                From frontend design to backend development, I thrive on creating seamless digital experiences. 
                Let's build something amazing together!
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="contactIcon text-designColor bg-gradient-to-r from-[#0A0118] to-[#140033] hover:bg-gradient-to-l hover:from-[#0A0118] hover:to-[#fb0052] hover:text-white" onClick={()=>window.open('https://twitter.com/Vishal76027938', '_blank')}>
                    <FaTwitter />
                  </span>
                  <span className="contactIcon text-designColor bg-gradient-to-r from-[#0A0118] to-[#140033] hover:bg-gradient-to-l hover:from-[#0A0118] hover:to-[#fb0052] hover:text-white" onClick={()=>window.open('https://www.linkedin.com/in/vishal-boine-215596199/', '_blank')}>
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar