import React, { useState } from 'react'
import Aside from './Aside'
import Header from './Header'
import Context from './Context.js';


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
        <div className='w-full bg-black bg-darkBlue h-screen flex items-center flex-col'>
            <Context.Provider value={[expanded, toggle]}>
                <Header />
                <Aside />
            </Context.Provider>
            <main className='w-full flex-1'>
                {children}
            </main>
        </div>
    )
}

export default Layout