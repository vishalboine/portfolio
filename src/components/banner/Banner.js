import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black bg-gradient-to-r from-[#0A0118] via-[#14022f] to-[#0A0118] h-[400px] lg: h-[500px]"
    >
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner