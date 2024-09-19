import { useState } from 'react';
import './main.css'
import emailjs from '@emailjs/browser';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify';
 
function Main() {
  const schema = z.object({
    nome: z.string().nonempty('o nome e obrigatorio'),
    email: z.string().nonempty('o email e obrigatorio').email('formato de email invalido'),
    mensagem: z.string().nonempty('a mensagem e obrigatoria').min(6 , 'A mensagem precisa conter pelo menos 6 caracteres'),
  })

  const { register, handleSubmit , reset , formState: {errors} } = useForm({
    resolver: zodResolver(schema) 
  });

  const [teste , setTeste] = useState(false);

  function alerta(data) {
    setTeste(true);

    const templateParams = {
      from_name: data.nome,
      message: data.mensagem,
      email: data.email
    };
      emailjs
      .send("service_03fjw1n", "template_tptyxs8", templateParams, "ondqzkkaCJI77tZMo")
        .then(
          (response) => {
            setTeste(false)
            
             reset();

             toast.success(`Ola ${data.nome} recebi seu email e entrarei em contato o mais breve possivel. obrigado! `)
          }
        )
        .catch((err) => {
          console.log(err);
          
        })
  };


  return (
    <div className='tudo_main' >
      
    <main className='main_container'>
      <form className='botao_principal' onSubmit={handleSubmit(alerta)}> 
          <h1 className='nome'>Contato</h1>
          <input className='input_container' type="search" placeholder='digite seu nome' {...register('nome')}/>
          <span>{errors.nome && <span className='erro' >{errors.nome.message}</span> }</span>
          <input className='input_container' type="search"  placeholder='digite seu email' {...register('email')}/>
          <span>{errors.email && <span className='erro' >{errors.email.message}</span> }</span>
          <input className='input_container_mensagem' type="search"  placeholder='escreva sua mensagem' {...register('mensagem')}/>
          <span>{errors.mensagem && <span className='erro' >{errors.mensagem.message}</span> }</span>
          <button className='botao_main' type='submit' >{teste ? <AiOutlineLoading3Quarters className='loading' /> :'enviar'}</button>
      </form>
    </main>
    </div>
  )
}

export default Main;
