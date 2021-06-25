import React from 'react'

const imageMain = require('../assets/images/download.png').default
const image2 = require('../assets/images/images.jpg').default

const Compare = () => {
  return (
    <div>
      <img src={imageMain} alt='main'></img>
      <img src={image2} alt='second'></img>
    </div>
  )
}

export default Compare
