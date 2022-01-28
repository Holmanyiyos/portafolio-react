import React from "react";
import "./Presentation.css"

function Presentation(){
    return(
        <section className="presentation">
           <div className="text">
               <span>------</span>
               <span>Frontend Developer</span>
               <h2>Aquí somos creativos y comprometidos</h2>
               <p>Hola!, soy Holman Plazas, colombiano y desarrollador frontend con ReactJs, sí estás pensando en crear una página web o actualizar una existente, no te preocupes, yo me encargo.</p>
               <div>
                   <button><i class="fas fa-arrow-up"></i></button>
                   <p>Contrátame ahora</p>
               </div>
           </div>
           <div className="image">
               <img src="../../../public/icono.jpg" alt="icono" />
           </div>
        </section>
    )
}

export {Presentation};