import React from 'react'
import Title from '../layouts/Title';
import { SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { skillsData } from '../../data/data';
import Card from '../features/Card';
import { profileThree } from '../../assets';

const BestSkills = () => {
    return (
        <section
            id="bestSkills"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="BEST SKILLS" des="specialized in" src={profileThree} />
            </div>
            <div className="place-items-center gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-cols-4 xl:gap-20">
                {skillsData.map((item) => (
                    <span className="bannerIconMobile lg:bannerIcon text-designColor bg-gradient-to-r from-[#0A0118] to-[#140033] hover:bg-gradient-to-l hover:from-[#0A0118] hover:to-[#fb0052] hover:text-white ">
                        {item.icon}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default BestSkills