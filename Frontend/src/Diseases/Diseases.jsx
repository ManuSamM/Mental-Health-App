import bipolar from './bipolar.jpg'
import eating from './eating.jpg'
import depression from './depression.avif'
import anxiety from './anxiety.jpg'
import burnout from './burnout.jpg'
import hallucinations from './hallucinations.jpg'
import './Diseases.css'
function Diseases() {
    return (
        <>
            <div class="image-row">
                <div class="image-card">
                    <img src={bipolar} alt="Image 1" />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bipolar disorder
                </div>
                <div class="image-card">
                    <img src={eating} alt="Image 2" />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Eating disorder
                </div>
                <div class="image-card">
                    <img src={depression} alt="Image 3" />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    Depression
                </div>
                <div class="image-card">
                    <img src={anxiety} alt="Image 4" />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Anxiety
                </div>
                <div class="image-card">
                    <img src={burnout} alt="Image 5" />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Burnout
                </div>
                <div class="image-card">
                    <img src={hallucinations} alt="Image 6" />
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hallucinations
                </div>
            </div>
        </>

    )
}
export default Diseases