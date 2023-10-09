import './projetos.css'
import ballerini from '../components/imagem/imagem-ballerini.png'
import mercado from '../components/imagem/mercado-livre.png'
import carro from '../components/imagem/pagina-carro.png'
import costs from '../components/imagem/costs.png'
import tailwind from '../components/imagem/projeto-tailwind.png'
import React from 'react';
import Projeto from './projetos2'


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
                < Projeto imagem={tailwind} pagina="https://nexttailwind-gamma.vercel.app/" github="https://github.com/wendeltpds/nexttailwind"  mensagem="projeto criado com react.js , next.js 13 , tailwindcss , JSON-server  ,esse projeto criei somente para treinar minhas abilidades ."/>
              </SwiperSlide>
              <SwiperSlide>       
                < Projeto imagem={mercado} pagina="https://comprasmercadolivre.vercel.app/" github="https://github.com/wendeltpds/comprasmercadolivre" mensagem="projeto criado com next.js , css e api do mercado livre" />
              </SwiperSlide>
              <SwiperSlide>       
                < Projeto imagem={carro} pagina="https://carro-nu.vercel.app/" github="https://github.com/wendeltpds/carro" mensagem="esse projeto foi criado somente com html , css e javascript , foi um projeto que contruir com ajuda do canal devsuperio em 2022 quando estava iniciando meu aprendizado" />
              </SwiperSlide>
              <SwiperSlide>       
                < Projeto imagem={ballerini} pagina="https://wendeltpds.github.io/pageballerini/page%20ballerini/aula%20page/" github="https://github.com/wendeltpds/pageballerini/tree/main/page%20ballerini/aula%20page" mensagem="esse projeto foi criado somente com html , css , foi um projeto que contruir com ajuda da youtuber rafaella ballerini em 2022 quando estava iniciando meu aprendizado" />
              </SwiperSlide>
              <SwiperSlide>       
                < Projeto imagem={costs} pagina="https://costs-ruddy.vercel.app/" github="https://github.com/wendeltpds/costs" mensagem="projeto criado com react.js e json-server com ajuda do youtuber matheus battisti quando estava iniciando meus estudos com react.js " />
              </SwiperSlide>

            </Swiper>
            </div>
    )
}


export default NewProject