import './Sobre.css'

import {FaReact  , FaCss3Alt} from 'react-icons/fa'
import {BiLogoJavascript , BiLogoTypescript} from 'react-icons/bi'
import {AiFillHtml5} from 'react-icons/ai'
import {SiNextdotjs} from 'react-icons/si'
import { motion } from 'framer-motion'




const Sobre = () => {

    return (
        <motion.div
         id='sobremim'
          className='principal-sobre' 
          initial= {{opacity: 0}} 
          whileInView={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{ duration:0.8 , delay: 0.1}}
          >
            <h1 className='nome-sobremim' >Sobre Mim</h1>
            <p className='texto-sobre' >
                meu nome e Wendel Tadeu e sou apaixonado por tecnologia e decidi trilhar o camiho da programação ,
                atualmente estou  focando nas linguagens  voltadas para o front-end , HTML , CSS ,Javascript , Typescript , react.js e next.js  mas  estou estudando node.js e pretendo estudar java.
            </p>

            <h1 className='linguagens-sobre' >linguagens</h1>
            <div className='div-logos-linguagens' >
                <FaReact  className='logo-react-sobre' />      
                <BiLogoJavascript  className='logo-react-sobre' />
                <FaCss3Alt  className='logo-react-sobre' />
                <AiFillHtml5  className='logo-react-sobre' />
                <BiLogoTypescript  className='logo-react-sobre' />
                <SiNextdotjs  className='logo-react-sobre' />

            </div>
        </motion.div>
        )

};


export default  Sobre