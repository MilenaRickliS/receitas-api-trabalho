//Hooks React
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo
import axios from "axios";


function Home(){ 
    const [data, setData] = useState([])
    const url = "http://gold-anemone-wig.cyclic.app/receitas/todas"

  async function fetchData() {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  useEffect(() => {
    console.log("Fetching data...");
    fetchData();
  }, []);


  return(
    <div className='container'>
      {data.map((item) => { //percorrendo a api
        return(
          <article className='post' key={item.id}>
            <strong className="nome">{item.receita}</strong>
            <p className='sinopse'>{item.ingredientes}</p>
            <img className='foto' src={item.link_imagem}/>            
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}
//exportar
export default Home;