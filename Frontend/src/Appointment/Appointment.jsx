import axios from "axios"
import { useEffect, useState } from "react"
import mentalhealthlogo from '../Home/mentalhealthlogo.jpg'
function Button({ text }) {
  return (
    <button className='buttons'><b>{text}</b></button>
  )
}
function Output() {
  return (
    <>
      <div className='navbar'>
      <img src={mentalhealthlogo} height={67} />
        <a href='http://localhost:5173'>
          <Button text={'Home'} />
        </a>
        <Button text={'About Us'} />
        <a href="http://localhost:5173/articles">
          <Button text={'Articles'} />
        </a>
        <Button text={'Appointment'} />
      </div>
    </>
  )
}
export default Output