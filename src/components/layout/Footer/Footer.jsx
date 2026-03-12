import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="text-center py-4 w-screen shadow-[0_-4px_5px_-1px_rgba(0,0,0,0.15)] bg-white z-50">

                <div className="absolute left-[1%] xl:left-[5%] md:left-[5%]">
                    <img src="/ICON.png" alt="Logo" className="w-[150px]" />
                </div>

                <ul className="tracking-[5px] gap-12 mt-6">
                    <h3 className="font-sans mb-4">Redes Sociales</h3>
                    <li className="ml-2 inline-block">
                        <a href="" className="p-1 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" className='transition-all hover:drop-shadow-md hover:scale-110' viewBox="0 0 24 24"><path fill="#000" d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14q.901.013 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05" /></svg>
                        </a>
                    </li>
                    <li className="ml-2 inline-block">
                        <a href="#" className="p-1 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" className='transition-all hover:drop-shadow-md hover:scale-110' viewBox="0 0 24 24"><path fill="#000" d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 10.25-8.17 6.65 6.65 0 0 1 2 4.66 6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05 8.9 8.9 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 2 2 0 0 0 1.33-.94 1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25" /></svg>
                        </a>
                    </li>
                </ul>

                <ul className="tracking-[5px] gap-12 mt-6">
                    <h3 className="font-sans mb-4">Ubicaciones</h3>

                    <li className="inline-block ml-2 mt-2 mb-8">Cra 37 # 39 - 16 <span className='font-bold'>|</span></li>
                    <li className="inline-block ml-2 mt-2 mb-8">Cali - Colombia <span className='font-bold'>|</span></li>
                    <li className="inline-block ml-2 mt-2 mb-8">Cll 5 # 29 - 01 </li>
                </ul>

            </div>
        </>
    )
}
