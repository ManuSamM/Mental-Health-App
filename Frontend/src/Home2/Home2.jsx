import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import { useState } from "react";
import './Home2.css'
function Home2() {
    const location = useLocation()
    const [appointments, setAppointments] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [disease, setDisease] = useState('');

    // Function to handle booking an appointment
    const bookAppointment = () => {
        if (!name || !date || !time || !disease) {
            alert('Please fill the form completely');
        }
        if (name && date && time && disease) {
            const newAppointment = {
                name,
                date,
                time,
                disease,
            };
            setAppointments([...appointments, newAppointment]);
            clearForm();
        }
    };

    // Function to clear the input form
    const clearForm = () => {
        setName('');
        setDate('');
        setTime('');
        setDisease('');
    };
    return (
        <div className="home2">
            <Navbar />
            <br /><br />
            <h1 className="home2head">Hello {location.state.id}, how can we assist you 🙂</h1>
            <br />
            <div className="App">
                <h1>Appointment Booking System</h1>
                <br />
                <form className="home2form">
                    <div className="label1">
                        <label>Disease:</label>
                        <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} required />
                    </div>
                    <br />
                    <div className="label1">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <br />
                    <div className="label1">
                        <label>Date:</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <br />
                    <div className="label1">
                        <label>Time:</label>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                    </div>
                    <br />
                    <button type="button" id="bottonhome2" onClick={bookAppointment}>Book Appointment</button>
                </form>
                <br />
                <h2>Booked Appointments</h2>
                <br />
                <ul className="ulhome2">
                    {appointments.map((appointment, index) => (
                        <>
                            <li key={index}>
                                {appointment.disease} - {appointment.name} - Date: {appointment.date}, Time: {appointment.time} <br />
                            </li>
                        </>
                    ))}
                </ul>
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default Home2