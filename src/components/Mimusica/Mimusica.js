import React from 'react'

import './Mimusica.scss'


const Mimusica = ()=>{


    const theworks =[ {
                        title:'Original SQ',
                        year:'2021',
                        describe: 'Un gran disco',
                        estilo: 'Pop',
                        site: "https://open.spotify.com/embed/track/1CEEsUrcplfYapCR8FRtW8"
                         },
                    {
                        title:'Anestesiados',
                        year:'2020',
                        describe:'boxr',
                        site: "https://open.spotify.com/embed/track/0LdQ1Mu3V4qx96xxMGfdmN"
                },
                    {
                        title:'Glosa',
                        year:'2020',
                        describe:'boxr',
                        site: "https://open.spotify.com/embed/track/7C1BA9hv7eD105mPaCHQpF"
                }
                ]


    return(
        <div className='wrapper--works'  id='works'>
                {theworks.map((work, index) =>{


                    return(
                        
                        <iframe key={index} src={work.site} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    // <article key={index+'work'} id={'work'+index} className='work'>
                    //     <a href={work.site} target="_blank">
                    //     <img src={work.img} className='circle--img' alt='img'/>
                    //     </a>
                    //     <section className='text'>
                    //     <p className='title--proy'>{work.title}</p>
                    //     <p className='title--year'>{work.year}</p>
                    //     <p className='title--desc'>{work.describe}</p>
                    //     </section>
            

                    // </article>

                    )
                })}
        </div>
    )
}

export default Mimusica