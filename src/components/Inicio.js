import './Inicio.css'
import imagem from "./imagem/imagemprogramçao1.png"
import {FaLinkedin , FaGithub , } from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import { motion } from 'framer-motion'
import React from 'react';

const Inicio = () => {  
  
    return (
        <div
         id='inicio'
         className="inicio" >
          <motion.div 
            initial= {{opacity: 0, x: -100}} 
            whileInView={{opacity: 1, x: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.9}}
           className='conteudo-inicio' >
            <h1>wendel <span>tadeu</span></h1>
            <h2>desenvolvedor web</h2>
            <div className='logos' >
              <a href="https://www.linkedin.com/in/wendel-tadeu-15b070279/" target='blank' ><FaLinkedin className='logo' /></a>
              <a href="https://github.com/wendeltpds" target='blank' ><FaGithub className='logo' /></a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvbJNNJDHtvdVNsFjkKvgbMCGlrLxWcvkTcgDTgvTBsqbQsfqCnJMXDnwpqcPMpTZwgxWL" target='blank' ><BiLogoGmail className='logo' /></a>
            </div>
          </motion.div>
              
          <div>
            <img className='imagem-logo' src={imagem} alt="imagem react" />
          </div>
        </div>
    )
  };

  

  export default Inicio;