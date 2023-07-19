import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Button({ text }) {
  return (
    <button className='buttons' onClick={() => { alert('Button clicked') }}><b>{text}</b></button>
  )
}

function Navbar() {
  return (
    <div className='navbar'>
      <Button text={'Home'} />
      <Button text={'About'} />
      <Button text={'Contact'} />
    </div>
  )
}

function InputItem() {

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
}

//App to be exported
function App() {
  return (
    <>
      <Navbar />
      <InputItem />
    </>
  )
}

export default App