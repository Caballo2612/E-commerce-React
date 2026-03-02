import React, { useState } from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from "react-router-dom";

export const Layout = () => {
    const [IsOpen, setIsOpen] = useState({
        sidebar: false,
        settings: false,
        RegionalS: false
    })

    const toggleMenu = (menu) => {
        setIsOpen(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }))
    };

    return (
        <div className="">
            <div className="flex flex-col">
                <Header
                    IsOpen={IsOpen}
                    toggleMenu={toggleMenu}
                />
                <Sidebar
                    IsOpen={IsOpen}
                    toggleMenu={toggleMenu}
                />
                <main className=''>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
};
