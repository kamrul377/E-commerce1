import React from 'react'
import Button from '../components/Button'
import { Skeleton } from '@mui/material'

const Contact = () => {
  return (
    <section className='overflow-x-hidden'>

      <div className='w-[95%] sm:w-[80%] mx-auto'>

        <div className="map mt-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5839665861745!2d91.80895647587558!3d22.369332540388633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8f5243a983d%3A0x867de1c2f217eeb!2sChattogram%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1687761039004!5m2!1sen!2sbd"
            className='rounded shadow w-full'
            width="100%"
            height="400"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">

          </iframe>
          {/* <Skeleton variant="rectangular" width="100%" height={400} /> */}
        </div>

        <div className="contact-form  mt-10 image bg-[url('/images/blackPatterns.png')] bg-fixed bg-repeat-round">
          <form action="https://formspree.io/f/mrgwzpak" method='post' className='flex flex-col sm:w-[400px] w-[350px] mx-auto py-10 gap-4'>


            <input className='bg-slate-200 border-[1px] focus:outline-none border-indigo-200 focus:border-indigo-600 p-2 text-slate-700 rounded shadow-sm hover:border-indigo-400 w-full' type="text" name='username' placeholder='Username: ' autoComplete='off' required />


            <input className='bg-slate-200 border-[1px] focus:outline-none border-indigo-200 focus:border-indigo-600 p-2 text-slate-700 rounded shadow-sm hover:border-indigo-400 w-full' type="email" name='username' placeholder='Email: ' autoComplete='off' required />

            <textarea className='bg-slate-200 border-[1px] focus:outline-none border-indigo-200 focus:border-indigo-600 p-2 text-slate-700 rounded shadow-sm hover:border-indigo-400 w-full' name="details" rows="10" placeholder='Description..' required>

            </textarea>

            <Button> Submit </Button>

          </form>
        </div>

      </div>

    </section>
  )
}

export default Contact