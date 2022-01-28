import React from "react";
import "./Header.css"

function Header(){
    return(
        <header className="header">
            <h3>Holman Plazas</h3>
            <ul>
                <a href="/"><li>Sobre mi</li></a>
                <a href="/"><li>Servicios</li></a>
                <a href="/"><li>Portafolio</li></a>
                <a href="/"><li>Blog</li></a>
                <a href="/"><li>Contacto</li></a>
            </ul>
            <button>Agenda una llamada</button>
        </header>
    )
}

export {Header};