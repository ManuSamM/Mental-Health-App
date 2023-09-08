import Navbar from '../Navbar/Navbar'
import './AppointmentSignup.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from "react"
import Footer from '../Footer/Footer'
function AppointmentSignup() {
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {

            await axios.post("http://localhost:3000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/home2", { state: { id: email } })
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
            <div className="signup">
                <div className="header">
                    <h1>Signup</h1>
                    <div className="underline"></div>
                </div>


                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <input type="submit" onClick={submit} />

                </form>
                <br />
                <p className='p'>OR</p>
                <br />
                <Link to="http://localhost:5173/appointment/login" id='link'>Login Page</Link>
            </div>
            <Footer />
        </>
    )
}

export default AppointmentSignup;