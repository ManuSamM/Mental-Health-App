import doctor1 from './doctor1.jpg'
import doctor2 from './doctor2.jpg'
import doctor3 from './doctor3.jpg'
import doctor4 from './doctor4.jpg'
import doctor5 from './doctor5.jpg'
import './Doctors.css'

function Doctors() {
    return (
        <div className='doctors'>
            <b>Our Doctors</b>
            <div className='doctors-card'>
                <img src={doctor1} alt='image1' />
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr. Peter Schmidt
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Psychiatrist</b>
            </div>
            <div className='doctors-card'>
                <img src={doctor2} alt='image2' />
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr. Raunak Desai
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Psychologist</b>
            </div>
            <div className='doctors-card'>
                <img src={doctor3} alt='image3' />
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr. John Kennedy
                <br />&nbsp;&nbsp;&nbsp;<b>Clinical Psychologist</b>
            </div>
            <div className='doctors-card'>
                <img src={doctor4} alt='image4' />
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr. Prachi Yadav
                <br /><b>Counseling Psychologist</b>
            </div>
            <div className='doctors-card'>
                <img src={doctor5} alt='image5' />
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr. Steve Austin
                <br />&nbsp;&nbsp;&nbsp;<b>Geriatric Psychiatrist</b>
            </div>
        </div>
    )
}

export default Doctors