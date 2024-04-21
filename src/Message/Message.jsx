import './Message.css'
import counselling from './counselling.jpg'
function Message() {
    return (
        <div className='message'>
            <img src={counselling} id='counselling' height={420} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>
                <b>
                    "Taking care of your mind is just as important as taking<br />
                    care of your body. Just as you'd visit a doctor for a physical<br />
                    ailment, consider speaking to a mental health counselor for<br />
                    your emotional well-being"
                </b>
            </p>
        </div>
    )
}

export default Message;