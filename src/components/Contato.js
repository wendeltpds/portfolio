import { FaWhatsapp , FaLinkedin , FaGithub } from 'react-icons/fa';
import {AiFillGoogleCircle} from 'react-icons/ai'
import "./Contato.css"
import Main from './main'
import { motion } from 'framer-motion';

const Contato = () => {
    return (
        <div
         id='contato'
          className='contato' 
          >
            <h1>Contatos: </h1>

            <motion.div 
            className='conteudo-contato'
              initial= {{opacity: 0}} 
              whileInView={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{ duration:0.8 , delay: 0.1}}
             >
                <div className='contato_links' >
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvbJNNJDHtvdVNsFjkKvgbMCGlrLxWcvkTcgDTgvTBsqbQsfqCnJMXDnwpqcPMpTZwgxWL"  target='blank'><AiFillGoogleCircle className='imagens' />wendel.tadel1@gmail.com</a>
                    <a href="https://www.linkedin.com/in/wendel-tadeu-15b070279/" target='blank' ><FaLinkedin  className='imagens' />https://www.linkedin.com/in/wendel-tadeu-15b070279/</a>
                    <a href="https://github.com/wendeltpds" target='blank' ><FaGithub className='imagens' />https://github.com/wendeltpds</a>
                    <a href="https://www.whatsapp.com/?lang=pt_br" target='blank' ><FaWhatsapp className='imagens' />31989181557</a>
                </div>

                <div>
                    <Main />
                </div>

            </motion.div>
        </div>
    )
};

  
export default Contato