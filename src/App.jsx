import { Layout } from './components/layout/layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Coleccion from './components/pages/Colecciones'
import { Categories } from './components/pages/Categories'
import { Outlet } from './components/pages/Outlet'
import { Login } from './components/pages/forms'
import { ProductPage } from './components/pages/ProductPage'

function App() {

  return (
    <div className='overflow-x-hidden bg-linear-to-b from-[#ECE9E6] to-[#FFFFFF]'>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='colecciones' element={<Coleccion /> } />
          <Route path='categorias' element={<Categories />} />
          <Route path='outlet' element={<Outlet />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
