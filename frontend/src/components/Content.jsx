import React, { useEffect } from 'react'
import Cards from './Cards'
import Carousel from './Carousel'
const Content = ({category}) => {
  useEffect(()=>{
 
  },[category])
  return (
    <div>
        <Carousel/>
        <Cards category={category}/>
    </div>
  )
}

export default Content
