import Head from 'next/head';
import React from 'react';
import { SiFigma } from 'react-icons/si';

function Contact() {
    return (
        <>
            <Head>
                <title>Ahmed|Contact</title>
            </Head>
            <div className='container mx-auto p-2 min-h-full'>
                <h1 className='font-extrabold text-4xl'>Get in Touch</h1>
                <div className='flex items-center flex-col gap-4 mt-5'>
                    <p className='text-center font-light text-lg'>Iam looking for job these days <br />
                        so if you have job offer just email me <br />
                        or if you have any question feel free to ask</p>
                    <div className='flex items-center gap-2'>
                    <a href='mailto:ah7255703@gmail.com' onClick={e => {e.target.style.boxShadow = 'none' ; setTimeout(()=>{e.target.style.boxShadow = '2px 3px 0 0 white'},1000)}} className='py-2 transition-shadow delay-150 px-3 rounded-lg bg-lightBlue font-inter shadow-[2px_3px_0_0_white]'>Say Hi</a>
                    <a href='/images/my CV.pdf' download onClick={e => {e.target.style.boxShadow = 'none' ; setTimeout(()=>{e.target.style.boxShadow = '2px 3px 0 0 white'},1000)}} className='py-2 transition-shadow delay-150 px-3 rounded-lg bg-lightBlue font-inter shadow-[2px_3px_0_0_white]'>Download Resume</a>
                    </div>
                </div>
            </div>
            <footer className='w-full z-10 h-[25px] fixed flex items-center justify-between p-1 bottom-0 left-0 bg-lightBlue'>
                <p className='font-inter font-light text-xs'>All Rights Reserved</p>
                <a target='_blank' href="https://www.figma.com/file/RElzWmhZxVgpghVFLyaXne/my-portfolio?node-id=0%3A1" rel="noreferrer">
                    <SiFigma />
                </a>
            </footer>
        </>
    )
}

export default Contact