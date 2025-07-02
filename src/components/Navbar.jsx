import React from 'react'
import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: "nav",
                start: "bottom top",
            }
        })  
        navTween.fromTo("nav",{
            backgroundColor: "transparent"},{ backgroundColor: "#00000050",
                backgroundFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut",
                y:8
            })

      },[])
  return (
    <nav >
        <div >
            <a href="#home" className="flex items-center text-2xl gap-2  ">
                <img src="/images/logo.png" alt="" />
                <p>Velvet Pour</p>
            </a>

            <ul>
                {navLinks.map((link) => (
                    <li key={link.id} className="text-lg">
                        <a href={`#${link.id}`} className="block py-2 px-4 hover:text-gray-300 active:underline">
                            {link.title}
                        </a>    
                    </li>
                ))}
            </ul>
        </div>
    </nav>

  )
}

export default Navbar