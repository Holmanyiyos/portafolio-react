import React from 'react';
import { useEffect } from 'react';
import './App.css';
import icon1 from "./assets/desarrollo-web.png"
import {Header} from "./components/Header/Header"
import {Presentation} from "./components/Presentation/Presentation"
import {Servicios} from "./components/Servicios/Servicios"
import {Portafolio} from "./components/Portafolio/Portafolio"
import {Contacto} from "./components/Contacto/Contacto"



function App() {
 
  const observer = new IntersectionObserver((nodo)=>{
    const el = document.getElementById("btnUp");
    nodo.forEach(nodo=>{
      if (nodo.isIntersecting) {
        el.classList.remove("mostrar");
        return;
      }else{
        el.classList.add("mostrar");
      }
    })
  })
 

  useEffect(()=>{
    const header = document.getElementById("header")
    registerNodo(header);
  })

  const registerNodo = (nodo)=>{
  observer.observe(nodo)}

  const toUp=()=>{
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(toUp)
      window.scrollTo(0, currentScroll - (currentScroll /10))
    }
  }

  return (
   <div className='app'>
     <Header/>
     <Presentation/>
     <Servicios/>
     <div className="publicidad">
       <div className="imagen"></div>
        <img src={icon1} alt="icono1" />
       <div className="texto">
         <h3>¿Tienes un proyecto en mente? <br/> No lo pienses y contáctame ahora</h3>
         <p>¿Listo para ser referente en tu sector? hagamos una llamada</p>
         <a href="mailto:haplazass@hotmail.com"><button>Contáctame</button></a>
       </div>
       <div className="triangulo"></div>
     </div>
    <Portafolio/>

    <section className='publicidad2'>
      <h3>Déjame saber sí necesitas hablar sobre tu proyecto.<br/>
      Estoy disponible para trabajo freelance.
      </h3>
      <h4>Vamos a crear tu página web <i className="fas fa-arrow-up"></i></h4>
    </section>

    <Contacto/>
    <i className="fas fa-chevron-circle-up btnUp" id='btnUp' onClick={toUp}></i>
   </div>
  );
}

export default App;
