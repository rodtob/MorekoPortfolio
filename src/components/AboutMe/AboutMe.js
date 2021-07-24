import './AboutMe-style.scss'
import {useTranslation} from 'react-i18next'

const AboutMe = () =>{
    const[t] = useTranslation("global")
    return (
        <section className='wrapperAboutMe'>
            <article className='wrapperBio'>
                <p className='bioMoreko'>
                    {t("aboutMe.parOne")}
                </p>
                <p className='bioMoreko'>
                    {t("aboutMe.parTwo")}
                </p>
                <p className='bioMoreko'>
                    {t("aboutMe.parThree")}
                </p>
                <p className='bioMoreko'>
                    {t("aboutMe.parFour")}
                </p>
            </article>
            {/* <img className='profileImg' alt='profileMoreko' src={profileImg}/> */}
        </section>
    )
}

export default AboutMe