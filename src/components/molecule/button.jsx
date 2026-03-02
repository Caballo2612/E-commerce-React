const Boton = ({ children, id }) => {
    return (
        <div className="max-w-32 bg-transparent items-center justify-center flex border-2 border-[#a8e063] shadow-lg hover:bg-linear-to-r from-[#56ab2f] to-[#a8e063] text-[#a8e063] hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
            <button className="px-5 py-2 cursor-pointer" id={id}>
                {children}
            </button>
        </div>
    );
}

export default Boton;
