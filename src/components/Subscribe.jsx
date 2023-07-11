import React from 'react'
import emailicon from "../images/email.png"

const Subscribe = () => {
  return (
    <section id='mainsection' className=' bg-slate-200 container mx-auto my-10'>
        <div className=' z-10 sm:flex items-center justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-32  p-14'>
           <div className=' text-center mb-10 sm:mb-0 sm:border-r-2 border-gray-500 sm:pr-28'>
            <h2> Newsletter Subscription</h2>
            <p>Get subscription to our newsletter & recieve latest news Updates </p>
           </div>

           <div className=' flex justify-center items-center gap-3 '>
            <input className='p-2 rounded-lg' type="email" placeholder=' Your E-mail' />
            <button className=' rounded-lg text-white bg-blue-600 p-2'>Subscribe</button>
           </div>
           
        </div>
    </section>
  )
}

export default Subscribe