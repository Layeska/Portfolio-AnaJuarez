import React from 'react'
import { useTranslation } from 'react-i18next'
import Visible from '../components/Visible'

import '../styles/Portfolio.css'
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

const Portfolio = () => {
    const [t] = useTranslation('global')

    return (
        <div className='container_portfolio'>
            <h1 className='titlePortfolio'>Proyectos Realizados</h1>
            <div className="blog-card margin">
                <div className="meta">
                    <div className="photo" style={{backgroundImage: "url(https://i.postimg.cc/zBgY7tDM/counter.jpg)"}}></div>
                </div>
                <div className="description">
                    <h1>Contador de Palabras</h1>
                    <h2>Cuenta palabras, oraciones y párrafos</h2>
                    <p></p>
                    <div className='imagenesLogos'>
                        <img src="https://i.postimg.cc/RVJBMKsS/los3.png" alt="" />
                    </div>
                    <div className='butonsLinks'>
                        <button><a href="https://github.com/Layeska/CountWords.git" target={"_blank"}>Ver Código</a></button>
                        <button><a href="https://countword-devana.netlify.app/" target={"_blank"}>Ver Página</a></button>
                    </div>
                </div>
            </div>

            <div className="blog-card ">
                <div className="meta">
                    <div className="photo" style={{backgroundImage: "url(https://i.postimg.cc/zGS8YZWc/Captura-web-19-10-2022-231323-glassmorphism-ana-netlify-app.jpg)"}}></div>
                </div>
                <div className="description">
                    <h1>Proyecto de Usuarios</h1>
                    <h2>Proyecto que muestra de un archivo JSON datos de usuarios</h2>
                    <p></p>
                    <div className='imagenesLogos'>
                        <img src="https://i.postimg.cc/RVJBMKsS/los3.png" alt="" />
                    </div>
                    <div className='butonsLinks'>
                        <button><a href="https://github.com/Layeska/Glassmorphism-project.git" target={"_blank"}>Ver Código</a></button>
                        <button><a href="https://glassmorphism-ana.netlify.app/" target={"_blank"}>Ver Página</a></button>
                    </div>
                </div>
            </div>

            <div className="blog-card ">
                <div className="meta">
                    <div className="photo" style={{backgroundImage: "url(https://i.postimg.cc/tRhr5qHw/Captura-web-19-10-2022-231127-project-ana-netlify-app.jpg)"}}>
                    </div>
                </div>
                <div className="description">
                    <h1>Visor de citas</h1>
                    <h2>Proyecto que muestra citas de manera aleatoria de archivo JSON</h2>
                    <p></p>
                    <div className='imagenesLogos'>
                        <img src="https://i.postimg.cc/bN73hhnV/css3.png" alt="" className='css'/>
                        <img src="https://i.postimg.cc/fLPQQfdh/logo-react-js.png" alt="" className='reactjs' />
                    </div>
                    <div className='butonsLinks'>
                        <button><a href="https://github.com/Layeska/SliderCites.git" target={"_blank"}>Ver Código</a></button>
                        <button><a href="https://project-ana.netlify.app/" target={"_blank"}>Ver Página</a></button>
                    </div>
                </div>
            </div>

            <div className="blog-card ">
                <div className="meta">
                    <div className="photo" style={{backgroundImage: "url(https://i.postimg.cc/VsrmTm2R/rickymorty.jpg)"}}>
                    </div>
                </div>
                <div className="description">
                    <h1>Rick & Morty</h1>
                    <h2>Muestro los datos de los personajes y un filtro por dimensión</h2>
                    <p></p>
                    <div className='imagenesLogos'>
                        <img src="https://i.postimg.cc/bN73hhnV/css3.png" alt="" className='css'/>
                        <img src="https://i.postimg.cc/fLPQQfdh/logo-react-js.png" alt="" className='reactjs' />
                    </div>
                    <div className='butonsLinks'>
                        <button><a href="https://github.com/Layeska/Appi-Rick.git" target={"_blank"}>Ver Código</a></button>
                        <button><a href="https://appi-rick.netlify.app/" target={"_blank"}>Ver Página</a></button>
                    </div>
                </div>
            </div>
            <Visible/>
        </div>
    )
}


export default Portfolio
/*
<img src="https://i.postimg.cc/502XGX2c/html.png" alt="" />
                <img src="https://i.postimg.cc/bN73hhnV/css3.png" alt="" className="css"/>
                <img src="https://i.postimg.cc/pTxWrZcb/Java-Script-logo.png" alt="" />
*/


/*
{/*card 1
<div className="flip-cardContainer html">
<div className="flip-card-innerContainer">
    <div className="flip-card-frontContainer">
        <img src='https://i.postimg.cc/pL9SVLYG/html3.jpg' alt='flip-card' className=''/>
    </div>
    <div className="flip-card-backContainer">
        <div className="text">
            <h3>Html + CSS</h3>
            <p>{t('portfolio.designer')}</p>
            <button><a href='https://service-page-ana.netlify.app/' target='_blank'>{t('portfolio.btn1')}</a></button>
            <button><a href='https://github.com/Layeska/Service-page-ana.git' target='_blank'></a>{t('portfolio.btn2')}</button>
        </div>
    </div>
</div>
</div>
{/*card 2*
<div className="flip-cardContainer html">
<div className="flip-card-innerContainer">
    <div className="flip-card-frontContainer">
        <img src='https://i.postimg.cc/m2yNGfHc/html2.jpg' alt='flip-card' className=''/>
    </div>
    <div className="flip-card-backContainer">
        <div className="text">
            <h3>HTML + CSS </h3>
            <p>{t('portfolio.designer')}</p>
            <button> <a href='https://portafolio-ana.netlify.app/' target='_blank'>{t('portfolio.btn1')}</a></button>
            <button><a href='https://github.com/Layeska/Portafolio.git' target='_blank'>{t('portfolio.btn2')}</a></button>
        </div>
    </div>
</div>
</div>
*/