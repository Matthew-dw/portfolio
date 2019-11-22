import React from 'react';
import '../css/about.css';
import AboutParagraph from './AboutParagraph';
import AboutTopper from './AboutTopper';
const Main = props => {
    return (
        <div className='about-container'>
            <AboutTopper time={100}/>
            <AboutParagraph time={200}
            text="Hey there! My name is Matthew Williams and I am a third year Software Engineering student at Mcmaster University.
            I've been creating web development projects for the past year and love combining my passion for visual design with coding.
            Another th."
            />
            <AboutParagraph time={300}
            text="Outside of software I really like rowing which I've been doing since grade 10"
            />
        </div>
    )
}
export default Main;