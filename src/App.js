import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header"
import {Presentation} from "./components/Presentation/Presentation"
import {Servicios} from "./components/Servicios/Servicios"
import {Portafolio} from "./components/Portafolio/Portafolio"
import {Contacto} from "./components/Contacto/Contacto"

function App() {
  return (
   <div className='app'>
     <Header/>
     <Presentation/>
     <Servicios/>
     <div className="publicidad">
       <div className="imagen"></div>
       <div className="texto">
         <h3>¿Tienes un proyecto en mente? <br/> No lo pienses y contáctanos ahora</h3>
         <p>¿Listo para ser referente en tu sector? hagamos una llamada</p>
         <button>Contáctanos</button>
       </div>
       <div className="triangulo"></div>
     </div>
    <Portafolio/>

    <section className='publicidad2'>
      <h3>Déjame saber sí necesitas hablar sobre tu proyecto.<br/>
      Estamos disponibles para trabajo freelance.
      </h3>
      <h4>Vamos a crear tu página web <i className="fas fa-arrow-up"></i></h4>
    </section>

    <Contacto/>
   </div>
  );
}

export default App;
