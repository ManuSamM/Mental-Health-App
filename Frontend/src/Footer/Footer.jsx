import './Footer.css'
import mentalhealthlogo from './mentalhealthlogo.jpg'
function Footer() {
    return (
        <div className='footer'>
            <div class="footer-content">
                <div class="logo">
                    <img src={mentalhealthlogo} alt="Website Logo" />
                </div>
                <div class="contact-info">
                    <p class="helpline">Helpline Numbers:</p>
                    <p>Support: 1800 233 3330 </p>
                    <p>Emergency: 91-9820466726</p>
                </div>
                <div class="social-icons">
                    <a href='https://www.facebook.com/' target='_blank'>  <i class="fa-brands fa-facebook fa-beat"></i></a>
                    <a href='https://www.twitter.com' target='_blank'>  <i class="fa-brands fa-twitter fa-beat"></i></a>
                    <a href='https://www.instagram.com/' target='_blank'>  <i class="fa-brands fa-instagram fa-beat"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Footer