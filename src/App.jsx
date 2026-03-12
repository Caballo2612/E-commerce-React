import { Layout } from './components/layout/layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Coleccion from './components/pages/Colecciones'
import { Categories } from './components/pages/Categories'
import { Outlet } from './components/pages/Outlet'
import { Login } from './components/pages/forms'
import { ProductPage } from './components/pages/ProductPage'
import appFireBase from "./credentials"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const Auth = getAuth(appFireBase);
const firestore = getFirestore(appFireBase);

function App() {

  const [usuario, setUsuario] = useState(null)

  async function getRol(uid) {
    const docuRef = doc(firestore, `Usuarios/${uid}`);
    const docucifrada = await getDoc(docuRef);

    const finalDocu = docucifrada.data();

    return {
      documento: finalDocu.documento,
      email: finalDocu.email,
      type: finalDocu.document_type,
      name: finalDocu.name
    };
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((finalDocu) => {
      const userData = {
        uid: usuarioFirebase.uid,
        documento: finalDocu.documento,
        type: finalDocu.document_type,
        email: usuarioFirebase.email,
        name: finalDocu.name,
      };
      setUsuario(userData);
    });
  }

  onAuthStateChanged(Auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!usuario) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUsuario(null);
    }
  });

  return (
    <div className='overflow-x-hidden bg-linear-to-b from-[#ECE9E6] to-[#FFFFFF]'>
      <Routes>
        <Route element={<Layout usuario={usuario} />}>
          <Route path='/login' element={<Login firestore={firestore} />} />
          <Route path='/' element={<Home />} />
          <Route path='colecciones' element={<Coleccion />} />
          <Route path='categorias' element={<Categories />} />
          <Route path='outlet' element={<Outlet />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
