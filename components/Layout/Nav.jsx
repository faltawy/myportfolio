import React from 'react'

function NavItem({ label, view, delay, ...rest }) {
    const active = false
    return (
        <button style={{ animationDelay: delay }} className={`${active ? 'active__nav_item' : 'hover:bg-brand hover:text-darkBlue'} fade-in-right font-bold text-lg text-lightWhite w-3/5 py-2 transition-all rounded-lg`}>
            {label}
        </button>
    )
}

function Nav() {
    return (
        <nav className='flex items-center justify-center flex-col gap-4 py-5 relative w-full px-3'>
            <NavItem delay='0' label='Home' />
            <NavItem delay='150ms' label='About' />
            <NavItem delay='350ms' label='Contact' />
            <NavItem delay='500ms' label='Portfolio' />
        </nav>
    )
}

export default Nav