import React from 'react'

import './Mimusica.scss'
import original from '../../assets/originalsq.jpg'
import anestesiados from '../../assets/Anestesiados.jpg'
import beatz from '../../assets/Tapabeatz.png'


const Mimusica = ()=>{


    const theworks =[ {
                        title:'Original SQ',
                        year:'2021',
                        describe: 'Un gran disco',
                        estilo: 'Pop',
                        img: original,
                        site: "https://original.com"
                         },
                    {
                        title:'Anestesiados',
                        year:'2020',
                        describe:'boxr',
                        stack: 'Node js, React, MySQL, Sequelize',
                        img: anestesiados,
                        site: "https://herokuapp.com"
                },
                    {
                        title:'Beatz',
                        year:'2020',
                        describe:'boxr',
                        stack: 'Node js, React, MySQL, Sequelize',
                        img: beatz,
                        site: "https://herokuapp.com"
                }
                ]


    return(
        <div className='wrapper--works'  id='works'>
                {theworks.map((work, index) =>{
                
                    return(

                    <article key={index+'work'} id={'work'+index} className='work'>
                        <a to={{ pathname: work.site }} target="_blank">
                        <img src={work.img} className='circle--img' alt='img'/>
                        </a>
                        <section className='text'>
                        <p className='title--proy'>{work.title}</p>
                        <p className='title--year'>{work.year}</p>
                        <p className='title--desc'>{work.describe}</p>
                        </section>
                    

                    </article>

                    )
                })}
        </div>
    )
}

export default Mimusica