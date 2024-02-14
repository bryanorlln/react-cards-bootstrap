import React from 'react'


export default function Card({title, imageSource, url}) {
  return (
    <div className='card text-center bg-dark'>
      
      <div className='overflow'>
        <img src={imageSource} alt='' className='card-img-top'/>
      </div>

      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>Duis cillum pariatur sint sunt proident minim anim tempor sunt incididunt elit non esse elit. Nostrud commodo reprehenderit ea irure nisi duis ut proident irure veniam. Ut cillum et consequat ea ad nulla nisi eiusmod officia commodo nostrud elit consequat exercitation.</p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target={'_blank'}>Go to this website </a>
      </div>
      
    </div>
  )
}
