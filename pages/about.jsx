import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
function About() {
  return (
    <>
      <Head>
        <title>Ahmed|About</title>
      </Head>
      <div className="h-full p-3 container mx-auto overflow-y-auto">
        <div className="grid lg:grid-cols-4 grid-cols-1 w-full place-items-center justify-between gap-3 mt-5">
        <h1 className='font-bold text-4xl text-start w-full text-white col-span-full'>About</h1>
          <div className='col-span-2'>
            <p className='font-semibold text-[20px] font-inter tracking-wide text-lightWhite leading-tight'>iam ahmed hassan an egyptian web developer based in zagazig city 3 years ago i started to look outside the dental field so i learnet python in order to create dental related projects to solve several proplems, then i started learning several libraries like pandas,numby then i found that the web is the best place in order to puplish your work and let the people take advantage of what i gonna make,so i started learning django web framework and iam still using it till now as my primary backend  stact (django template language requires well known html and css and little js experience),so i tried to learn frontend  web development primarly reactjs to make my webpages more reactive and the concept of component realy blowed my mind</p>
          </div>
          <div className='h-[400px] col-span-2 w-[440px] relative group cursor-pointer'>
            <span className='absolute top-3 group-hover:top-0 group-hover:left-0 left-4 w-full transition-all border-[1px] h-full rounded-[50px] border-brand'></span>
            <div className='relative h-full w-full overflow-hidden object-cover group rounded-[50px] hover:shadow-none transition-all'>
              <span className='absolute z-10 inset-0 w-full h-full bg-brand bg-opacity-30 group-hover:bg-opacity-0 transition-all'></span>
              <Image src={'/images/myImage.jpg'} style={{ minWidth: '100%', minHeight: '100%s' }} layout='responsive' height='100' width='100' alt='my image Ahmed Hassan' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About