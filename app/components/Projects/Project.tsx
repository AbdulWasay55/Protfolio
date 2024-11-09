import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <div>
        <div className='flex flex-col '>
            <h1 data-aos="fade-up" className="text-3xl sm:text-5xl font-bold ml-3 mt-[50px] " id='project'>Projects:</h1>
             <div className="flex flex-wrap justify-center mt-10" >
              <div data-aos="fade-up" className=' flex flex-col items-center w-[350px] h-[350px] border-2 border-inherit rounded-xl shadow-2xl my-[40px] mx-[20px] justify-center '>
                <p className='font-bold text-xl mb-[10px]'>Count Down Timer</p>
                 <Image src="/1count.png" width={200} height={200} alt="count down timer picture" className='border-2 border-inherit rounded-xl  transition-all ease-in duration-700 hover:scale-110 '/>
                 
                 <Link 
                 href="https://1-project-count-down-timer.vercel.app/"
                 target="_blank">
                 <p className='font-bold text-xl mt-[10px]'>Click Here to Check</p>
                 </Link>
              </div>
              <div data-aos="fade-up" className='flex flex-col w-[350px] h-[350px] justify-center items-center border-2 border-inherit rounded-xl shadow-2xl my-[40px] mx-[20px] '>
              <p className='font-bold text-xl mb-[10px]'>Weather Widget App</p>
              <Image src="/weather1.png" width={200} height={200} alt="weather widget picture" className='border-2 border-inherit rounded-xl  transition-all ease-in duration-700 hover:scale-110 '/>
              <a href="https://2-project-weather-widget.vercel.app/" target="_blank">
                 <p className='font-bold text-xl mt-[10px]'>Click Here to Check</p>
                 </a>
              </div>
              <div data-aos="fade-up" className=' flex flex-col justify-center items-center w-[350px] h-[350px] border-2 border-inherit rounded-xl shadow-2xl my-[40px] mx-[20px] '>
              <p className='font-bold text-xl mb-[10px]'>Dynamic Resume Builder</p>
              <Image src="/milestone3.png" width={200} height={200} alt="Dynamic Resume Builder Picture" className='border-2 border-inherit rounded-xl  transition-all ease-in duration-700 hover:scale-110 '/>
                 <Link
                 href="https://milestone-3-4-5-zeta.vercel.app/"
                 target='_blank'>
                 <p className='font-bold text-xl mt-[10px]'>Click Here to Check</p>
                 </Link>
              </div>

              <div data-aos="fade-up" className=' flex flex-col justify-center items-center w-[350px] h-[350px] border-2 border-inherit rounded-xl shadow-2xl my-[40px] mx-[20px] '>
              <p className='font-bold text-xl mb-[10px]'>Static Resume </p>
              <Image src="/mailstone-1.png" width={200} height={200} alt="Static resume picture" className='border-2 border-inherit rounded-xl  transition-all ease-in duration-700 hover:scale-110 '/>
                 <Link
                 href="https://milestone-1-2-v8mv.vercel.app/"
                 target='_blank'>
                 <p className='font-bold text-xl mt-[10px]'>Click Here to Check</p>
                 </Link>
              </div>

              <div data-aos="fade-up" className=' flex flex-col justify-center items-center w-[350px] h-[350px] border-2 border-inherit rounded-xl shadow-2xl my-[40px] mx-[20px] '>
              <p className='font-bold text-xl mb-[10px]'>Birthday Wish Card </p>
              <Image src="/birthday-wish.png" width={200} height={200} alt="birthday wish project picture" className='border-2 border-inherit rounded-xl  transition-all ease-in duration-700 hover:scale-110 '/>
                 <Link
                 href="https://birthday-wish-tawny.vercel.app/"
                 target='_blank'>
                 <p className='font-bold text-xl mt-[10px]'>Click Here to Check</p>
                 </Link>
              </div>
             
              <div data-aos="fade-up" className=' flex flex-col justify-center items-center w-[350px] h-[350px] border-2 border-inherit rounded-xl shadow-2xl my-[40px] mx-[20px] '>
              <p className='font-bold text-xl mb-[10px]'>Figma Project </p>
              <Image src="/figma-1.png" width={300} height={200} alt="Figma project picture" className='border-2 border-inherit rounded-xl  transition-all ease-in duration-700 hover:scale-110 '/>
                 <Link
                 href="https://figma-assignment-zeta.vercel.app/"
                 target='_blank'>
                 <p className='font-bold text-xl mt-[10px]'>Click Here to Check</p>
                 </Link>
              </div>
             
             </div>
        </div>
    </div>
  )
}

export default ProjectSection