import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';
import { VscClose } from 'react-icons/vsc';


function Small({ src, active = false }) {
    return (
        <div className='h-[50px] w-[50px] overflow-hidden rounded-lg cursor-pointer sm:brightness-50 sm:hover:brightness-100'>
            <Image src={'https://picsum.photos/200'} layout='responsive' height='100%' width='100%' className='w-full h-auto' objectFit='cover' loading='lazy' objectPosition='center' />
        </div>
    )
}


function Portfolio() {
    return (
        <div className='w-full h-full'>
            <article className='flex items-center flex-col gap-3 max-w-[300px] bg-white p-2'>
                <div className='w-full'>
                    
                    <div className='h-auto w-[180px] overflow-hidden rounded-md'>
                        <Image src={'https://picsum.photos/200'} layout='responsive' height='100%' width='100%' className='w-full h-auto' objectFit='cover' loading='lazy' objectPosition='center' />
                    </div>
                </div>
                <div className='flex items-start gap-3 max-w-full'>
                    <Small />
                    <Small />
                    <Small />
                    <Small />
                </div>
            </article>
        </div>
    )
}
Portfolio.DefaultLayout = Layout
export default Portfolio