import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import Minhasreceitas from './pages/Minhasreceitas';

import Erro from './pages/Erro';

import Header from './components/Header';
import Footer from './components/Footer';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalhes" element={<Detalhes/>}/>
        <Route path="/minhasreceitas" element={<Minhasreceitas/>}/>

        <Route path="*" element={<Erro/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RoutesApp;