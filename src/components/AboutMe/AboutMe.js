import './AboutMe-style.scss'


const AboutMe = () =>{
    return (
        <section className='wrapperAboutMe'>
            <article className='wrapperBio'>
                <p className='bioMoreko'>
                Mi nombre es Juan Moreno (Moreko) y trabajo con música hace 10 años. Me recibí de productor musical y técnico de sonido en vivo en el año 2016 en el instituto CEARTEC, Buenos Aires. Desde que comencé con mis estudios en 2011 me especializo en Sonido en Vivo, realizando shows con los principales artistas y en los teatros más importantes del país. Trabajé como operador de P.A. y Monitoreo en La Usina del Arte, Café Vinilo, Santos Dumont 4040, teatro Caras y Caretas, y en los festivales internacionales de Jazz y Tango del Gobierno de la Ciudad de Buenos Aires. Actualmente trabajo con el grupo Aca Seca Trío y el show a dúo de Juan Quintero/Luis Pescetti.
                </p>
                <p className='bioMoreko'>
                Mi trabajo principal hoy en día es componer música para publicidades, canales de youtube, aplicaciones, y podcasts. También realizo diseño sonoro para audiovisuales en general. Además, trabajé como Técnico de grabación y Mezcla en distintos estudios de grabación y salas de Buenos Aires, entre ellos Panacea Estudio, ubicado en el barrio de Palermo. 
                </p>
                <p className='bioMoreko'>
                Como músico, estudié durante muchos años percusión (congas, bongo, djembe, y candombe) e improvisación con señas con Santiago Vázquez. Estudié Clarinete en el Conservatorio Superior Manuel de Falla, y realicé estudios particulares de Guitarra, Piano, Saxo y armonia.
                </p>
                <p className='bioMoreko'>
                También soy DJ y me especializo en distintos géneros de música bailable que abarcan el groove, disco, y house.
                </p>
            </article>
            {/* <img className='profileImg' alt='profileMoreko' src={profileImg}/> */}
        </section>
    )
}

export default AboutMe