import React from "react";
import "./Blog.css"

function Blog(){
    return(
        <section className="blog">
            <h2>Blog y Noticias</h2>
            <div className="blogContainer">

            <div className="articulo">
                    <div className="header"></div>
                    <div className="fecha">
                    <i className="far fa-calendar-alt"></i>
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
                    <i className="far fa-calendar-alt"></i>
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
                    <i className="far fa-calendar-alt"></i>
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

export {Blog}