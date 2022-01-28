import React from "react";
import "./Portafolio.css"

function Portafolio(){
    return(
        <section className="Portafolio" id="portafolio">
            <h2>Portafolio</h2>
            <div className="portafolioContainer">

            <div className="articulo">
                    <div className="header"></div>
                    <div className="fecha">
                    <i className="fas fa-wrench"></i>
                    <span>20/01/2022</span>
                    </div>
                    <h2>Título de la noticia o entrada del blog</h2>
                    <div className="escritor">
                        <div className="imagen"></div>
                        <p>Holman Plazas</p>
                    </div>
                </div>

                <div className="articulo">
                    <div className="header"></div>
                    <div className="fecha">
                    <i className="fas fa-wrench"></i>
                    <span>28/01/2022</span>
                    </div>
                    <h2>Título de la noticia o entrada del blog</h2>
                    <div className="escritor">
                        <div className="imagen"></div>
                        <p>Holman Plazas</p>
                    </div>
                </div>

                <div className="articulo">
                    <div className="header"></div>
                    <div className="fecha">
                    <i className="fas fa-wrench"></i>
                    <span>1/02/2022</span>
                    </div>
                    <h2>Título de la noticia o entrada del blog</h2>
                    <div className="escritor">
                        <div className="imagen"></div>
                        <p>Holman Plazas</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export {Portafolio}