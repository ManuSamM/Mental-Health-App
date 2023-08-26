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
      <a href='http://localhost:5173/output'>
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



/*function InputItem() {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: inputValue
    }
    setInputValue('');
    const res = await axios.post("http://localhost:3000/post-data", data);

    if (res.status === 200) {
      console.log("User created successfully!");
    } else {
      console.log("Error creating user: ", res.status);
    }

  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='labelTag'> <b>Item name:</b> &nbsp;&nbsp;
          <input type="text" id="item" name="item" value={inputValue}
            className='inputTag' onChange={handleChange} /> &nbsp;&nbsp;
          <input type='submit' id='item' name='item'
            className='submitTag' />
        </label>
      </form>
    </>
  )
}*/

//App to be exported
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