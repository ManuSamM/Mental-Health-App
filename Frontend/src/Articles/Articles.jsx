import './Articles.css'
import Footer from '../Footer/Footer'
function Button({ text }) {
    return (
        <button className='buttons'><b>{text}</b></button>
    )
}

function Articles() {
    return (
        <>
            <div className='navbar'>
                <a href='http://localhost:5173'>
                    <Button text={'Home'} />
                </a>
                <Button text={'About Us'} />
                <a href='http://localhost:5173/articles'>
                    <Button text={'Articles'} />
                </a>
            </div>

            <div className='article1'>
                <br />
                <div className='center1'>
                    <h1 id='title1'>Mental health awareness</h1>
                </div>
                <br />
                <div className='articlebody1'>
                    <p> Mental health is a major concern worldwide and India is not far behind in sharing this.
                        If we evaluate developments in the field of mental health, the pace appears to be slow.
                        Dr. Brock Chisholm, the first Director-General of the World Health Organization (WHO),
                        in 1954, had presciently declared that “without mental health there can be no true physical
                        health.” More than 60 years later, the scenario has not altered substantially. About 14%
                        of the global burden of disease is attributed to neuropsychiatric disorders. The burden
                        of mental disorders is likely to have been underestimated because of inadequate appreciation
                        of the inter-play between mental illness and other health disorders. There remain
                        considerable issues of priority-setting based on the burden of health problems and of
                        addressing inequalities in relation to determinants and solutions for health problems.</p><br />
                    <p>Progress in mental health service delivery has been slow in most low- and middle-income
                        countries. Barriers include the existing public-health priorities and its influence on
                        funding; challenges to delivery of mental health care in primary-care settings; the low
                        numbers of those trained in mental health care; and the lack of mental health
                        perspective in public-health leadership. There have been numerous calls for invoking
                        political will, for enhancing advocacy and for galvanizing community participation; all
                        with scant improvement in outcomes.</p><br />
                    <p>Mental health awareness campaigns have yielded positive outcomes. Some of the
                        strategies undertaken to target awareness and address stigma around mental illness
                        include participation by family members, sensitization to treatment and social
                        inclusion. Lack of knowledge about the mental illnesses poses a challenge to
                        the mental health care delivery system. Research has highlighted the role of
                        community-based systems in low-income countries and has also yielded positive
                        results in creating awareness, thereby impacting participation.</p><br />
                    <p>
                        Awareness and health literacy are two sides of the same coin. Stigma and discrimination are negative consequences
                        of ignorance and misinformation. There are a few studies which have measured mental health literacy in the
                        Indian context. One study found mental health literacy among adolescents to be very low, i.e. depression was
                        identified by 29.04% and schizophrenia/psychosis was recognized only by 1.31%. Stigma was noted to be present
                        in help-seeking. </p><br />

                    <p>These findings reinforce the need to increase awareness of mental health. Mental health literacy is a
                        related concept which is increasingly seen as an important measure of the awareness and knowledge of
                        mental health disorders. Health literacy has been described as “ability to access, understand, and use
                        the information to promote and maintain good health.” Mental health literacy encompasses recognition,
                        causes, self-help, facilitation of professional intervention, and navigating the information highway.
                        Attitudes which hinder recognition and appropriate help-seeking can be counter-acted by
                        information which is already readily available in the public domain. There are plenty of examples of
                        awareness positively impacting mental health outcomes like the Norwegian campaign to reduce the duration
                        of untreated psychosis.</p><br />
                    <p>Considering that most of the earlier strategies to enhance mental health have
                        not succeeded over the past six decades or more in less-developed countries,
                        the time has come to take on a new approach with renewed vigor. Mental health
                        awareness can become both the means and the way of ending this apathy.
                        Progressive government policies based on evidence-based approaches, an engaged
                        media, a vibrant educational system, a responsive industry, aggressive
                        utilization of newer technologies and creative crowd-sourcing might together
                        help dispel the blight of mental illnesses.</p>
                </div>
            </div>

            <div className='article2'>
                <br /><br /><br /><br /><br /><br /><br />
                <div className='center2'>
                    <h1>What is Depression</h1>
                </div>
                <div className='articlebody2'>
                    <p>
                        Depression (major depressive disorder) is a common and serious medical illness
                        that negatively affects how you feel, the way you think and how you act.
                        Fortunately, it is also treatable. Depression causes feelings of sadness and/or
                        a loss of interest in activities you once enjoyed. It can lead to a variety of
                        emotional and physical problems and can decrease your ability to function at work and at home.
                    </p>
                </div>

            </div>
            <div className='articlebody3'>
                <p>
                    Depression symptoms can vary from mild to severe and can include:
                    <ul>
                        <li> Feeling sad or having a depressed mood</li>
                        <li>Loss of interest or pleasure in activities once enjoyed</li>
                        <li>Changes in appetite — weight loss or gain unrelated to dieting</li>
                        <li>Trouble sleeping or sleeping too much</li>
                        <li>Loss of energy or increased fatigue</li>
                        <li>Increase in purposeless physical activity (e.g., inability to sit still,
                            pacing, handwringing) or slowed movements or speech (these actions must
                            be severe enough to be observable by others)</li>
                        <li>Feeling worthless or guilty</li>
                        <li>Difficulty thinking, concentrating or making decisions</li>
                        <li> Thoughts of death or suicide</li> </ul>
                </p>
                <br />
                <p>
                    Depression affects an estimated one in 15 adults (6.7%) in any given year.
                    And one in six people (16.6%) will experience depression at some time in
                    their life. Depression can occur at any time, but on average, first
                    appears during the late teens to mid-20s. Women are more likely than men
                    to experience depression. Some studies show that one-third of women will
                    experience a major depressive episode in their lifetime. There is a high
                    degree of heritability (approximately 40%) when first-degree relatives
                    (parents/children/siblings) have depression.
                </p>
                <br /><br /><br /><br /><br />
                <h1>How is Depression treated?</h1>
                <br />
                <p>
                    Depression is among the most treatable of mental disorders. Between 80%
                    and 90% percent of people with depression eventually respond well to treatment.
                    Almost all patients gain some relief from their symptoms.
                    Before a diagnosis or treatment, a health professional should conduct a thorough
                    diagnostic evaluation, including an interview and a physical examination. In some
                    cases, a blood test might be done to make sure the depression is not due to a
                    medical condition like a thyroid problem or a vitamin deficiency (reversing the
                    medical cause would alleviate the depression-like symptoms). The evaluation will
                    identify specific symptoms and explore medical and family histories as well as
                    cultural and environmental factors with the goal of arriving at a diagnosis and
                    planning a course of action.
                </p>
                <br />
                <p>
                    <b>Depression can also be treated by:</b>
                    <ul>
                        <li>Medication</li>
                        <li>Psychotherapy</li>
                        <li>Electroconvulsive Therapy (ECT)</li>
                        <li>Self-help and Coping</li>
                    </ul>
                </p>
            </div>
            <div className='articlebody4'>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h1>How to stay Motivated in Life</h1>
            </div>
            <div className='articlebody5'>
                <p><ul>
                    <br />
                    <li><b>Set Clear Goals:</b> Having clear and achievable goals gives you something
                        to work towards. Break these big goals into smaller, manageable steps
                        so you can track your progress and feel a sense of accomplishment along the way.</li>
                    <br />
                    <li><b>Find Your "Why":</b> Understand why you want to achieve these goals.
                        Connecting to your deeper reasons will provide you with a strong
                        source of motivation when things get tough.</li>
                    <br />
                    <li><b>Stay Positive:</b> Focus on the positive aspects of your journey.
                        Celebrate your successes, no matter how small, and don't be too
                        hard on yourself when things don't go as planned.</li>
                    <br />
                    <li><b>Surround Yourself with Positivity:</b> Spend time with people who uplift
                        and support you. Positive friends, family, or mentors can provide
                        encouragement and remind you of your potential.</li>
                    <br />
                    <li><b>Visualize Your Success:</b> Take a moment each day to visualize
                        yourself achieving your goals. Imagine how it feels, what it looks like,
                        and the impact it will have on your life.</li>
                    <br />
                    <li><b>Stay Curious:</b> Keep learning and exploring new things related to your goals. Curiosity can keep your mind engaged and motivated to keep pushing forward.</li>
                    <br />
                    <li><b>Reward Yourself:</b> Treat yourself for reaching milestones. Rewards can be small, like enjoying your favorite snack or taking a relaxing day off.</li>
                    <br />
                    <li><b>Embrace Setbacks:</b> Understand that setbacks are a natural part of any journey. Instead of getting discouraged, use them as opportunities to learn and grow stronger.</li>
                    <br />
                    <li><b>Stay Healthy: </b>Physical well-being has a big impact on motivation. Regular exercise, a balanced diet, and adequate sleep can boost your energy levels and overall positivity.</li>
                    <br />
                    <li><b>Mix Things Up:</b> Monotony can lead to boredom and demotivation. Try to introduce variety into your routine to keep things fresh and exciting.</li>
                    <br />
                    <li><b>Track Your Progress:</b> Keep a journal or use a tracking app to document your progress. Looking back at how far you've come can be incredibly motivating.</li>
                    <br />
                    <li><b>Stay Inspired:</b> Read books, listen to podcasts, or watch videos that align with your goals. Learning from others who have succeeded can provide a motivational boost.</li>
                    <br />
                    <li><b>Practice Self-Care:</b> Taking care of your mental and emotional well-being is crucial. Engage in activities that bring you joy, relaxation, and a sense of peace.</li>
                </ul> </p>
            </div >
            <Footer/>
        </>
    )
}

export default Articles