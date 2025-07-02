import React, { useRef, useState } from 'react'
import { sliderLists } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
const contentRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(()=>{
    gsap.fromTo('#title',{
      opacity:0},{opacity:1 , duration:1}
    )

    gsap.fromTo('.cocktail img',{
      opacity:0,
      xPercent:-100,
    },{
      opacity:1,
      xPercent:0,
      duration:1,
      ease:'power1.inOut'
    })

    gsap.fromTo('.details h2',{yPercent:100 ,opacity:0},{
      yPercent:0,
      opacity:1,
      // duration:1,
      ease:'power1.inOut'
    })
     gsap.fromTo('.details p',{yPercent:100 ,opacity:0},{
      yPercent:0,
      opacity:1,
      delay:0.2,
      // duration:1,
      ease:'power1.inOut'
    })
  },[currentIndex])
  const totalcocktails = sliderLists.length;

  const gotoSlide = (index) => {
    const newIndex = (index + totalcocktails) % totalcocktails;
    setCurrentIndex(newIndex);
  }

  const getcocktailAt = (indexOffset) => {
  return sliderLists[(currentIndex + indexOffset + totalcocktails) % totalcocktails];
  }

  const currentcocktail = getcocktailAt(0);
  const prevCocktail = getcocktailAt(-1);
  const nextCocktail = getcocktailAt(+1)
  return (
    <section id='menu' aria-labelledby='menu-heading'>
      <img src="/images/slider-left-leaf.png" alt="leaft-leave" id='m-left-leaf'/>
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>

<h2 id='menu-heading' className='sr-only'>
  Cocktail menu
</h2>
      <nav className='cocktail-tabs' aria-label='Cocktail Navigtion'>
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return(
            <button key={cocktail.id} onClick={()=>gotoSlide(index)} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'} cocktail-tab`}>
              {cocktail.name}
            </button>
          )
        }) }

      </nav>

      <div className='content'>
        <div className='arrows'>
        <button className='text-left' onClick={() => gotoSlide(currentIndex - 1)}>
          <span>{prevCocktail.name}</span>
          <img src="/images/right-arrow.png" alt="Previous" />
        </button>
        <button className='text-right' onClick={() => gotoSlide(currentIndex + 1)}> 
          <span>{nextCocktail.name}</span>
          <img src="/images/left-arrow.png" alt="Next" />
        </button>
        </div>

        <div className='cocktail'>
          <img src={currentcocktail.image} className='object-contain' alt="" />
          
        </div>

        <div className='recipe'>
          <div ref={contentRef} className='info'>
            <p>Recipe for:</p>
            <p id='title'>
              {currentcocktail.name}
            </p>
          </div>
<div className='details'>
        <h2>{currentcocktail.title}</h2>
        <p>{currentcocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu