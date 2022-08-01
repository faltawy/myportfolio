import { SiCelery, SiDjango, SiPython, SiFastapi, SiGnubash, SiJinja } from 'react-icons/si';
import { DiCss3, DiJavascript1, DiRedis, DiSass } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import React from 'react';

const tools = [

    { label: 'Python', icon: SiPython, frontEnd: false, variant: '#4B8BBE', language: true },
    { label: 'Js', icon: DiJavascript1, frontEnd: true, variant: '#F0DB4F', language: true },
    { label: 'HTML', icon: AiFillHtml5, frontEnd: true, variant: '#F06529', language: true },
    { label: 'CSS', icon: DiCss3, frontEnd: true, variant: '#264de4', language: true },
    { label: 'Bash', icon: SiGnubash, frontEnd: false, variant: '#FFD500', language: true },


    { label: 'Sass', icon: DiSass, frontEnd: true, variant: '#c69', language: false },
    { label: 'TailwindCss', icon: DiCss3, frontEnd: true, variant: '#38bdf8', language: false },
    { label: 'ReactJs', icon: SiDjango, frontEnd: true, variant: '#61DBFB', language: false },

    { label: 'Django', icon: SiDjango, frontEnd: false, variant: '#0c4b33', language: false },
    { label: 'Fast Api', icon: SiFastapi, frontEnd: false, variant: '#059487', language: false },
    { label: 'Redis', icon: DiRedis, frontEnd: false, variant: '#7A0C00', language: false },
    { label: 'Celery', icon: SiCelery, frontEnd: false, variant: '#98c859', language: false },
    { label: 'Jinja', icon: SiJinja, frontEnd: false, variant: '#323232', language: false },

]

export function Tool({ label, icon, variant,delay }) {

    return (
        <>
            <style jsx>
                {`
            @keyframes swing-in-top-fwd{0%{transform:rotateX(-100deg);transform-origin:top;opacity:0}100%{transform:rotateX(0deg);transform-origin:top;opacity:1}}
            .swing-in-top-fwd{animation:swing-in-top-fwd 1s cubic-bezier(.175,.885,.32,1.275) forwards}
        `}
            </style>


            <div style={{ boxShadow: `inset 0px -2px ${variant}`,animationDelay:delay,'--variant':variant }} className='w-[125px] cursor-pointer transition-all opacity-0 swing-in-top-fwd p-2 hover:text-[color:var(--variant)] rounded-lg h-[100px] flex items-center justify-center dark:bg-lightBlue bg-lightWhite'>
                <div className='w-full h-full flex flex-col items-center justify-between '>
                    <span style={{ color: variant }}>{React.createElement(icon, { size: 35 })}</span>
                    <span className='font-bold text-lg whitespace-nowrap overflow-ellipsis'>{label}</span>
                </div>
            </div></>
    )
}

export function MapTools(language) {
    // item:str => check if exists
    return tools.map((item, index) => {
        if (item.language === language) {
            return <Tool key={index} delay={100*index + 'ms'} {...item} />
        }
    })
}


export default tools