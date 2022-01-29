import React from "react";
import "./Servicios.css"

function Servicios(){
    return(
        <section className="servicios" id="servicios">
         <h2>Mis Servicios</h2>
         <div className="serviciosContainer">

             <div className="serviciosItem">
                 <div className="serviciosItem__cabecera">
                 <i className="fas fa-laptop-code img"></i>
                 <h4>Dessarrollo Frontend</h4>
                 </div>
                 <p>Convierto diseños en código, diseño la estructura de la web y facilito la navegación del usuario</p>
                 <i className="fas fa-long-arrow-alt-right"></i>
             </div>

             <div className="serviciosItem">
                 <div className="serviciosItem__cabecera">
                 <i className="fas fa-mobile-alt img"></i>
                 <h4>Diseño Responsivo</h4>
                 </div>
                 <p>Diseñar webs capaces de adaptarse a cualquier dispositivo, sea un celular, tablet o computador</p>
                 <i className="fas fa-long-arrow-alt-right"></i>
             </div>

             <div className="serviciosItem">
                 <div className="serviciosItem__cabecera">
                 <i className="far fa-edit img"></i>
                 <h4>Maquetación</h4>
                 </div>
                 <p>Planificación, conceptualización y organización del contenido de una web</p>
                 <i className="fas fa-long-arrow-alt-right"></i>
             </div>
           <div className="servicios__btnContainer">
               <button>Explorar Servicios</button>
           </div>
         </div>
        </section>
    )
}

export {Servicios};