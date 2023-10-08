import React from 'react'
import NavB from './components/NavB'
import FrontPhoto from './FrontPhoto.webp'


const Home = () => {
  return (
    <div>
      <NavB />
      <div className='image'>
        <img src={FrontPhoto} alt='FrontPhoto'></img>

      </div>
    </div>

    
  )
}

export default Home
