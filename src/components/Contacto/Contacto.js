import React from "react";
import "./Contacto.css"

function Contacto(){
    return(
        <footer className="contacto" id="contacto">
            <h3>Vamos a hablar!</h3>
            <p>Siempre estoy abierto a dialogar sobre tu proyecto, para mejorar tu presencia en linea y que destaques en tu sector</p>
            <div className="redesSociales">
                <a href="https://www.linkedin.com/in/holman-plazas-10047550/" target="_blank" rel="noopener noreferrer"><div className="redes"><i className="fab fa-linkedin"></i></div></a>
                <a href="https://github.com/Holmanyiyos" target="_blank" rel="noopener noreferrer"><div className="redes"><i className="fab fa-github-square"></i></div></a>
                <a href="mailto:haplazass@hotmail.com"><div className="redes"><i className="fas fa-envelope-square"></i></div></a>
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