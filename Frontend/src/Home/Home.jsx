import './Home.css'
import mentalhealth from './mentalhealth.jpg'
import Diseases from '../Diseases/Diseases'
import Message from '../Message/Message'
import Doctors from '../Doctors/Doctors'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar.jsx'

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