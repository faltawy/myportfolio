import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { MapTools } from '../components/tools';

function ToolsContainer({ tools, label }) {
  return (
    
      <div className='flex items-start gap-2 flex-col'>
        <h2 className='text-lg font-semibold'>{label}</h2>
        <div className='flex items-center gap-4 overflow-x-auto w-full flex-wrap flex-1 justify-around sm:justify-start'>
          {tools}
        </div>
      </div>
  )
}




function About() {
  return (
    <>
      <Head>
        <title>Ahmed|About</title>
      </Head>

      <div className="grid container mx-auto p-3 mt-5 lg:grid-cols-4 grid-cols-1  place-items-center justify-between gap-3 overflow-auto">
        <h1 className='font-bold text-4xl text-start w-full text-white col-span-full'>About</h1>
        <p className='font-light col-span-2 text-start text-[18px] font-inter tracking-normal text-lightWhite leading-tight'>Hey There,<br /> Iam ahmed hassan Egyptian web developer <br /> based in zagazig city, 3 years ago i started to look outside the dental field so i learnet python in order to create dental related projects to solve several proplems, then i started learning several libraries like pandas,numby then i found that the web is the best place in order to puplish your work and let the people take advantage of what i gonna make,so i started learning django web framework and iam still using it till now as my primary backend  stact (django template language requires well known html and css and little js experience),so i tried to learn frontend  web development primarly reactjs to make my webpages more reactive and the concept of component realy blowed my mind</p>

        <div className='h-[300px] col-span-2 w-[350px] sm:max-w-sm max-w-full relative group cursor-pointer'>
          <span className='absolute top-1 hidden sm:inline-block group-hover:top-0 group-hover:left-0 left-2 w-full transition-all border-[1px] h-full rounded-[50px] border-brand'></span>
          <div className='relative h-full w-full overflow-hidden object-cover group rounded-[50px] hover:shadow-none transition-all'>
            <span className='absolute z-10 inset-0 w-full h-full bg-brand bg-opacity-30 group-hover:bg-opacity-0 transition-all'></span>
            <Image src={'/images/myImage.jpg'} layout='responsive' height='100' width='100' alt='Ahmed Hassan' />
          </div>
        </div>
        {/* stack/tools */}
        <div className='col-span-full w-full flex items-start flex-col gap-3'>
          <ToolsContainer tools={MapTools(true)} label='Programming Languages' />
          <ToolsContainer tools={MapTools(false)} label='Tools' />
        </div>
      </div>
    </>
  )
}

export default About