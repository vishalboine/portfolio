import React from 'react'

const Title = ({ title, des, src }) => {
  return (
    <div className='flex flex-row gap-4'>
      {src && <img className='w-20 h-20' style={{"marginTop":'-1rem'}} src={src} alt={'memoji'} />}
      <div className="flex flex-col gap-4 font-titleFont mb-14">
        {/* <h3 className="text-l uppercase font-light  text-designColor tracking-wide">
          {title}
        </h3> */}
        <h1 className="text-3xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
      </div>

    </div>
  );
}

export default Title