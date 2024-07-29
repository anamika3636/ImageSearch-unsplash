import React from 'react'
import Singleimage from './Singleimage'

const Images = ({images}) => {
    
  return images.map((img)=>(
    <Singleimage img={img}/>
  ))
}

export default Images