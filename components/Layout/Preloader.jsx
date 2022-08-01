import React, { useState } from 'react';
import { BsTriangleFill } from 'react-icons/bs';


function Preloader({ close = true }) {
    const [state, setState] = useState(close);

    return (
        <div className={`w-screen h-screen fixed ${state && 'hidden delay-[1s]'} top-0 left-0 z-[500] bg-transparent overflow-auto`}>
            <div className={`w-full h-1/2 absolute left-0 bg-brand ${state?'-bottom-full':'bottom-0'}`} />
            <div className="w-full h-1/2 absolute top-0 left-0 bg-darkBlue" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className={`${state && 'rotate-180 delay-500'}`}>
                    <div className="border-[10px] border-t-brand flex-center border-r-brand border-b-darkBlue border-l-darkBlue -rotate-45 w-[200px] h-[200px] rounded-full">
                        <BsTriangleFill size={50} className='-rotate-45 hover:text-brand transition-colors cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader