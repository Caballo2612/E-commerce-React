import { Link } from 'react-router-dom'
import SearchInput from '../../molecule/Search'
import ProfileCard from '../../organisms/profileCard'
import '../../../stylesheets/extra.css'

export const Header = ({ IsOpen, toggleMenu, usuario }) => {

    return (
        <>

            <div className='h-24 flex justify-around tracking-[3px] w-screen font-sans shadow-md bg-white z-50'>
                <div className='flex items-center flex-row gap-6 xl:hidden md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            id='menuIcon'
                            width="50"
                            onClick={() => toggleMenu('sidebar')}
                            height="50"
                            version="1.1"
                            fill="none"
                            viewBox="0 0 24 24"
                            className='cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg block xl:hidden md:hidden ml-2'
                        >
                            <path stroke="#000" d="M6 12h12M6 15.5h12m-12-7h12" />
                        </svg>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="none"
                        className='cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg block xl:hidden md:hidden'
                        viewBox="0 0 24 24">
                        <path stroke="#000" d="M21 9c0 3.754-5.284 8.976-8.414 11.533a.955.955 0 0 1-1.187.02C8.267 18.152 3 13.122 3 9c0-7 9-7 9-1 0-6 9-6 9 1" />
                    </svg>
                </div>

                <Link to="/">
                    <img src="/ICON.png" alt="" className='w-24 transition duration-300 hover:scale-110 xl:ml-3 md:ml-3' />
                </Link>

                <nav className='xl:flex md:flex tracking-[3px] items-center flex-row gap-8 uppercase hidden'>
                    <div className='relative group'>
                        <Link to="/categorias" className='border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Categorias</Link>
                        <div className='hidden absolute rounded-2xl z-50 bg-white shadow-lg group-hover:block'>
                            <nav className='flex flex-col'>
                                <Link to="/hombres" className='p-3 py-4 rounded-2xl hover:bg-gray-100'>hombres</Link>
                                <Link to="/mujeres" className='p-3 py-4 rounded-2xl hover:bg-gray-100'>mujeres</Link>
                                <Link to="/ninos" className='p-3 py-4 rounded-2xl hover:bg-gray-100'>niños</Link>
                                <Link to="/shoes" className='p-3 py-4 rounded-2xl hover:bg-gray-100'>calzado</Link>
                                <Link to="/accesories" className='p-3 py-4 rounded-2xl hover:bg-gray-100'>accesorios</Link>
                            </nav>
                        </div>
                    </div>
                    <Link to="/colecciones" className='border-b duration-300 border-b-white hover:border-b¡ hover:border-b-black hover:drop-shadow-lg'>Colecciones</Link>
                    <Link to="/outlet" className='text-red-600 font-bold border-b duration-300 border-b-white hover:border-b hover:border-b-black hover:drop-shadow-lg'>Outlet</Link>
                </nav>

                <div className='flex items-center flex-row gap-6'>
                    <div className='hidden xl:block md:block lg:block'>
                        <SearchInput />
                    </div>
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 1024 1024"
                        className='cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M960.1 258.4H245.8l-36.1-169H63.9v44h110.2l26.7 125 100.3 469.9 530 0.4v-44l-494.4-0.3-22.6-105.9H832l128.1-320.1z m-65 44L855.6 401H276.3l-21.1-98.6h639.9zM304.8 534.5L279.7 417h569.5l-47 117.5H304.8z" fill="#39393A" />
                        <path d="M375.6 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.3-72-72-72zM732 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72c39.7 0 72-32.2 72-72s-32.3-72-72-72zM447.5 302.4h16v232.1h-16zM652 302.4h16v232.1h-16z" fill="#E73B37" />
                        <path d="M276.3 401l3.4 16-3.4-16z" fill="#343535" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="none"
                        className='cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg hidden xl:block md:block'
                        viewBox="0 0 24 24">
                        <path stroke="#000" d="M21 9c0 3.754-5.284 8.976-8.414 11.533a.955.955 0 0 1-1.187.02C8.267 18.152 3 13.122 3 9c0-7 9-7 9-1 0-6 9-6 9 1" />
                    </svg>
                    <div className='relative group xl:hidden md:hidden lg:hidden'>
                        <svg
                            id='userIcon'
                            xmlns="http://www.w3.org/2000/svg"
                            className='cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg mr-5 xl:mr-0 md:mr-0'
                            version="1.1"
                            width="40"
                            onClick={() => toggleMenu('setting')}
                            height="40"
                            viewBox="0 0 1024 1024"
                        >
                            <path fill="#39393a" d="M512 130.8c42.1 0 81.7 16.4 111.5 46.2s46.2 69.4 46.2 111.5-16.4 81.7-46.2 111.5-69.4 46.2-111.5 46.2-81.7-16.4-111.5-46.2-46.2-69.4-46.2-111.5 16.4-81.7 46.2-111.5 69.4-46.2 111.5-46.2m0-44c-111.4 0-201.6 90.3-201.6 201.6C310.4 399.8 400.7 490 512 490c111.4 0 201.6-90.3 201.6-201.6S623.3 86.8 512 86.8m.3 436.7L84 681.4v255.7h856V681.4zM896 893.1H128V712.6l384.3-142.4L896 712.6z" />
                        </svg>
                        {IsOpen.setting && (<ProfileCard usuario={usuario} />)}
                    </div>

                    <div className='relative group hidden xl:block md:block lg:block'>
                        <svg
                            id='userIcon'
                            xmlns="http://www.w3.org/2000/svg"
                            className='cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg mr-5 xl:mr-0 md:mr-0'
                            version="1.1"
                            width="40"
                            height="40"
                            viewBox="0 0 1024 1024"
                        >
                            <path fill="#39393a" d="M512 130.8c42.1 0 81.7 16.4 111.5 46.2s46.2 69.4 46.2 111.5-16.4 81.7-46.2 111.5-69.4 46.2-111.5 46.2-81.7-16.4-111.5-46.2-46.2-69.4-46.2-111.5 16.4-81.7 46.2-111.5 69.4-46.2 111.5-46.2m0-44c-111.4 0-201.6 90.3-201.6 201.6C310.4 399.8 400.7 490 512 490c111.4 0 201.6-90.3 201.6-201.6S623.3 86.8 512 86.8m.3 436.7L84 681.4v255.7h856V681.4zM896 893.1H128V712.6l384.3-142.4L896 712.6z" />
                        </svg>
                        <div className='hidden group-hover:block'>
                            <ProfileCard usuario={usuario}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
