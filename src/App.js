import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Properties from './Pages/Properties';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MGInmobiliaria' element={<Home />} />
          <Route path='nosotros' element={<AboutUs />} />
          <Route path='inmuebles' element={<Properties />} />
          {/* <Route path='casas' element={} /> */}
          {/* <Route path='locales' element={} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
