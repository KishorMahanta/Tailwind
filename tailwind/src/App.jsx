import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  

  return (
    <>
    <h1 className='bg-yellow-500 text-black p-4 rounded-xl'>realityeducation</h1>
    
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800" >
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
   src="img.jpg"  alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
      I am MrX, also known as Kishor, a skilled software freelancer based in Keonjhar, India. 
      I bring my expertise and passion for coding to deliver high-quality software solutions to clients worldwide.
      I am currently available for new freelance projects. Let's discuss your requirements and 
      see how I can help you bring your software vision to life.
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-red-500 dark:text-sky-400">
       Dark-Side-Coder
      </div>
      <div class="text-slate-700 dark:text-slate-500">
      Indian Software Freelancer
      </div>
    </figcaption>
  </div>
</figure>



    
    </>
  )
}

export default App
