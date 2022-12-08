import React from 'react'
import { useTranslation } from 'react-i18next'

import '../styles/AboutMe.css'

const AboutMe = () => {
    const [t] = useTranslation('global')

    return (
    <>
        <div className='containerAbout' >
            <div className='informationGeneral'>
                <div className='item-a' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='2000'>
                    <span className='square'>Personal</span>
                    <div>
                        <h2> {t('about.title')} </h2>
                        <p> {t('about.who1')} </p>
                        <p> {t('about.who2')} </p>
                        <p> {t('about.who3')} </p>
                    </div>
                </div>
                <div className='item-b' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='2000'>
                    <div>
                        <h2>{t('about.title2')}</h2>
                        <ul>
                            <li> {t('about.description1')} </li>
                            <li> {t('about.description2')} </li>
                            <li> {t('about.description3')} </li>
                            <li> {t('about.description4')} </li>
                        </ul>
                        <h2>{t('about.title3')}</h2>
                        <ul>
                            <li> {t('about.hobby1')} </li>
                            <li> {t('about.hobby2')} </li>
                            <li> {t('about.hobby3')} </li>
                        </ul>
                    </div>
                </div>
                <div className='item-c' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='2000'>
                    <span className='square'>Personal</span>
                    <div>
                        <h2> {t('about.title4')} </h2>
                        <p> {t('about.edu1')} </p>
                        <ul>
                            <li> {t('about.ed1')} </li>
                            <li> {t('about.ed2')} </li>
                            <li> {t('about.ed3')} </li>
                            <li> {t('about.ed4')} </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <h2 className='title'> {t('about.education')} </h2>
        
        <div className='banner' data-aos='fade-right' data-aos-duration='2000'>
            <ul>
                <li><img  src='https://i.postimg.cc/8cKXXzM0/6fc21920-34a8-4912-bfa3-5bf76023b3bb-removebg-preview.png' alt='UPOLI' /></li>
                <li><img src='https://i.postimg.cc/G9nTCkF8/google-removebg-preview.png' alt='Google Activate' /></li>
                <li><img src='https://i.postimg.cc/zXLyfD0D/akademus.png' alt='Akademus' /></li>
                <li><img src='https://i.postimg.cc/85j7r1Nb/universidad-de-ingenieria-02.png' alt='UNI' /></li>
                <li><img src='https://i.postimg.cc/GmTjFQ2Y/academlo-removebg-preview.png' alt='Academlo' /></li>
                <li><img src='https://i.postimg.cc/9XNQ73nx/descarga-removebg-preview.png' alt='INATEC' /></li>
                <li><img src='https://i.postimg.cc/qRm0dnKJ/linkelnpng.png' alt='Linkedln' /></li>
                <li><img src='https://i.postimg.cc/MTVwnTvR/default-meta-image-v2-removebg-preview.png' alt='Udemy' /></li>
                <li><img src='https://i.postimg.cc/yxgNwNWb/htc.png' alt='HTC'/></li>
            </ul>
        </div>

        <div className='Container-Time'>
            <div className='timeLine'>
                <ul>
                    <li>
                        <div className='contentLine' data-aos='fade-right' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1JbzCWz3cOpEW7mUxbQ1XXYZOwYDgfvv_/view?usp=sharing' target='_blank'>{t('about.course1')}</a></h3>
                            <p>{t('about.school1')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date1')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-left' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1JFTs2uQL1rhSzsYJyDShl_jDmHLOYYws/view?usp=sharing' target='_blank'>{t('about.course2')}</a></h3>
                            <p>{t('about.school2')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date2')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-left' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1h8dRwnVsHvtLUF31OuAeoOD6TydmmXU3/view?usp=sharing' target='_blank'>{t('about.course3')}</a></h3>
                            <p>{t('about.school3')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date3')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-right' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1Dx_roqCgEMuUGR2LGuLYbukyGJhRTHrx/view?usp=sharing' target='_blank'>{t('about.course4')}</a></h3>
                            <p>{t('about.school4')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date4')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-right' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1KbYArL1v123yKXN62HYFRwaOKF0naE4h/view?usp=sharing' target='_blank'>{t('about.course5')}</a></h3>
                            <p>{t('about.school5')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date5')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-left' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1yuVg0XQYC1NUPfhtAbFNcPwxC4TBNQQV/view?usp=sharing' target='_blank'>{t('about.course6')}</a></h3>
                            <p>{t('about.school6')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date6')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-right' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1pIMNjcaiCnWrEOL_0vUtqevwCHfnoV5o/view?usp=sharing' target='_blank'>{t('about.course7')}</a></h3>
                            <p>{t('about.school7')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date7')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-left' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/13VplnkYvmHfyZ56pBJ3a8F4Y1Cl0iOyR/view?usp=sharing'>{t('about.course8')}</a></h3>
                            <p>{t('about.school8')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date8')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-right' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/16AoYC8Nujg97XSNRVgjkDl_LIOx84Ks_/view?usp=sharing' target='_blank'>{t('about.course9')}</a></h3>
                            <p>{t('about.school9')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date9')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-left' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1KBLjPt-gZxH541jSCfes2Iy-AUgnnJeq/view?usp=sharing' target='_blank'>{t('about.course10')}</a></h3>
                            <p>{t('about.school10')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date10')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-right' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1YwAaQL41ZrcscC3ZkyTRUB_VJPkwBtUd/view?usp=sharing' target='_blank'>{t('about.course11')}</a></h3>
                            <p>{t('about.school11')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date11')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-left' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1nRn_Rh8NnISI-ScSvpQZ_gw0RBwSLitw/view?usp=sharing' target='_blank'>{t('about.course12')}</a></h3>
                            <p>{t('about.school12')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date12')}</h4> </div>
                    </li>
                    <li>
                        <div className='contentLine' data-aos='fade-right' data-aos-duration='2000'>
                            <h3><a href='https://drive.google.com/file/d/1gWKRo7g4_OW3IF8QwyTed07-qpJxkQH7/view?usp=sharing' target='_blank'>{t('about.course13')}</a></h3>
                            <p>{t('about.school13')}</p>
                        </div>
                        <div className='line'> <h4>{t('about.date13')}</h4> </div>
                    </li>
                    <div className='stylesAbout'></div>
                </ul>
            </div>
        </div>
    </>
    )
}

export default AboutMe