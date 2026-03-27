import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import appFireBase from '../../credentials';
import { PriceFormats } from '../../utils/priceFormats';

const firestore = getFirestore(appFireBase)

export const ProductPage = () => {

  const { id } = useParams();

  const [productos, setProductos] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const docRef = doc(firestore, 'Productos', id)

    const unSubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        setProductos({ id: snapshot.id, ...snapshot.data() });
      }
    });

    return () => unSubscribe();
  }, [id]);

  if (!productos || !productos.SKU)
    return <div className="place-items-center p-8 text-gray-400 bg-white rounded-xl"><span>Cargando...</span></div>;

  const avgRating = productos?.ratings?.length
    ? productos?.ratings.reduce((acc, r) => acc + Number(r), 0) / productos?.ratings.length
    : 0;

  return (
    <main>

      <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-1 mt-5 mb-5 md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg">
        <div>
          <div className="relative bg-white rounded-2xl overflow-hidden aspect-square">
            <img
              src={productos?.front_img}
              alt={productos?.name}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${showBack ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
              src={productos?.back_img}
              alt={productos?.name}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ${showBack ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
            />
          </div>

          <div className="flex gap-2 mt-3">
            <img
              src={productos?.front_img}
              alt="front"
              onClick={() => setShowBack(false)}
              className={`w-14 h-14 rounded-lg object-contain cursor-pointer transition-all ${!showBack ? 'border-2 border-lime-400' : 'border border-gray-200'}`}
            />
            <img
              src={productos?.back_img}
              alt="back"
              onClick={() => setShowBack(true)}
              className={`w-14 h-14 rounded-lg object-contain cursor-pointer transition-all ${showBack ? 'border-2 border-lime-400' : 'border border-gray-200'}`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-1">
          <div>
            <h1 className="text-2xl font-medium text-gray-900 m-1">{productos?.name}</h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">sku: {productos?.SKU}</p>
          </div>

          <p className="text-2xl font-medium text-gray-500">{PriceFormats.formatCOP(productos?.price)}</p>

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 16 16">
                  <path
                    fill={i < Math.round(avgRating) ? "#fc0" : "#e9e9e9"}
                    d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-400">({productos?.ratings?.length || 0}) reseñas</span>
          </div>

          <hr className="border-gray-100" />

          {productos?.colors?.length > 0 && (
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Colores</p>
              <div className="flex gap-2 flex-wrap">
                {productos?.colors.map((color, i) => (
                  <div
                    key={i}
                    title={color.name}
                    onClick={() => setSelectedColor(i)}
                    className={`w-6 h-6 rounded-full cursor-pointer transition-all ${selectedColor === i ? 'outline-2 outline-lime-400 outline-offset-2' : ''}`}
                    style={{ background: color.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Talla</p>
            <div className="flex gap-2 flex-wrap">
              {productos?.sizes?.map((size, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSize(i)}
                  className={`px-3 py-1.5 rounded-lg text-sm border cursor-pointer transition-all ${selectedSize === i
                    ? 'bg-lime-400 border-lime-400 text-white'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Stock disponible: <span className="text-lime-400 font-medium">{productos?.stock} unidades</span>
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">{productos?.description}</p>

          <hr className="border-gray-100" />

          <div className="flex gap-2">
            <button className="flex-1 py-3 bg-lime-400 hover:bg-lime-600 text-white font-medium rounded-2xl transition-colors">
              Comprar ahora
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-2xl transition-colors">
              <svg width="18" height="18" viewBox="0 0 28 26" fill="currentColor">
                <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}
