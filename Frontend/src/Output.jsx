import axios from "axios"
import { useEffect, useState } from "react"

function Button({ text }) {
  return (
    <button className='buttons' onClick={() => { if (text === 'Output') alert('Button clicked') }}><b>{text}</b></button>
  )
}


function Output() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/get-data').then((res) => {
      setItems(res.data.items);
    });
  }, []);

  return (
    <>
      <div className='navbar'>
        <a href='http://localhost:5173'>
          <Button text={'Home'} />
        </a>
        <Button text={'Output'} />
      </div>
      <div>
        <ul>
          {items?.map((items, idx) => {
            return (<li key={idx}>{items.name}</li>);
          })}
        </ul>
      </div>
    </>
  )
}
export default Output