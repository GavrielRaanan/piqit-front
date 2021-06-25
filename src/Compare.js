import React from 'react'

const imageMain = require('./download.png').default
const image2 = require('./images.jpg').default

const Compare = () => {
  return (
    <div>
      <img src={imageMain} alt='main'></img>
      <img src={image2} alt='second'></img>
    </div>
  )
}

export default Compare
