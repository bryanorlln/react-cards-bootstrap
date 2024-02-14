import React from 'react'
import Card from './Card'
import './Cards.css'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards =[
    {
        id: 1,
        title: 'Facebook',
        image: image1,
        url: 'https://es-la.facebook.com/'
    },
    {
        id:2,
        title: 'Twitter X',
        image: image2,
        url: 'https://twitter.com/'
    },
    {
        id: 3,
        title: 'Youtube',
        image: image3,
        url: 'https://www.youtube.com/'
    }
    
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} imageSource={card.image} url={card.url}/>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default Cards
