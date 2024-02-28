//Hooks React
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo


function Erro(){ 
  return(
    <div className='container' id='erro'>
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to="/">Veja todos filmes!</Link>
    </div>
  );
}
//exportar
export default Erro;