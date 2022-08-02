import React, { useContext } from 'react'
import { HiMenu } from 'react-icons/hi'
import { VscColorMode } from 'react-icons/vsc'
import Navcontext from './Context'
import MenuButton from './MenuButton'
import { useTheme } from 'next-themes'
export function useTheme2() {
    const { setTheme, theme } = useTheme()
    function toggle() {
        if (theme === 'light') {
            setTheme('dark')
        } if (theme === 'dark') {
            setTheme('light')
        }
    }
    return [theme, toggle]
}
function Header() {
    const [expanded, toggle] = useContext(Navcontext)
    const [theme, toggleTheme] = useTheme2()

    return (
        <header className='container sticky top-0 z-40 bg-transparent p-3 mx-auto flex items-center justify-between h-[50px] px-2'>
            <div className="brand">
                <span className='font-extrabold text-xl text-brand'>AH</span>
            </div>
            <div className={`${expanded ? 'hidden' : 'flex'} items-center gap-3`}>
                <MenuButton onClick={toggleTheme} className={`dark:rotate-180 dark:text-lightBlue`} icon={<VscColorMode />} />
                <MenuButton onClick={toggle} className='text-darkBlue dark:text-lightWhite' icon={<HiMenu />} />
            </div>
        </header>
    )
}

export default Header