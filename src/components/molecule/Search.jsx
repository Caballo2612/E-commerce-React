import React from 'react';

const SearchInput = () => {
    return (
        <div className="relative">
            <input placeholder="Buscar" className="shadow-lg focus:border-2 border-gray-300 px-5 focus:w-35 py-3 rounded-xl w-10 transition-all xl:focus:w-64 outline-none xl:w-56 md:w-56 md:focus:w-64" name="search" type="text" />
            <svg className="size-6 absolute top-3 right-3 text-gray-500 cursor-pointer" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
        </div>
    );
}

export default SearchInput;