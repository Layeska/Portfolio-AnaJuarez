import AOS from 'aos'
import React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import TypeWriterEffect from 'react-typewriter-effect'
import 'aos/dist/aos.css'


const Home = () => {
    const [t] = useTranslation('global')

    useEffect(() => { AOS.init() })

    return (
        <div  className='containerHome'>
            <div className='information'>
                <div data-aos='fade-up' data-aos-easing='ease-out-cubic' data-aos-duration='1000' className='informationPrincipal'>
                    <p> {t('principal.I-am')} </p>
                    <TypeWriterEffect startDelay={1000} cursorColor='#3F3D56'
                    multiText={[ 'Ana Juárez!', 'Developer!', 'Front End!']}
                    multiTextDelay={2000} typeSpeed={40}/>
                </div>
            </div>
        </div>
    )
}


export default Home