import React,  { useEffect, useState } from 'react'

const ChangeTheme = () => {
    const [isChecked, setIsChecked] = useState(localStorage.getItem('theme') === 'dark' ? true : false)
    const [iconDark, setIconDark] = useState(false)

    const toggleThemeChange = () => {
        if(isChecked === false) {
            localStorage.setItem('theme', 'dark')
            setIsChecked(true)
            setIconDark(true)
        } else {
            localStorage.setItem('theme','light')
            setIsChecked(false)
            setIconDark(false)
        }
    }

    useEffect(() => {
        document.getElementsByTagName('HTML')[0].setAttribute('data-theme', localStorage.getItem('theme'))
    }, [isChecked])

    return (
        <div className='divToggle'>
            <button title='change theme' className='btn-ChangeTheme' onClick={() => toggleThemeChange()}>
                {iconDark ? <i className='fa-regular fa-sun'></i> : <i className="fa-solid fa-sun"></i>}
            </button>
        </div>
    )
}

export default ChangeTheme