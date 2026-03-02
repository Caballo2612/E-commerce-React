import React from 'react'

export const RegionalSettings = () => {
    return (
        <div className='absolute w-[300px] h-[300px] bg-white rounded-lg flex flex-col justify-center gap-5 shadow-md z-100 left-5 top-10'>
            <div className='ml-3 flex flex-col gap-5'>
                <h2 className='text-2xl font-sans font-bold'>Lenguaje:</h2>
                <select className='w-[200px] h-10 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                </select>
                <h2 className='text-2xl font-sans font-bold'>Moneda:</h2>
                <select className='w-[200px] h-10 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                    <option value="COP">COP</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>

        </div>
    )
}
