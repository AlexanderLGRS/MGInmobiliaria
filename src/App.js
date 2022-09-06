import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Properties from './Pages/Properties';

export default function App() {
  const [userFilter, setUserFilter] = useState('');
  const onSelectFilterHandler = (filter) => {
    setUserFilter(filter);
  };
  return (
    <BrowserRouter>
      <Layout onSelectFilter={onSelectFilterHandler}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nosotros' element={<AboutUs />} />
          <Route
            path='inmuebles'
            element={<Properties filter={userFilter} />}
          />
          {/* <Route path='casas' element={} /> */}
          {/* <Route path='locales' element={} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
