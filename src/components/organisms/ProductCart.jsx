import { useEffect, useState } from 'react';
import ButtonAdd from '../molecule/ButtonAdd';
import { PriceFormats } from '../../utils/priceFormats';

const Card = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/data")
            .then(res => res.json())
            .then(data => {
                setProductos(data.productos);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            {productos.map(p =>
                <div className="relative flex w-[300px] shrink-0 text-left align-top flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-0 hover:cursor-pointer" key={p.id}>
                    <div className="relative -mt-6 w-full h-[400px] overflow-hidden rounded-xl text-white shadow-blue-gray-500/40 group">
                        <img src={p.front_img} alt="" className='block object-cover h-full w-full transition-all duration-600 z-10 opacity-100 group-hover:opacity-0' />
                        <img src={p.back_img} alt="" className='absolute top-0 left-0 block object-cover h-full w-full transition-all duration-600 z-0 opacity-0 group-hover:opacity-100 group-hover:scale-105' />
                    </div>
                    <div className="p-5 pt-3">
                        <h5 className="mb block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {p.name}
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased mb-1">
                            {PriceFormats.formatCOP(p.price)}
                        </p>
                        <div className="p-6 pt-0 pb-0 pl-0" id="AddToCart">
                            <ButtonAdd />
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Card;
