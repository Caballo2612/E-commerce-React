import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { PriceFormats } from '../../utils/priceFormats';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import appFireBase from '../../credentials';
import { useNavigate } from 'react-router-dom';

const firestore = getFirestore(appFireBase);

const Card = ({ searchQuery = '' }) => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onSnapshot(collection(firestore, 'Productos'), (snapshot) => {
      const productos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setProductos(productos);
    });

    return () => unSubscribe();
  });

  const productosFiltrados = productos.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.name?.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query) ||
      p.category?.toLowerCase().includes(query) ||
      p.colors?.some((color) => color.name?.toLowerCase().includes(query))
    );
  });

  return (
    <>
      {productosFiltrados.map((p) => (
        <div key={p.id} className="p-1">
          <div
            onClick={() => navigate(`/${p.id}`)}
            className="relative w-60 bg-white rounded-2xl pt-1 px-1 pb-2 shadow-[rgba(100,100,111,0.2)_0px_50px_30px_-20px] transition-all duration-500 ease-in-out hover:scale-[1.03] cursor-pointer"
          >
            <div className="relative w-full h-40 rounded-[0.7rem] rounded-tr-[4rem] mb-5 overflow-hidden">
              <div className="relative w-full h-full rounded-[inherit] group">
                <img
                  src={p.front_img}
                  alt={p.name}
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-[inherit] transition-all duration-500 ease-in-out opacity-100 z-1 group-hover:opacity-0"
                />
                <img
                  src={p.back_img}
                  alt={p.name}
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-[inherit] transition-all duration-500 ease-in-out opacity-0 scale-100 z-0 group-hover:opacity-100 group-hover:scale-105 group-hover:z-1"
                />
              </div>

              <div className="absolute right-3 bottom-1 bg-white text-gray-400 font-bold text-sm px-2 py-1 rounded-[20px] shadow-[rgba(100,100,111,0.2)_0px_0px_15px_0px] z-2">
                {PriceFormats.formatCOP(p.price) || '$0'}
              </div>
            </div>

            <label className="absolute w-[19px] h-[19px] top-[5px] right-[5px] cursor-pointer z-10">
              <input type="checkbox" className="absolute opacity-0 w-0 h-0" />
              <FavoriteIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
              </FavoriteIcon>
            </label>

            <div className="px-3 mb-2">
              <div className="font-black text-[#a6a6a6]">
                {p.name || ''}
              </div>
              <div className="font-bold text-[#666666] text-[0.7rem] mb-2">
                {p.description || ''}
              </div>
              <div className="flex justify-between uppercase text-[0.7rem] font-bold text-[#a8a8a8] gap-8 mb-3">
                <div className="flex-1">
                  Colores
                  <ul className="list-none flex flex-wrap items-center justify-between gap-1 text-[0.5rem] mt-1 p-0">
                    {p.colors?.map((color, i) => (
                      <li key={i} className="h-3.5 relative group/color">
                        <a
                          href="#"
                          style={{ borderColor: color.hex, background: color.hex }}
                          className="inline-block h-full aspect-square border-[3px] border-black rounded-full"
                        />
                        <span className="hidden group-hover/color:block absolute bottom-[125%] left-1/2 -translate-x-1/2 z-99 bg-black px-4 py-[0.2rem] rounded-2xl text-center whitespace-nowrap text-white text-[0.5rem]">
                          {color.name}
                        </span>
                      </li>
                    )) || (
                        <li className="h-3.5 relative">
                          <a href="#" className="inline-block h-full aspect-square border-[3px] border-black rounded-full" />
                          <span className="hidden">Default</span>
                        </li>
                      )}
                  </ul>
                </div>

                <div className="flex-1">
                  <span>tallas</span>
                  <ul className="list-none flex flex-wrap items-center justify-between mt-1 p-0">
                    {(p.sizes || []).map((size, i) => (
                      <li key={i} className="h-3.5">
                        <label className="cursor-pointer">
                          <input
                            name={`size-${p.id}`}
                            defaultValue={size}
                            type="radio"
                            className="hidden peer"
                          />
                          <span className="grid place-content-center h-full aspect-[1.2/1] text-[#484848] text-[0.5rem] text-center peer-checked:bg-green-500 peer-checked:rounded-[2rem_2rem_1.5rem_1.5rem] peer-checked:text-white">
                            {size}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-[#a8a8a8] text-[0.6rem] font-bold flex items-center gap-2">
                <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" className="h-3">
                  {[0, 20.607, 41.215, 61.823, 82.431].map((offset, i) => (
                    <path
                      key={i}
                      fill={
                        i < Math.round(p.ratings?.length
                          ? p.ratings.reduce((acc, r) => acc + Number(r), 0) / p.ratings.length
                          : 0
                        ) ? '#fc0' : '#e9e9e9'
                      }
                      transform={`translate(${offset} -1.047)`}
                      d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                    />
                  ))}
                </svg>
                <span>({p.ratings?.length || '0'})</span>
              </div>
            </div>

            <div className="flex gap-1 px-1">
              <button className="flex-auto rounded-[1.4rem_1.4rem_0.7rem_0.7rem] border-none py-2 bg-green-500 text-white font-black cursor-pointer transition-colors duration-200 hover:bg-green-600">
                Buy Now
              </button>
              <button className="grid place-content-center w-[50px] rounded-[1.4rem_1.4rem_0.7rem_0.7rem] border-none bg-green-500 text-white cursor-pointer transition-colors duration-200 hover:bg-green-600">
                <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg" className="w-[15px] fill-white">
                  <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const bouncing = keyframes`
  from, to { transform: scale(1, 1); }
  25% { transform: scale(1.5, 2.1); }
  50% { transform: scale(2.1, 1.5); }
  75% { transform: scale(1.5, 2.05); }
`;

const FavoriteIcon = styled.svg`
  fill: #a8a8a8;

  input:checked ~ & {
    animation: ${bouncing} 0.5s;
    fill: rgb(255, 95, 95);
    filter: drop-shadow(0px 3px 1px rgba(53, 53, 53, 0.14));
  }
`;

export default Card;