import React, {useState, useEffect} from 'react';
const AboutTopper = props => {
    const [visible, setVisible] = useState(0)
    useEffect(() => {
        if (visible > 0) return;
        const timer1 = setTimeout(() => setVisible(1), props.time);
        const timer2 = setTimeout(() => setVisible(2), props.time*2);
        return () => clearTimeout(timer1, timer2);
    }, [visible, props])

    return (
        <div className='picture-container' style={{opacity: visible > 0 ? 1 : 0}}>
            <a href='https://www.linkedin.com/in/matthew-dw/' style={{opacity: visible > 1 ? 1 : 0}}>
                <i className="picture-button-icon fab fa-linkedin-in" />
            </a>
            <div className='picture'/>
            <a href='https://github.com/Matthew-dw' style={{opacity: visible > 1 ? 1 : 0}}>
                <i className="picture-button-icon fab fa-github" />
            </a>
        </div>
    )
}
export default AboutTopper;