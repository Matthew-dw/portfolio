import React, {useState, useEffect} from 'react';
const AboutParagraph = props => {
    const [visible, setVisible] = useState(0)
    useEffect(() => {
        if (visible > 0) return;
        const timer1 = setTimeout(() => setVisible(1), props.time);
        return () => clearTimeout(timer1);
    }, [visible, props])

    return (
        <div className='about-paragraph' style={{opacity: visible > 0 ? 1 : 0}}>
            <div className='about-paragraph-text'>
                {props.text}
            </div>
        </div>
    )
}
export default AboutParagraph;