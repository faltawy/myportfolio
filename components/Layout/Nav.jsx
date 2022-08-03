import React from 'react'
import Link from 'next/link'
import NavLink from '../NavLink';
import { useRouter } from 'next/router';

function NavItem({ label, href, delay,...rest }) {
    const { pathname } = useRouter();
    const active = href === pathname
    return (
        <Link href={href} exact>
            <a style={{ animationDelay: delay }} className={`${active ? 'active__nav_item' : 'hover:bg-brand dark:hover:bg-darkBlue hover:text-darkBlue'} fade-in-right font-bold flex-center text-lg text-white dark:text-lightWhite w-3/5 py-2 transition-all rounded-lg`}>
                {label}
            </a>
        </Link>
    )
}

function Nav() {
    return (
        <nav className='flex items-center justify-center flex-col gap-4 py-5 relative w-full px-3'>
            <NavItem delay='0' href='/' label='Home' />
            <NavItem delay='150ms' href='/about' label='About' />
            <NavItem delay='350ms' href='/contact' label='Contact' />
            <NavItem delay='500ms' href='/portfolio' label='Portfolio' />
        </nav>
    )
}

export default Nav