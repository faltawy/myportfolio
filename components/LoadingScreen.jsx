import React from 'react'

function LoadingScreen({ loading }) {
    return (
        <>
            <style jsx>
                {`
                @keyframes loading {
                    to{
                        transform:rotate(360deg);
                    }
                }
                @keyframes hide{
                    to{
                        opacity:0;
                        display:hidden;
                    }
                }
                .hide{
                    display:hidden;
                }
                .loader{
                    --width:70px;
                    --border-width:8px;
                    width:var(--width);
                    height:var(--width);
                    border-radius:50%;
                    border:var(--border-width) solid red;
                    border-top-color:transparent;
                    animation:loading 1.5s linear infinite;
                    
                }
                `}
            </style>

            <div className={'w-screen h-screen flex items-center transition-all fixed inset-0 justify-center bg-darkBlue ' + `${!loading && 'hide'}`}>

                <span className='loader'></span>
            </div>
        </>
    )
}

export default LoadingScreen