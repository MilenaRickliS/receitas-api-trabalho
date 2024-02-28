//Hooks React
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo


function Detalhes(){ 


  return(
    <div className='container'>
      <header>
        <nav>
          <ul>
            <li><a><Link to='/'>Home</Link></a></li>
            <li><a><Link to='/detalhes'>Detalhes</Link></a></li>
            <li><a><Link to='/minhasreceitas'>Minhas Receitas</Link></a></li>
          </ul>
        </nav>
      </header>
      <footer>
        <p>₢Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}
//exportar
export default Detalhes;