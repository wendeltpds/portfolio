import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import './App.css'
import Projetos from './components/projetos'
import Links from './components/Links';
import Cursos from './components/Cursos';
import {Style} from './components/style';
import { useState , useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='app-div-principal' >
      {loading ?
          <div className='loading-app-principal' >
            <h1 className='nome-loading' >wendel <span>tadeu</span></h1>
            <p>portifolio <span>...</span> </p> 
          </div>
           : (
        <>
              <Style>      
                <Links/>
                <Inicio/>
                <Sobre />
                <Contato />
                <Cursos />
                <Projetos />
              </Style>

            <ToastContainer  
              position="top-center"
              theme="dark"
            />
        </>
      )}
      </div>
  );
};

export default App;
//<AiOutlineLoading3Quarters className='loading-imagem-principal' /> 