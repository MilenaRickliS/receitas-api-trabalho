//Hooks React
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import axios from "axios";


function Home(){ 
    const [receitas, setReceita] = useState([]);  // controlar o estado

    useEffect( () => { //função para consumir a api    
      function carregaDados(){
        fetch("https://gold-anemone-wig.cyclic.app/receitas/todas")
        .then((response) => response.json())
        .then((json) => setReceita(json))
      }
      carregaDados();
    },[]);
  


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

      {receitas.map((item) => { //percorrendo a api
        return(
          <article className='post' key={item.id}>
            <strong className="nome">{item.receita}</strong>
            <p className='sinopse'>{item.ingredientes}</p>
            <img className='foto' src={item.link_imagem}/>            
            <a className="botao">Acessar</a>
          </article>
        );
      })}
      <footer>
        <p>₢Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}
//exportar
export default Home;