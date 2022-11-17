import AOS from 'aos'
import React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import TypeWriter from 'typewriter-effect'
import 'aos/dist/aos.css'


const Home = () => {
    const [t] = useTranslation('global')

    useEffect(() => { AOS.init() })

    return (
        <div  className='containerHome'>
            <div className='information'>
                <div data-aos='fade-up' data-aos-easing='ease-out-cubic' data-aos-duration='1000' className='informationPrincipal'>
                    <p> {t('principal.I-am')} </p>
                    <TypeWriter options={{
                        strings: ['Ana Juárez!', 'Developer!', 'Front End!'],
                        autoStart: true,
                        loop: true
                    }} />
                </div>
                <div className='informationDown' data-aos='fade-up' data-aos-easing='ease-out-cubic' data-aos-duration='1000'>
                    <p className='paragraph'><i>{t('principal.introduction')}</i></p>
                </div>
                <div className='buttons' data-aos='fade-up' data-aos-easing='ease-out-cubic' data-aos-duration='1000'>
                    <button className='btn-contact'>
                        <a href={'https://drive.google.com/file/d/1IasnC9b-JPKlg0vx92z4thZ4oaHY3Ck5/view?usp=share_link'} target="_blank" rel="noopener noreferrer"> 
                        <span>{t('principal.bt-download')}</span></a>
                    </button>
                    <button className='btn-contact'>
                        <a href='mailto:lisa13suarez@gmail.com?Subject=Interesado%20en%20mi%20CV%20de%20Portafolio%20' target='_blank'>
                        <span>{t('principal.bt-contact')}</span></a></button>
                </div>
            </div>
            <div className='imageHome' >
                <img src='https://i.postimg.cc/SKk2PsL1/6199075-3156811-removebg-preview.png' alt='image'/>
            </div>
        </div>
    )
}


export default Home