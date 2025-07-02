import React from 'react'
import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {
    
    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2',{
                type:'words'
        });

        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
                // scrub:true
            },
            ease:'power1.inOut',
        })

        timeline.from(titleSplit.words,{
            opacity:0,
            stagger:0.02,
            yPercent:100,
        }).from('#contact h3',{
            opacity:0,
            yPercent:100,
            stagger:0.02
        }).to('#f-left-leaf',{
            y:-100,
            duration:1,
            ease:'power1.inOut'
        }).to('#f-right-leaf',{
            y:100,
            duration:1,
            ease:'power1.inOut'
        },'<')
    },[])
    return (
        <footer id='contact'>
            <img src="/images/footer-right-leaf.png" id='f-right-leaf' alt="" />
            <img src="/images/footer-left-leaf.png" alt="" id='f-left-leaf' />

            <div className='content'>
                <h2>Where to find us</h2>

                <div>
                    <h3>Visit our Bar</h3>
                    <p>456 ,Raq Blvd , #404 , Los Angeles , CA 90210</p>
                </div>

                <div>
                    <h3>contact us </h3>
                    <p>555 987-6543</p>
                    <p>hello@gmail.com</p>
                </div>

                <div>
                    <h3>Open Everyday </h3>
                    {openingHours.map((time,i)=>(
                        <p key={i}>{time.day}: {time.time}</p>
                    ))}
                </div>

                <div>
                    <h3>
                        Socials
                    </h3>
                     <div className='flex-center gap-5'>
                        {socials.map((social)=>(
      <a href={social.url} key={social.name}>
        <img src={social.icon} alt="" /></a>
                        ))}
                     </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact