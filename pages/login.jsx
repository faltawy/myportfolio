import React from 'react'

export async function getServerSideProps() {
    return {
        props: {
            word: process.env.SECRET_WORD
        }
    }
}



function login() {
    console.log(process.env.TZ);
    return (
        <div className="h-screen w-screen bg-darkBlue flex items-center justify-center">
            <div className="flex items-center flex-1 justify-center gap-3 rounded-xl flex-wrap p-3 bg-lightBlue max-w-full sm:max-w-[350px]">
                <h1 className='text-white text-2xl'>Login(admin only)</h1>
                <div className='flex gap-1 w-full justify-between items-center'>
                    <input className='bg-darkBlue py-1.5 max-w-full px-1 text-white rounded-lg outline-none border-none caret-white' placeholder='Enter the secret word' type="text" />
                    <button className='bg-darkBlue px-3 py-1.5 text-white text-xl font-bold rounded-lg'>Login</button>
                </div>
            </div>

        </div>
    )
}

export default login