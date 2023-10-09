import './projetos2.css'

const projeto = ({imagem , pagina , github  , mensagem}) => {
    return (
        <div>
            <div className='projeto2-container' >     
                <div className="container" >
                    <div className="carta" >  
                        <div className="frente" >
                            <img className='imagem_swiper' src={imagem} alt="imagens"/>
                        </div>

                        <div className="tras" >
                            <div className='tras-container' >
                                <div>
                                    {mensagem}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div>
                    <div className='botoes-direcionamento'>
                        <a className='botoes-direcionamento-pagina' href={pagina} target='blank' ><button>pagina web</button></a>
                        <a className='botoes-direcionamento-github' href={github} target='blank' ><button>github</button></a>
                    </div>                
            </div>
        </div>
    )
}

export default projeto