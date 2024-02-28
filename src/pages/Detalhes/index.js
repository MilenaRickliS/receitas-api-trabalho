//Hooks React
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import { useParams, useNavigate } from 'react-router-dom'

function Detalhes(){ 
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);  // controlar o estado

  useEffect( () => { //função para consumir a api
    function carregaDados(){
      let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setMovie(json);
      })
    }
    carregaDados();
    return () => {
      console.log("COMPONENTE FOI DESMONTADO")
    }
    
  },[navigate, id]);
  

  return(
    <div className='container'>
      {movie.map((item) => { //percorrendo a api
        return(
          <article className='post' key={item.id}>
            <strong className="nome">{item.nome}</strong>
            <img className='foto' src={item.foto}/>  
            <p className='sinopse'>{item.sinopse}</p> 
          </article>
        );
      })}
    </div>
  );
}
//exportar
export default Detalhes;