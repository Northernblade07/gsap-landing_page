import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='bg-black text-white flex-center h-screen' >
      <h1>gsap </h1>
        hello 
        </div>
  )
}

export default App