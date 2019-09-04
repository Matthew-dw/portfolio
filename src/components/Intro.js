import React, {useState, useEffect} from 'react';
import SocialMedia from './SocialMedia';
import '../css/titleanimation.css';
const Intro = props => {
    // state for clicking, keyframes and hover
    const [clicked, setClicked] = useState(props.animationDone);
    const [keyframe, setKeyframe] = useState(props.animationDone ? 3 : 0);
    const [hover, setHover] = useState(0);

    // After the logo is clicked timers are started for each keyframe
    useEffect(() => {
        if (!clicked) return
        if (keyframe > 0) return
        const timer1 = setTimeout(() => setKeyframe(1), 200);
        const timer2 = setTimeout(() => setKeyframe(2), 500);
        const timer3 = setTimeout(() => setKeyframe(3), 1300);
        return () => clearTimeout(timer1, timer2, timer3);
    }, [clicked, keyframe])

    // After 3rd keyframe is reached tell parent animation is over
    useEffect(() => {
        if (keyframe === 3)props.setAnimationDone(1);
    }, [keyframe, props])

    return (
        <div 
        className='name-animation' 
        style={{
            transform: clicked ? 'rotate(0deg)' : 'rotate(-450deg)',
            cursor: clicked ? 'auto' : 'pointer',
            height: keyframe > 0 ? '190px' : '118px',
        }}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(0)}
        onClick={() => setClicked(1)}
        >
            {/** Matthew  */}
            <div className='name-container matthew' style={{width: keyframe > 1 ? '410px' : '82px'}}>
                <div className='name blue' > Matthew </div>
                <div className='name red'> Matthew </div>
            </div>
            {/** Williams  */}
            <div className='name-container williams' style={{width: keyframe > 1 ? '410px' : '82px'}}>
                <div className='name blue'> Williams </div>
                <div className='name red'> Williams </div>
            </div>
            <div 
            className='name-animation-background'
            style={{opacity: hover && !clicked ? '1' : '0'}}
            />
            <SocialMedia keyframe={keyframe} animationDone={props.animationDone} />
        </div>
    )
}
export default Intro;