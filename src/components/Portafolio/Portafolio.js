import React from "react";
import "./Portafolio.css"
import apiclima from "../../assets/apiclima.png";
import platziBadges from "../../assets/platzibadges.png";
import batataChip from "../../assets/batatachip.png"
import {Data} from "../Data/Proyectos"

function Portafolio(){
    const data = Data();
    const arrayImagenes = [apiclima, batataChip, platziBadges]
    return(
        <section className="Portafolio" id="portafolio">
            <h2>Portafolio</h2>
            <div className="portafolioContainer">
            {data.map((item)=>{
                return(
            <div className="articulo" key={item.id}>
                    <div className="header">
                        <img src={arrayImagenes[item.id - 1]} alt="imagen" />
                    </div>
                    <div className="fecha">
                    <i className="fas fa-wrench"></i>
                    <span>{item.tecnologias[0]}</span>
                    <span>{item.tecnologias[1]}</span>
                    </div>
                    <h2>{item.nombre}</h2>
                    <a href={item.web} target="_blank" rel="noopener noreferrer">
                        <div className="visitar">
                            <div className="imagen"><i className="fas fa-laptop"></i></div>
                            <p>Página web</p>
                        </div>
                    </a>
                    <a href={item.repositorio} target="_blank" rel="noopener noreferrer">
                        <div className="visitar repositorio">
                            <div className="imagen">
                            <i className="fab fa-github-square"></i>
                            </div>
                            <p>Repositorio</p>
                        </div>
                    </a>
                </div>
            )})}
                {/* <div className="articulo">
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
                </div> */}

                {/* <div className="articulo">
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
                </div> */}

            </div>
        </section>
    )
}

export {Portafolio}