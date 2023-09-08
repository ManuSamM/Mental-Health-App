import './Navbar.css'
import mentalhealthlogo from './mentalhealthlogo.jpg'
function Button({ text }) {
    return (
        <button className='buttons'>
            <b>{text}</b>
        </button>
    )
}
function Navbar() {
    return (
        <div className='navbar'>
            <img src={mentalhealthlogo} height={67} />
            <a href='http://localhost:5173'><Button text={'Home'} /></a>
            <Button text={'About Us'} />
            <a href='http://localhost:5173/articles'>
                <Button text={'Articles'} />
            </a>
            <a href='http://localhost:5173/appointment/login'>
                <Button text={'Appointment'} />
            </a>
        </div>
    )
}

export default Navbar;