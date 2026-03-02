import React, { useState, useRef } from 'react'
import InputSearchTwo from '../molecule/SearchTwo'

export const PanelFiltros = ({ onClose }) => {

    const [openMenu, setOpenMenu] = useState({
        hombres: false,
        mujeres: false,
        accesorios: false,
        ninos: false
    }
    )

    const toggleCategories = (menu) => {
        setOpenMenu(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }))
    }

    const [price, setPrice] = useState(300000)
    const barRef = useRef(null)
    const maxPrice = 3000000

    return (
        <>
            <div id='panel' className='bg-white w-[300px] fixed left-[48%] top-[50%] translate-[-50%] xl:static md:static lg:static xl:translate-none md:translate-none lg:translate-none m-5 rounded-3xl xl:max-h-fit md:max-h-fit lg:max-h-fit shadow-lg max-h-[65vh] overflow-y-auto overflow-x-hidden scroll-custom z-1000'>
                <div className='absolute right-2 top-1 xl:hidden md:hidden lg:hidden'>
                    <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="30" height="30" version="1.1" fill="none" viewBox="0 0 24 24" className='cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg block'>
                        <path stroke="#000" d="m7 17 9.9-9.9M7 7l9.9 9.9" />
                    </svg>
                </div>
                <div className='mt-2 mb-2 hidden xl:block lg:block md:block'>
                    <InputSearchTwo />
                </div>
                <div className="px-4 pb-4 border-b">
                    <p className="text-sm font-semibold tracking-widest mb-3 mt-2 uppercase">
                        Precio
                    </p>

                    <div
                        ref={barRef}
                        className="relative h-2 bg-gray-300 rounded-full cursor-pointer"
                        onMouseDown={(e) => {
                            const move = (clientX) => {
                                const rect = barRef.current.getBoundingClientRect()
                                const percent = Math.min(
                                    Math.max((clientX - rect.left) / rect.width, 0),
                                    1
                                )
                                setPrice(Math.round(percent * maxPrice))
                            }

                            move(e.clientX)

                            const onMove = (e) => move(e.clientX)
                            const onUp = () => {
                                document.removeEventListener('mousemove', onMove)
                                document.removeEventListener('mouseup', onUp)
                            }

                            document.addEventListener('mousemove', onMove)
                            document.addEventListener('mouseup', onUp)
                        }}
                    >
                        <div
                            className="absolute h-2 bg-black rounded-full"
                            style={{ width: `${(price / maxPrice) * 100}%` }}
                        />

                        <div
                            className="absolute top-1/2 w-4 h-4 bg-black rounded-full -translate-y-1/2"
                            style={{ left: `calc(${(price / maxPrice) * 100}% - 8px)` }}
                        />
                    </div>

                    <div className="flex justify-between text-xs mt-2 text-gray-600">
                        <span>$0</span>
                        <span>${price.toLocaleString()}</span>
                        <span>${maxPrice.toLocaleString()}</span>
                    </div>
                </div>

                <div id='categories' className='flex flex-col gap-2'>

                    <div className='p-4 mb-4 uppercase tracking-widest flex flex-col gap-2'>
                        <li className='border-b hover:bg-gray-200 duration-100 pb-4 pl-3 flex items-center'>
                            Todo
                        </li>
                        <li className='border-b hover:bg-gray-200 duration-100 pb-4 pl-3 flex justify-between items-center group' onClick={() => toggleCategories('hombres')}>
                            hombres
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                className={openMenu.hombres
                                    ? "transition-transform duration-300 group-hover:drop-shadow-lg cursor-pointer rotate-90"
                                    : "transition-transform duration-300 group-hover:drop-shadow-lg cursor-pointer group-hover:rotate-90"}
                                fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="#000" d="m9.5 7 5 5-5 5" />
                            </svg>
                        </li>
                        {openMenu.hombres && (
                            <ul className='flex flex-col pl-5 pr-5 gap-4 mb-4 text-gray-700 border-l border-l-black animate-desplegable'>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Trajes
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Casual
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Deportivo
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Calzado
                                </li>
                            </ul>
                        )}
                        <li className='border-b hover:bg-gray-200 duration-100 pb-4 pl-3 flex justify-between items-center group' onClick={() => toggleCategories('mujeres')}>
                            mujeres
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                className={openMenu.mujeres
                                    ? "transition-transform duration-300 group-hover:drop-shadow-lg cursor-pointer rotate-90"
                                    : "transition-transform duration-300 group-hover:drop-shadow-lg cursor-pointer group-hover:rotate-90"}
                                fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="#000" d="m9.5 7 5 5-5 5" />
                            </svg>
                        </li>
                        {openMenu.mujeres && (
                            <ul className='flex flex-col pl-5 pr-5 gap-4 mb-4 text-gray-700 border-l border-l-black'>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Vestidos
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Casual
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Deportivo
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Calzado
                                </li>
                            </ul>
                        )}
                        <li className='border-b hover:bg-gray-200 duration-100 pb-4 pl-3 flex justify-between items-center group' onClick={() => toggleCategories('ninos')}>
                            niños
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                className={openMenu.ninos
                                    ? "transition-transform duration-300 group-hover:drop-shadow-lg cursor-pointer rotate-90"
                                    : "transition-transform duration-300 group-hover:drop-shadow-lg cursor-pointer group-hover:rotate-90"}
                                fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="#000" d="m9.5 7 5 5-5 5" />
                            </svg>
                        </li>
                        {openMenu.ninos && (
                            <ul className='flex flex-col pl-5 pr-5 gap-4 mb-4 text-gray-700 border-l border-l-black'>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Trajes
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Gomosos
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Deportivo
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Calzado
                                </li>
                            </ul>
                        )}
                        <li className='border-b hover:bg-gray-200 duration-100 pb-4 pl-3 flex justify-between items-center group' onClick={() => toggleCategories('accesorios')}>
                            Accesorios
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                className={openMenu.accesorios
                                    ? "transition-transform duration-300 group-hover:drop-shadow-lg cursor-pointer rotate-90"
                                    : "transition-transform duration-300 group-hover:drop-shadow-lg cursor-pointer group-hover:rotate-90"}
                                fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="#000" d="m9.5 7 5 5-5 5" />
                            </svg>
                        </li>
                        {openMenu.accesorios && (
                            <ul className='flex flex-col pl-5 pr-5 gap-4 mb-4 text-gray-700 border-l border-l-black'>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Manillas
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Cadenas
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Candongas
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Anillos
                                </li>
                                <li className='relative border-b border-b-transparent hover:border-b-black'>
                                    Copitos
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
