import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle, FaGithub } from 'react-icons/fa';
import Layout from '../components/Layout/Layout';

function Social({ icon, link, delay }) {
  return (
    <a href={link} style={{ animationDelay: delay, animationFillMode: 'backwards' }} className="p-1 animate__animated animate__rotateIn text-darkBlue hover:-rotate-45 transition-all flex-center cursor-pointer w-[50px] h-[50px] bg-brand dark:bg-opacity-50 rounded-full">
      {
        React.createElement(icon, { size: 24 })
      }
    </a>
  )
}

export default function Home() {
  return (
    <div style={{minHeight:'calc(100vh - 50px)'}} className="container flex px-4 h-full items-center justify-center gap-3 flex-col mx-auto">
      <div className="myname opacity-0  animate__animated animate__fadeIn animate__slow">
        <span className="myname__sep"></span>
        <h1 className="font-bold whitespace-nowrap leading-tight font-inter text-4xl text-white">Ahmed Hassan</h1>
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
  )
}

Home.DefaultLayout = Layout