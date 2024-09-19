import React, { useState} from 'react';
import menuaberto from './imagem/menuaberto.png'
import imagemmenu from './imagem/imagemmenu.png'
import './Links.css';
import wendel from './imagem/imagem_wendel3.png'



const Links = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  const textos = [
    "inicio",
    "sobre",
    "contato",
    "cursos",
    "projetos"
  ]


  function menuShow() {
    setMenuOpen((open) => !open)
  }

  return (
    <header id='a' className="cabeçalhos" >
      <nav>
        <ul className="ul">
          <div>
            <li className="wendel">         
              <a href="#inicio"><img className="imagem_wendel" src={wendel} alt="imagem wendel" /></a>
            </li>
          </div>
          <div>

            <div className="endereços">
            {textos.map((texto) => (
              <li>
                <a href={`#${texto}`} >{texto}</a>
              </li>
            ))}
              </div>
            <div className='imagem_logo' >

            <div className="mobile_menu_icon">
            {!menuOpen &&               
                <button  className='botao_esconder' onClick={menuShow}>
                  <img className='imagem_menuaberto' src={imagemmenu} alt="menuaberto"/>
                </button>
            }
            </div> 
              </div>
        </div>
        </ul>
      </nav>


      {menuOpen && (
        <div className= "mobile_menu"  id="mobile_menu">
          
          <button  className='botao_esconder' onClick={menuShow}>
              <img  className='imagem_menu' src={menuaberto} alt="imagem menu" />
          </button>

          <div className="endereço">
            {textos.map((texto) => (
                <li href={`#${texto}`} className="rotas_links">
                  <a onClick={menuShow} href={`#${texto}`} >{texto}</a>
                </li>
              ))}
          </div>

        </div>
      )}
    </header>
  );
};

export default Links;