import React from 'react'
import { profileOne, profileVideo } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="hidden lgl:flex lgl:w-1/2 justify-center items-center relative">
      <div className='videoWrapper'>
        <img style={{'border-radius': '26%', width:'90%'}} src={profileVideo} />
      </div>
    </div>
  );
}

export default RightBanner