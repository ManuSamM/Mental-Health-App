import './Home.css'
import mentalhealth from './mentalhealth.jpg'
import mentalhealthlogo from './mentalhealthlogo.jpg'
import Diseases from '../Diseases/Diseases'
import Message from '../Message/Message'
import Doctors from '../Doctors/Doctors'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Button({ text }) {
  return (
    <button className='buttons' onClick={() => { if (text === 'Home') alert('Button clicked') }}>
      <b>{text}</b>
    </button>
  )
}

function Navbar() {
  return (
    <div className='navbar'>
      <img src={mentalhealthlogo} height={67} />
      <Button text={'Home'} />
      <Button text={'About Us'} />
      <a href='http://localhost:5173/articles'>
        <Button text={'Articles'} />
      </a>
      <a href='http://localhost:5173/appointment'>
        <Button text={'Appointment'} />
      </a>
    </div>
  )
}
function Intro() {
  return (
    <div class='image-container'>
      <br /><br />
      <img src={mentalhealth} height={400} id='mentalhealth' alt='mentalhealth' />
      <p id='intromessage'><br /><br /><br /><br /><br />
        <b>
          "Taking care of your mental health is not a sign of weakness;<br />
          it's a testament to your strength and resilience. Just as you<br />
          would care for your body, nourish your mind with kindness, self-compassion, <br /> and the support you deserve"
        </b>
      </p>
    </div>
  )
}
function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <br /><br /><br /><br /><br /><br /><br />
      <Diseases />
      <br />
      <Message />
      <br />
      <Doctors />
      <Footer />
    </>
  )
}

export default Home