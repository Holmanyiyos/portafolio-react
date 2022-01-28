import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header"
import {Presentation} from "./components/Presentation/Presentation"
import {Servicios} from "./components/Servicios/Servicios"
import {Blog} from "./components/Blog/Blog"

function App() {
  return (
   <React.Fragment>
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
    <Blog/>
   </React.Fragment>
  );
}

export default App;
