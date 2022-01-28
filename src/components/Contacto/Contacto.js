import React from "react";
import "./Contacto.css"

function Contacto(){
    return(
        <footer className="contacto" id="contacto">
            <h3>Vamos a hablar!</h3>
            <p>Siempre estoy abierto a dialogar sobre tu proyecto, para mejorar tu presencia en linea y que destaques en tu sector</p>
            <div className="redesSociales">
                <div className="redes"></div>
                <div className="redes"></div>
                <div className="redes"></div>
            </div>
            <div className="ulFooter">
                <ul>
                    <a href="#header"><li>Sobre mi</li></a>
                    <a href="#servicios"><li>Servicios</li></a>
                    <a href="#portafolio"><li>Portafolio</li></a>
                    <a href="#blog"><li>Blog</li></a>
                    <a href="#contacto"><li>Contacto</li></a>
                </ul>
                <small>Hecho con 🧡 por Holman Plazas</small>
            </div>
        </footer>
    )
}

export {Contacto}