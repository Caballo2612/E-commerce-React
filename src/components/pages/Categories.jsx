import { useState } from 'react'
import InputSearchTwo from '../molecule/SearchTwo'
import { PanelFiltros } from '../organisms/PanelFiltros'
import Card from '../organisms/ProductCart'

export const Categories = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = (menu) => {
        setOpenMenu(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }))
    }

    return (
        <>
            <div className='flex flex-row justify-between ml-2 mr-2 items-center xl:hidden lg:hidden md:hidden'>
                <InputSearchTwo />

                <button className="px-6 py-1 text-lg font-medium rounded-md shadow-lg text-white bg-blue-600 active:bg-blue-700 transition duration-150 ease-in-out mt-4 mb-4" onClick={() => toggleMenu('panel')}>
                    Filtros
                </button>
            </div>

            {openMenu.panel && (
                <>
                    <div className="fixed inset-0 bg-black/80 z-40"></div> 

                    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden lg:hidden xl:hidden">
                        <PanelFiltros onClose={() => setOpenMenu(prev => ({ ...prev, panel: false }))} />
                    </div>
                </>
            )}

            <div className='flex'>
                <div className="hidden md:block xl:block lg:block z-50">
                    <PanelFiltros />
                </div>

                <div className='flex flex-wrap justify-center gap-[35px] xl:gap-[30px] lg:gap-[30px] md:gap-[30px] p-[30px_30px] xl:p-[60px_40px]'>
                    <Card />
                </div>
            </div>


        </>
    )
}
