import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import InputSearchTwo from '../../molecule/SearchTwo';
import '../../../stylesheets/animations.css'

const Sidebar = ({ onClick, IsOpen, toggleMenu }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCategories = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-2xl z-70 transition-transform duration-300 ease-in-out overflow-y-auto overscroll-contain ${IsOpen.sidebar ? "translate-x-0" : "-translate-x-full"}`} id="sidebar">
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        id='menuIcon'
                        width="50"
                        height="50"
                        onClick={() => toggleMenu('sidebar')}
                        version="1.1"
                        fill="none"
                        viewBox="0 0 24 24"
                        className='cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg block xl:hidden md:hidden ml-2'
                    >
                        <path stroke="#000" d="m7 17 9.9-9.9M7 7l9.9 9.9" />
                    </svg>
                    <InputSearchTwo />
                </div>
                <nav>
                    <ul className='flex flex-col p-4 gap-6 uppercase'>
                        <li className='relative group border-b pb-4 pl-4 border-b-black'>
                            <Link to="/shop" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Tienda</Link>
                        </li>
                        <li className='relative group border-b pb-4 pl-4 border-b-black justify-between flex items-center' onClick={toggleCategories} >
                            <Link to="/categorias" onClick={onClick} className='border-b duration-300 border-b-white group-hover:border-b-black hover:drop-shadow-lg'>Categorias</Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                className={
                                    isOpen
                                        ? "transition-transform duration-300 rotate-90 group-hover:drop-shadow-lg cursor-pointer"
                                        : "transition-transform duration-300 rotate-0 group-hover:drop-shadow-lg cursor-pointer"
                                }
                                fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="#000" d="m9.5 7 5 5-5 5" />
                            </svg>
                        </li>

                        {isOpen ?
                            <ul className='flex flex-col pl-8 gap-4 mb-4 text-gray-950 border-l border-l-black'>
                                <li className='relative group'>
                                    <Link to="/hombres" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Hombres</Link>
                                </li>
                                <li className='relative group'>
                                    <Link to="/mujeres" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Mujeres</Link>
                                </li>
                                <li className='relative group'>
                                    <Link to="/niños" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Niños</Link>
                                </li>
                                <li className='relative group'>
                                    <Link to="/shoes" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Calzado</Link>
                                </li>
                                <li className='relative group'>
                                    <Link to="/accesories" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Accesorios</Link>
                                </li>
                            </ul>
                            : null}

                        <li className='relative group border-b pb-4 pl-4 border-b-black'>
                            <Link to="/colecciones" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Colecciones</Link>
                        </li>
                        <li className='relative group border-b pb-4 pl-4 border-b-black'>
                            <Link to="/outlet" onClick={onClick} className='text-red-600 border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Outlet</Link>
                        </li>
                        <li className='relative group pb-4 pl-4 border-b border-b-black'>
                            <Link
                                to="/navideño"
                                onClick={onClick}
                                className='
                                        flex items-center gap-2
                                        px-3 py-2 rounded-md
                                        bg-linear-to-r from-red-600 to-green-600
                                        text-white font-bold
                                        shadow-md
                                        transition-all duration-300
                                        hover:scale-[1.03] hover:shadow-red-500/50'
                            >
                                🎄 Promociones Navideñas
                                <span className='absolute -top-2 -right-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold shadow-lg shadow-yellow-300/50 animate-pulse'>
                                    HOT
                                </span>
                            </Link>
                        </li>
                        <li className='relative group border-b pb-4 pl-4 border-b-black'>
                            <Link to="/dresses" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Vestidos</Link>
                        </li>
                        <li className='relative group border-b pb-4 pl-4 border-b-black'>
                            <Link to="/suits" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Trajes</Link>
                        </li>
                        <li className='relative group border-b pb-4 pl-4 border-b-black'>
                            <Link to="/contact" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Contactos</Link>
                        </li>
                        <li className='relative group border-b pb-4 pl-4 border-b-black'>
                            <Link to="/about" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Sobre Nosotros</Link>
                        </li>
                        <li className='relative group border-b pb-4 pl-4 border-b-black'>
                            <Link to="/Collabs" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Colaboraciones</Link>
                        </li>
                    </ul>
                </nav>
                <nav className='shadow-[0_-4px_5px_-1px_rgba(0,0,0,0.15)] py-4'>
                    <ul className='flex flex-col p-3 gap-4 capitalize text-gray-950'>
                        <li className='relative group'>
                            <Link to="/help" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Ayuda</Link>
                        </li>
                        <li className='relative group'>
                            <Link to="/country" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Pais: Colombia</Link>
                        </li>
                        <li className='relative group'>
                            <Link to="/terms" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Términos y Condiciones</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar