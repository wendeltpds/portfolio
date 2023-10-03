import './projetos.css'
import ballerini from '../components/imagem/imagem-ballerini.png'
import mercado from '../components/imagem/mercado-livre.png'
import carro from '../components/imagem/pagina-carro.png'
import costs from '../components/imagem/costs.png'
import tailwind from '../components/imagem/projeto-tailwind.png'
import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

const NewProject = () => {
  const [nome , setnome] = useState(2)


  useEffect(() => {

    function wendel() {
      if(window.innerWidth < 900){
        setnome(1);
      }  
      else {
        setnome(2);
      }

    }
      wendel()

      window.addEventListener('resize' , wendel)
      return() => {
        window.removeEventListener('resize' , wendel)
      }

    }, []) 




    return (
      <div className='swiper' >
        <h1 className='nome-projetos' >Projetos: </h1>
        <Swiper id='projetos' 
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={nome}
        navigation
      >
        <SwiperSlide>
          <img className='imagem_swiper' src={tailwind} alt="imagens"/>
          <div className='botoes-direcionamento'>
            <a className='botoes-direcionamento-pagina' href="https://nexttailwind-gamma.vercel.app/" target='blank' ><button>pagina web</button></a>
            <a className='botoes-direcionamento-github' href="https://github.com/wendeltpds/nexttailwind" target='blank' ><button>github</button></a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='imagem_swiper' src={mercado} alt="imagens"/>
          <div className='botoes-direcionamento'>
            <a className='botoes-direcionamento-pagina' href="https://comprasmercadolivre.vercel.app/" target='blank' ><button>pagina web</button></a>
            <a className='botoes-direcionamento-github' href="https://github.com/wendeltpds/comprasmercadolivre" target='blank' ><button>github</button></a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='imagem_swiper' src={ballerini} alt="imagens"/>
            <div className='botoes-direcionamento'>
              <a className='botoes-direcionamento-pagina' href="https://wendeltpds.github.io/pageballerini/page%20ballerini/aula%20page/" target='blank' ><button>pagina web</button></a>
              <a className='botoes-direcionamento-github' href="https://github.com/wendeltpds/pageballerini/tree/main/page%20ballerini/aula%20page" target='blank' ><button>github</button></a>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='imagem_swiper' src={carro} alt="imagens"/> 
          <div className='botoes-direcionamento'>
            <a className='botoes-direcionamento-pagina' href="https://carro-nu.vercel.app/" target='blank' ><button>pagina web</button></a>
            <a className='botoes-direcionamento-github' href="https://github.com/wendeltpds/carro" target='blank' ><button>github</button></a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='imagem_swiper' src={costs} alt="imagens"/>
          <div className='botoes-direcionamento'>
            <a className='botoes-direcionamento-pagina' href="https://costs-ruddy.vercel.app/" target='blank' ><button>pagina web</button></a>
            <a className='botoes-direcionamento-github' href="https://github.com/wendeltpds/costs" target='blank' ><button>github</button></a>
          </div>
         </SwiperSlide>

      </Swiper>
      </div>
    )
}


export default NewProject






