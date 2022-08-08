import React from 'react';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';


function Project({ img, title, stack_list, description }) {
    return (
        <div className='flex items-center overflow-hidden h-[250px] w-full bg-slate-500 rounded-lg'>
            <div className="h-full w-1/2 overflow-hidden">
                <Image
                    src='https://picsum.photos/200/500'
                    alt="thumbnail"
                    objectFit='contain'
                    layout='responsive' height='100' width='100'
                />
            </div>
        </div>
    )
}



function portfolio() {
    return (
        <div className='w-full h-full'>
            <div className="grid grid-cols-2 p-3">
                <Project />
            </div>
        </div>
    )
}
portfolio.DefaultLayout = Layout
export default portfolio