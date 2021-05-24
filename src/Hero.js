import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context';
const Hero = () => {
  const {closeSubMenu} = useGlobalContext();
  return <section className="hero">
    <div className="hero-center">
      <article className="hero-info">
        <h1>Payments infrastructure for the internet</h1> 
        <p>
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
          lorem ipsum dolor sit amet, consectetur adip
        </p>
      </article>
      <article className="hero-images">
        <img src={phoneImg} alt="phone-img" className="phone-img"/>
      </article>
    </div>
  </section>
}

export default Hero
