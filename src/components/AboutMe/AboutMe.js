import profileImg from './PagWebBio.png'
import './AboutMe-style.scss'


const AboutMe = () =>{
    return (
        <section className='wrapperAboutMe'>
            <article className='wrapperBio'>
                <p className='bioMoreko'>
                Mi nombre es Juan Moreno (Moreko) y trabajo con música hace 10 años. Me recibí de productor musical y técnico de sonido en vivo en el año 2011 en el instituto CEARTEC, Buenos Aires. Desde esa época me especializo en Sonido en Vivo, realizando shows con los principales artistas y en los teatros más importantes de la ciudad. Trabajé como operador de P.A y Monitoreo en Café Vinilo, La Usina del Arte, Santos Dumont 4040, teatro Caras y Caretas, y en los festivales internacionales de Jazz y Tango del Gobierno de la Ciudad de Buenos Aires. Actualmente trabajo con el grupo Aca Seca Trío y el show a dúo de Juan Quintero/Luis Pescetti.
                </p>
                <p className='bioMoreko'>
                Además, trabajé como Técnico de grabación y Mezcla en distintos estudios de grabación y salas, entre ellos Panacea Estudio, ubicado en el barrio de Palermo. 
                </p>
                <p className='bioMoreko'>
                Como músico, estudié principalmente percusión (congas, bongo, djembe) e improvisación con señas con Santiago Vázquez. Cursé 2 años de Clarinete en el Conservatorio Superior Manuel de Falla, y también realicé estudios particulares de Guitarra, Piano, y Saxo.

                También soy DJ y me especializo en distintos géneros de música bailable que abarcan el groove, hip hop, disco, y house.
                </p>
            </article>
            <img className='profileImg' src={profileImg}/>
        </section>
    )
}

export default AboutMe