import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import InputSearchTwo from '../../molecule/SearchTwo';
import '../../../stylesheets/animations.css'

const Sidebar = ({ onClick, IsOpen }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCategories = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`inset-0 z-50 bg-white shadow-2xl overflow-x-hidden transition-all duration-300 ${IsOpen.sidebar ? 'max-h-full' : 'max-h-0'}`} id='sidebar'>
                <InputSearchTwo />
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
                                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m9.5 7 5 5-5 5" />
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
                            <Link to="/login" onClick={onClick} className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Iniciar sesión</Link>
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