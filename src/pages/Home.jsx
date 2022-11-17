import AOS from 'aos'
import React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import 'aos/dist/aos.css'


const Home = () => {
    const [t] = useTranslation('global')

    useEffect(() => { AOS.init() })

    return (
        <div  className='containerHome'>
            <div className='information'>
                <div data-aos='fade-up' data-aos-easing='ease-out-cubic' data-aos-duration='1000' className='informationPrincipal'>
                    <p> {t('principal.I-am')} </p>
                   
                </div>
            </div>
        </div>
    )
}


export default Home