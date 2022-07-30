import React, { useState } from 'react'
import Aside from './Aside'
import Header from './Header'
import AsideContext from './Context.js';
import { ThemeProvider } from 'next-themes';

function useExpand(initial) {
    const [state, changeState] = useState(initial)
    function toggle() {
        changeState(!state)
    }
    return [state, toggle]
}

function Layout({ children }) {
    const [expanded, toggle] = useExpand(false)
    return (
        <ThemeProvider attribute='class' storageKey='THEME' defaultTheme='light' themes={['light','dark']}>
            <div className='w-full dark:bg-darkBlue bg-lightBlue h-screen flex items-center flex-col'>
                <AsideContext.Provider value={[expanded, toggle]}>
                    <Header />
                    <Aside />
                </AsideContext.Provider>
                <main className='w-full flex-1'>
                    {children}
                </main>
            </div>
        </ThemeProvider>
    )
}

export default Layout