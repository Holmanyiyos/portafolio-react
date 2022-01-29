const Data = ()=>{
    const proyectos = [
        {
        id:1,
        nombre: "Api Clima",
        descripcion: "Esta web te permitirá saber cual es la temperatura y mucho más de cualquier ciudad principal del mundo, y un resumen del clima de los próximos 7 días.(Para una mejor experiencia, se recomienda instalar en tu navegador la extención 'CORS Unblock')",
        tecnologias: ["js", "css"],
        web: "https://holmanyiyos.github.io/apiClima/",
        repositorio: "https://github.com/Holmanyiyos/apiClima"
        },
        {
            id:2,
            nombre: "Batatachip-page",
            descripcion: "Landing Page responsive siguiendo la metodología mobile first",
            tecnologias: ["js", "css"],
            web: "https://holmanyiyos.github.io/batatachip-page/",
            repositorio: "https://github.com/Holmanyiyos/batatachip-page"
        },
        {
            id:3,
            nombre: "Platzi Badges",
            descripcion: "Página web para crear insignias con datos personales",
            tecnologias: ["React", "css"],
            web: "https://holmanyiyos.github.io/platzi-badges-app/",
            repositorio: "https://github.com/Holmanyiyos/platzi-badges-app"
        }
    ]
    return(proyectos)
}

export {Data}