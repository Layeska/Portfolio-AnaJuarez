import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ChangeLang from './ChangeLang'

const Menu = () => {
    const [t] = useTranslation('global')

    return (
        <>
            <ChangeLang/>
            <div id='menuHamburger'>
                    <input type='checkbox' name='nav-btn' id='nav-btn'/>
                    <label htmlFor='nav-btn'></label>
                    <nav className='menuHamburger' id='menuH'> 
                        <ul>
                            <li> <Link to={'/'}> {t('header.home')} </Link> </li>
                            <li> <Link  to={'/about'}> {t('header.about-me')} </Link> </li>
                            <li> <Link to={'/skill'}> {t('header.skills')} </Link> </li>
                            <li> <Link to={'/portfolio'}> {t('header.portfolio')} </Link> </li>
                            <li> <Link to={'/contact'}> {t('header.contactMe')}  </Link> </li>
                        </ul>
                    </nav>
                </div>
        </>
    )
}


export default Menu