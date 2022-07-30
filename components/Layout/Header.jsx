import React, { useContext } from 'react'
import { HiMenu } from 'react-icons/hi'
import { VscColorMode } from 'react-icons/vsc'
import context from './Context'
import MenuButton from './MenuButton'

function Header() {
    const [expanded, toggle] = useContext(context)
    return (
        <header className='container sticky top-0 z-40 mx-auto flex items-center justify-between h-[50px] px-2'>
            <div className="brand">
                <span className='font-extrabold text-xl text-brand'>AH</span>
            </div>
            <div className={`${expanded ? 'hidden' : 'flex'} items-center gap-3`}>
                <MenuButton icon={<VscColorMode />} />
                <MenuButton onClick={toggle} icon={<HiMenu />} />
            </div>
        </header>
    )
}

export default Header