import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
function Home2() {
    const location = useLocation()

    return (
        <>
            <Navbar />
            <div className="homepage">

                <h1>Hello {location.state.id} and welcome to the home</h1>

            </div>
        </>
    )
}

export default Home2