//Hooks React
import { Link } from 'react-router-dom';
import "./style.css"; //estilo


function Header(){ 

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
    </div>
  );
}
//exportar
export default Header;