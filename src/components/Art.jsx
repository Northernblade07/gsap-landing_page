import React from 'react'
import { featureLists, goodLists } from '../constants'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Art = () => {

    const isMobile = useMediaQuery({maxWidth:767});

    useGSAP(()=>{
            const start = isMobile ? 'top 20%' : 'top top';
            // const end = isMobile ? '120% top' : 'bottom center';   
            const maskedTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#art',
                    start: start,
                    end: 'bottom center',
                    scrub: 1.5,
                    pin: true,
                }
            });

            maskedTimeline.to('.will-fade', {
                yPercent: -100,
                opacity: 0,
                ease: 'power1.inOut',
                stagger: 0.2,

                duration: 1,
            }).to('.masked-img', {
                scale: 1.3,
                maskPosition:'center',
                maskSize:'400%',
                duration: 1,
                ease: 'power1.inOut',
            }).to('#masked-content', {
                opacity: 1,
                ease: 'power1.inOut',
                duration:1,
            });
        },[])
  return (
    <div id='art'>
        <div className='container mx-auto h-full pt-20'>
            <h2 className='will-fade'>
                The Art
            </h2>
            <div className='content'>
                <ul className='space-y-4 will-fade'>
                    {goodLists.map((feature,index) => (  <li key={index} className='flex items-center gap-2'>
                        <img src="/images/check.png" alt="" />
                        <p>{feature}</p>
                        </li>
                    ))}
                </ul>

                <div className='cocktail-img'>
                    <img src="/images/under-img.jpg" alt="" 
                     className='abs-center masked-img size-full object-contain'/>
                </div>

                 <ul className='space-y-5 will-fade'>
                    {featureLists.map((feature,index) => (  <li key={index} className='flex justify-start items-center gap-2'>
                        <img src="/images/check.png" alt="" />
                        <p className='md:w-fit w-60'>{feature}</p>
                        </li>))}
                </ul>
            </div>
            <div className='masked-container'>
                <h2 className='will-fade'>
                    Sip worthy perfection
                </h2>
                <div id='masked-content'>
                    <h3 >
                        Made with Craft , Poured with passion
                    </h3>
                    <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
		

                </div>
            </div>
        </div>
    </div>
  )
}

export default Art