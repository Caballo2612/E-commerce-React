import React, { useState } from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from "react-router-dom";

export const Layout = ({ usuario }) => {
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
                    usuario={usuario}
                    toggleMenu={toggleMenu}
                />
                <Sidebar
                    IsOpen={IsOpen}
                    toggleMenu={toggleMenu}
                />

                {IsOpen.sidebar && (
                    <div
                        className="fixed inset-0 bg-black/40 z-60"
                        onClick={() => toggleMenu("sidebar")}
                    />
                )}

                <main className=''>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
};
