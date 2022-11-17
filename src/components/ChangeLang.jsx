import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

const ChangeLang = () => {
    const [t, i18n] = useTranslation('global')
    const [lang, setIsLang] = useState(false)

    const changeIdiom = (lang) => {
        setIsLang(lang)

        const valueLangEs = 'es'
        const valueLangEn = 'en'

        if(lang) {
            return i18n.changeLanguage(valueLangEn)
        } else {
            return i18n.changeLanguage(valueLangEs)
        }
    }

    return (
        <button className='btnIdiom' onClick={() => changeIdiom(!lang)}>
            <img title='Change Idiom' className='language' src='https://i.postimg.cc/DZ34795j/globe.png' alt='translate'/> 
        </button>
    )
}


export default ChangeLang