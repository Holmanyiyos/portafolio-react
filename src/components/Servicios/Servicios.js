import React from "react";
import "./Servicios.css"

function Servicios(){
    return(
        <section className="servicios" id="servicios">
         <h2>Nuestros Servicios</h2>
         <div className="serviciosContainer">

             <div className="serviciosItem">
                 <div className="serviciosItem__cabecera">
                 <div className="img" />
                 <h4>Dessarrollo Frontend</h4>
                 </div>
                 <p>Tareas principales que desarrola un frontend</p>
                 <i class="fas fa-long-arrow-alt-right"></i>
             </div>

             <div className="serviciosItem">
                 <div className="serviciosItem__cabecera">
                 <div className="img" />
                 <h4>Diseño Responsivo</h4>
                 </div>
                 <p>Tareas principales de responsive design</p>
                 <i class="fas fa-long-arrow-alt-right"></i>
             </div>

             <div className="serviciosItem">
                 <div className="serviciosItem__cabecera">
                 <div className="img" />
                 <h4>Maquetación</h4>
                 </div>
                 <p>Tareas principales de un maquetador web </p>
                 <i class="fas fa-long-arrow-alt-right"></i>
             </div>
           <div className="servicios__btnContainer">
               <button>Explorar Servicios</button>
           </div>
         </div>
        </section>
    )
}

export {Servicios};