import React, {useState, useEffect} from 'react';
import '../../css/titleanimation.css'
const Title = props => {
    const [clicked, setClicked] = useState(0);
    const [keyframe, setKeyframe] = useState(0);
    const [hover, setHover] = useState(0);

    // After the logo is clicked timers are started for each keyframe
    useEffect(() => {
        if (!clicked) return
        const timer1 = setTimeout(() => setKeyframe(1), 200);
        const timer2 = setTimeout(() => setKeyframe(2), 600);
        return () => clearTimeout(timer1, timer2);
    }, [clicked])

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
        </div>
    )
}
export default Title;