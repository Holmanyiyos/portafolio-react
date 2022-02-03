import React from "react";
import "./Header.css"

function Header(){
    return(
        <header className="header" id="header">
            <h3>Holman Plazas</h3>
            <ul>
            <div className="menu_desplegable">
                <div className="uno menu_des"></div>
                <div className="dos menu_des"></div>
            </div>
                <a href="#header"><li>Sobre mi</li></a>
                <a href="#servicios"><li>Servicios</li></a>
                <a href="#portafolio"><li>Portafolio</li></a>
                <a href="#blog"><li>Blog</li></a>
                <a href="#contacto"><li>Contacto</li></a>
            </ul>
            <a href="mailto:haplazass@hotmail.com"><button>Agenda un espacio</button></a>
        </header>
    )
}

export {Header};