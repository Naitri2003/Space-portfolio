"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start text-white">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#0e6666eb] opacity-[0.2]"
        >
          <SparklesIcon className="text-[#c594e3] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white font-bold max-w-[600px] w-auto h-auto'>
         <span>
        Providing
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>{" "}The Best{" "}</span>
        Project exprience
        </span>
        </motion.div>
        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-blue-100 my-5 max-w-[600px] '>
          I &apos;m a Full stack Software Engineer with experience in website Mobile,and Software development.Check out my projects and skills


        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
         Learn More!
        </motion.a>      
    </div>
    <motion.div
    variants={slideInFromRight(0.8)}
    className='w-full h-full flexjustify-center items-center'>
      <Image
      src="/mainIconsdark.svg"
      alt='work icons'
      height={650}
      width={650}/>

    </motion.div>

   </motion.div>
  )
}

export default HeroContent
