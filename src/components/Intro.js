import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import '../css/titleanimation.css';
const Intro = props => {
    // state for clicking, keyframes and hover
    const [clicked, setClicked] = useState(0);
    const [keyframe, setKeyframe] = useState(0);
    const [hover, setHover] = useState(0);

    let history = useHistory();  

    // After the logo is clicked timers are started for each keyframe
    useEffect(() => {
        if (!clicked) return
        if (keyframe > 0) return
        const timer1 = setTimeout(() => setKeyframe(1), 200);
        const timer2 = setTimeout(() => setKeyframe(2), 500);
        const timer3 = setTimeout(() => setKeyframe(3), 1000);
        const timer4 = setTimeout(() => setKeyframe(4), 2000);
        const timer5 = setTimeout(() => setKeyframe(5), 2200);
        const timer6 = setTimeout(() => history.push("/home"), 2800);
        return () => clearTimeout(timer1, timer2, timer3, timer4, timer5, timer6);
    }, [clicked, keyframe, props, history])

    return (
        <div className='content' style={{opacity: keyframe > 4 ? 0 : 1}}>
            <div 
            className='name-animation' 
            style={{
                transform: clicked ? 'rotate(0deg)' : 'rotate(-450deg)',
                cursor: clicked ? 'auto' : 'pointer',
                height: keyframe > 0 && keyframe < 4? '190px' : '118px',
            }}
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setClicked(1)}
            >
                {/** Matthew  */}
                <div className='name-container matthew' style={{width: keyframe > 1 && keyframe < 4 ? '410px' : '82px'}}>
                    <div className='name blue' > Matthew </div>
                    <div className='name red'> Matthew </div>
                </div>

                {/** Williams  */}
                <div className='name-container williams' style={{width: keyframe > 1 && keyframe < 4 ? '410px' : '82px'}}>
                    <div className='name blue'> Williams </div>
                    <div className='name red'> Williams </div>
                </div>

                {/** Hover circle  */}
                <div 
                className='name-animation-background'
                style={{opacity: hover && !clicked ? '1' : '0'}}
                />
            </div>
        </div>
        
    )
}
export default Intro;