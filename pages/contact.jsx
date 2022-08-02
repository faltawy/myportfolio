import Head from 'next/head';
import React from 'react';
import { SiFigma } from 'react-icons/si';

function Contact() {
    return (
        <>
            <Head>
                <title>Ahmed|Contact</title>
            </Head>
            <div style={{minHeight:'calc(100vh - 50px)'}} className='container mx-auto p-2 mt-5'>
                <h1 className='font-extrabold text-4xl'>Get in Touch</h1>
                <div className='flex items-center flex-col gap-4 mt-10 p-10'>
                    <p className='text-center font-light text-xl'>Iam looking for job these days <br />
                        so if you have job offer just email me <br />
                        or if you have any question feel free to ask</p>
                    <div className='flex items-center gap-5'>
                    <a href='mailto:ah7255703@gmail.com' onClick={e => {e.target.style.boxShadow = 'none' ; setTimeout(()=>{e.target.style.boxShadow = '2px 3px 0 0 white'},300)}} className='py-2 transition-shadow delay-150 px-3 rounded-lg bg-lightBlue font-inter shadow-[2px_3px_0_0] shadow-lightWhite'>Say Hi</a>
                    <a href='/images/my CV.pdf' download onClick={e => {e.target.style.boxShadow = 'none' ; setTimeout(()=>{e.target.style.boxShadow = '2px 3px 0 0 white'},300)}} className='py-2 transition-shadow delay-150 px-3 rounded-lg bg-lightBlue font-inter shadow-[2px_3px_0_0] shadow-lightWhite'>Download Resume</a>
                    </div>
                </div>
            </div>
            <footer className='w-full z-10 h-[25px] fixed flex items-center justify-between p-1 bottom-0 left-0 bg-lightBlue'>
                <p className='font-inter font-light text-xs'>All Rights Reserved</p>
                <a target='_blank' className='text-brand' href="https://www.figma.com/file/RElzWmhZxVgpghVFLyaXne/my-portfolio?node-id=0%3A1" rel="noreferrer">
                    <SiFigma />
                </a>
            </footer>
        </>
    )
}

export default Contact