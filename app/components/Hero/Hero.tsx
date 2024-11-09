import React from 'react'
import Image from 'next/image'

const HeroSection  = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-[200px]'>
        <h1 className='text-3xl sm:text-5xl font-bold animation-bottom b-delay-1'>AW | PORTFOLIO 2024</h1>
        <div className='flex mt-[20px] animation-bottom b-delay-2'>
        <Image className="self-center"
        src="/logo.png"
        alt="web-logo"
        width={40}
        height={20}
      />
        <p className='text-xl m-1.5 font-bold'>ABDUL WASAY</p>
        </div>
        </div>
    </div>
  )
}

export default HeroSection