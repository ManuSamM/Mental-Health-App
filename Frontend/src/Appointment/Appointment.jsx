import axios from "axios"
import { useEffect, useState } from "react"
import email from './email.png'
import password from './password.png'
import person from './person.png'
import mentalhealthlogo from '../Home/mentalhealthlogo.jpg'
import { useNavigate, Link } from 'react-router-dom'
import './Appointment.css'
function Button({ text }) {
  return (
    <button className='buttons'><b>{text}</b></button>
  )
}
function Output() {
  const [action, setAction] = useState("Login");
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
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={person} alt="" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input">
            <img src={email} alt="" />
            <input type="email" placeholder="Email Id" />
          </div>
          <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>
            Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>
            Login</div>
        </div>
      </div>
    </>
  )
}
export default Output