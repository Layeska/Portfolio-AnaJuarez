import React from 'react'
import { useTranslation } from 'react-i18next'

import '../styles/Portfolio.css'

const Portfolio = () => {
    const [t] = useTranslation('global')

    return (
        <div  id='searchClass' >
                <input type='radio' name='filter' id='all' />
                <label htmlFor='all'>All</label> 

                <input type='radio' name='filter' id='htmls'/>
                <label htmlFor='htmls'>HTML/CSS</label>

                <input type='radio' name='filter' id='vanillas'/>
                <label htmlFor='vanillas'>JavaScrip Vanilla</label>

                <input type='radio' name='filter' id='reacts'/>
                <label htmlFor='reacts'>React</label>

                <input type='radio' name='filter' id='react-bootstraps'/>
                <label htmlFor='react-bootstraps'>React + Bootstrap</label>

                <input type='radio' name='filter' id='react-reduxs'/>
                <label htmlFor='react-reduxs'>React Redux</label>

                <input type='radio' name='filter' id='react-axioss'/>
                <label htmlFor='react-axioss'>React Axios</label>
            
            <div className='flip-mainContainer' id='elements' data-aos="fade-up" data-aos-duration="3000">
                <div className='containerPortfolio'>
                    <div className="rowContainer">
                        {/*card 1*/}
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
                        {/*card 2*/}
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
                        {/*card 3*/}
                        <div className="flip-cardContainer vanilla">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/fRY1ScRt/Screenshot-2022-10-19-230924.png' alt='flip-card'/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>HTML + CSS + JavaScript</h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button><a href='https://glassmorfismo-ana.netlify.app/' target='_blank'>{t('portfolio.btn1')}</a></button>
                                        <button><a href='https://github.com/Layeska/Glasmorfismo.git' target='_blank'>{t('portfolio.btn2')}</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*card 4*/}
                        <div className="flip-cardContainer vanilla">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/zGS8YZWc/Captura-web-19-10-2022-231323-glassmorphism-ana-netlify-app.jpg' alt="flip-card" className=''/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>HTML + CSS + JavaScript </h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button><a href='https://glassmorfismo-ana.netlify.app/' target='_blank'>{t('portfolio.btn1')}</a></button>
                                        <button><a href='https://github.com/Layeska/Glassmorphism-project.git'>{t('portfolio.btn2')}</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*card 5*/}
                        <div className="flip-cardContainer vanilla">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/VvYvqTLT/vanilla1.jpg' alt="flip-card" className=''/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>HTML + CSS + JavaScript (Fetch) </h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button><a href='https://glassmorphism-ana.netlify.app/'>{t('portfolio.btn1')}</a></button>
                                        <button> <a href='https://github.com/Layeska/E-commerce.git'>{t('portfolio.btn2')}</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*card 6*/}
                        <div className="flip-cardContainer react">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/sXysqNGJ/Captura-web-19-10-2022-231127-project-ana-netlify-app.jpg' alt='flip-card' className=''/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>JSX, Hooks (UseState) </h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button href='https://project-ana.netlify.app/'>{t('portfolio.btn1')}</button>
                                        <button href='https://github.com/Layeska/SliderCites.git' target='_back'>{t('portfolio.btn2')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*card 7*/}
                        <div className="flip-cardContainer react-redux">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/3JtzX8X7/Captura-web-19-10-2022-23181-app-ana-netlify-app.jpg' alt="flip-card" className=''/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>React, Hooks (UseState, UseRef)</h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button href='https://app-ana.netlify.app/'>{t('portfolio.btn1')}</button>
                                        <button href='https://github.com/Layeska/Weather-Api.git' target='_back'>{t('portfolio.btn2')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*card 8*/}
                        <div className="flip-cardContainer react-redux">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/65Z67t03/users-React.jpg' alt="flip-card" className=''/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>JSX</h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button href='https://users-ana.netlify.app/' target='_black'>{t('portfolio.btn1')}</button>
                                        <button href='https://github.com/Layeska/Users-json-React.git' target='_back'>{t('portfolio.btn2')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*card 9*/}
                        <div className="flip-cardContainer react-bootstrap">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/4NYZDZMP/react-bootstrap.jpg' alt="flip-card"/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>React, Hooks (UseState, UseRef), Axios, Bootstrap, API rest</h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button href='https://ecommerce-react-ana.netlify.app/'>{t('portfolio.btn1')}</button>
                                        <button as={'https://github.com/Layeska/ecommerce-React.git'} target='_back'>{t('portfolio.btn2')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*card 10*/}
                        <div className="flip-cardContainer react-axios">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/VsrmTm2R/rickymorty.jpg' alt="flip-card"/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>React, API rest, Hooks (useState)</h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button href='https://appi-rick.netlify.app/'>{t('portfolio.btn1')}</button>
                                        <button href='https://github.com/Layeska/Appi-Rick.git' target='_back'>{t('portfolio.btn2')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*card 11*/}
                        <div className="flip-cardContainer react-axios">
                            <div className="flip-card-innerContainer">
                                <div className="flip-card-frontContainer">
                                    <img src='https://i.postimg.cc/Jnbbb52g/Screenshot-2022-10-19-232900.png' alt="flip-card"/>
                                </div>
                                <div className="flip-card-backContainer">
                                    <div className="text">
                                        <h3>React, API rest, Hooks (useState)</h3>
                                        <p>{t('portfolio.designer')}</p>
                                        <button href='https://poke-appi-ana.netlify.app/'>{t('portfolio.btn1')}</button>
                                        <button href='https://github.com/Layeska/PokeAppi.git' target='_back'>{t('portfolio.btn2')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Portfolio