import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './AboutUs.css'
import manu from './manu.jpg'
function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="aboutus">
                <br />
                <img src={manu} className='manujpg' height={360} />
                <br /><br/>
                <ul className='aboutusul'>
                    <li>
                        Name: Manu Sam Mathew
                    </li>
                    <br />
                    <li>
                        Address: 4/287 U.I.T. Bhiwadi Rajasthan
                    </li>
                    <br />
                    <li>
                        Btech CSE 3rd year
                    </li>
                    <br />
                </ul>
                <p className='whoarewe'>
                    <b>Who are we</b>
                    <br />
                    Welcome to mental health app - Your Trusted Source for Mental Health Awareness and Support.
                    We are passionate about mental health and committed to breaking down
                    the stigma surrounding it. We believe that mental well-being is just as important as physical
                    health, and our mission is to provide you with the knowledge, resources, and support needed
                    to lead a happier, healthier life.
                </p>
                <br /><br />
                <p className='vision'>
                    <b>Our Vision</b>
                    <br/>
                    We envision a world where mental health is regarded with the same importance as physical
                    health. A world where conversations about mental health are open, destigmatized, and readily
                    accessible. Through our website, we strive to create a space where individuals can seek guidance,
                    find inspiration, and connect with others who share similar experiences
                </p>
            </div>
            <Footer />
        </>

    )
}
export default AboutUs