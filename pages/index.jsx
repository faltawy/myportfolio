import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle, FaGithub } from 'react-icons/fa';


function Social({ icon, link, delay }) {
  return (
    <a href={link} style={{ animationDelay: delay,animationFillMode:'backwards' }} className="p-1 animate__animated animate__rotateIn text-darkBlue hover:bg-opacity-90 hover:-rotate-45 transition-all flex-center cursor-pointer w-[50px] h-[50px] bg-brand dark:bg-opacity-30 rounded-full">
      {
        React.createElement(icon, { size: 24 })
      }
    </a>
  )
}

export default function Home() {
  return (
    <div className="h-full flex-center p-3 container mx-auto overflow-auto">
      <div className="flex items-center gap-3 flex-col">
        <div className="myname opacity-0  animate__animated animate__fadeIn animate__slow">
          <span className="myname__sep"></span>
          <h1 className="font-bold whitespace-nowrap leading-tight font-inter text-4xl text-darkBlue dark:text-lightWhite">Ahmed Hassan</h1>
          <span className="myname__sep"></span>
        </div>
        <p className="font-semibold text-2xl dark:text-lightBlue text-lightWhite">web developer</p>
        <div className="socials flex items-center gap-3">
          <Social delay='0' icon={FaFacebook} />
          <Social delay='100ms' icon={FaLinkedin} />
          <Social delay='200ms' icon={FaGithub} />
          <Social delay='300ms' icon={FaGoogle} />
          <Social delay='400ms' icon={FaInstagram} />
        </div>
      </div>
    </div>
  )
}
