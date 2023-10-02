import React, { useState } from 'react';
import menuaberto from './imagem/menuaberto.png'
import imagemmenu from './imagem/imagemmenu.png'
import './Links.css';
import wendel from './imagem/imagem_wendel3.png'
import {BsHouseDoor} from 'react-icons/bs'

const Links = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuShow() {
    setMenuOpen((open) => !open)
  }


  return (
    <header  className="cabeçalho" >
      <nav>
        <ul className="ul">
          <div>
            <li className="wendel">
              <a href="#inicio"><img className="imagem_wendel" src={wendel} alt="imagem wendel" /></a>
            </li>
          </div>
          <div>
            <div className="endereços">
              <li>
                <a href="#inicio" >inicio</a>
              </li>
              <li>
                <a href="#sobremim">Sobre mim</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                  <a href="#cursos">Cursos</a>
              </li>
              <li>
                  <a href="#projetos">Projetos</a>
              </li>
            </div>

            <div className='imagem_logo' >

            <div className="mobile_menu_icon">
                <button  className='botao_esconder' onClick={menuShow}>
                  <img className='imagem_menuaberto' src={imagemmenu} alt="menuaberto"/>
                </button>
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
            <li>
              <span className="rotas_links" > 
              <BsHouseDoor />
              <a href="#inicio">inicio</a>
              </span>
            </li>
            <li>
              <a className="rotas_links" href="#sobremim">Sobre mim</a>
            </li>
            <li>
              <a className="rotas_links" href="#contato">Contato</a>
            </li>
            <li>
              <a className="rotas_links" href="#cursos">Cursos</a>
            </li>
            <li>
              <a className="rotas_links" href="#projetos">Projetos</a>
            </li>
          </div>
        </div>
      )}
    </header>
  );
};

export default Links;