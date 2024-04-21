import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Appointment.css'
function Appointment() {
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        history("/home2", { state: { id: email } })
                    }
                    else if (res.data == "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <Navbar />
            <div className="login">
                <div className="header">
                    <h1>Login</h1>
                    <div className="underline"></div>
                </div>
                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <input type="submit" id="submit" onClick={submit} />
                </form>
                <br />
                <p className="p">OR</p>
                <br />
                <Link to="http://localhost:5173/appointment/signup" id="link">Signup Page</Link>
                <br/>
            </div>
            <Footer/>
        </>
    )
}
export default Appointment