import './cursos.css'
import { motion } from 'framer-motion'

const Cursos = () => {
    return (
        <div 
        id='cursos' 
        className="cursos"
        >
            <h1 className='nome-cursos' >Cursos: </h1>
            <motion.div
             className='cursos_analise' 
             initial= {{opacity: 0}} 
             whileInView={{opacity: 1}}
             exit={{opacity: 0}}
             transition={{ duration:0.8 , delay: 0.4}}
             >
                <h1>analise e desenvolvimento de sistemas <span className='cursos_data' >01/08/2022 - 01/08/2024</span> </h1>
                <p>aprendendo um pouco sobre diferentes tipos de linguagens  e assuntos relacionados a ti,
                <span>ja em casa estou focando em front-end html , css , javascript , typescript , react.js e next.js  mais tambem estou estudando node.js</span></p>
            </motion.div>

            <motion.div 
            className='cursos_ingles'
            initial= {{opacity: 0}} 
            whileInView={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration:0.8 , delay: 0.4}}
             >
                <h1>cacs linguas UFMG ( Inglês ) <span>01/08/2017 - 15/03/2020 </span> </h1>
                <p>cursei durante 2 anos e meio  curso de ingles na ufmg  no modelo presencial  , parei no level intermediary 2 por conta da pandemia </p>
            </motion.div>
        </div>
    )
}

export default Cursos