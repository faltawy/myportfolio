import React, { useContext } from 'react'
import { VscChromeClose, VscColorMode } from 'react-icons/vsc'
import context from './Context'
import MenuButton from './MenuButton'
import Nav from './Nav'

function Aside() {
    const [expanded, toggle] = useContext(context)
    return (
        <aside className={`h-screen overflow-auto sm:w-[300px] z-[300] fixed top-0 transition-all ease-in-out ${expanded ? 'right-0' : '-right-full'} w-full bg-lightBlue sm:rounded-[90px_0_0_90px] sm:shadow-[inset_5px_0] sm:shadow-brand`}>
            <div className='flex items-center justify-between gap-4 flex-col h-full py-5 px-2'>
                <MenuButton onClick={toggle} icon={<VscChromeClose />} />
                <Nav />
                <MenuButton className='hover:rotate-180' icon={<VscColorMode />} />
            </div>
        </aside>
    )
}

export default Aside