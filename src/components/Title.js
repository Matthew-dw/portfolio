import React, {useState, useEffect} from 'react';
import '../css/title.css'
const Title = props => {
    const [clicked, setClicked] = useState(0);
    const [keyframe, setKeyframe] = useState(0);
    const lastClickedValue = 0;

    // After the logo is clicked timers are started for each keyframe
    useEffect(() => {
        if (clicked === lastClickedValue) return
        if (clicked) {
            const timer1 = setTimeout(() => setKeyframe(1), 200);
            const timer2 = setTimeout(() => setKeyframe(2), 300);
            return () => clearTimeout(timer1, timer2);
        }
        if (!clicked) {
            const timer1 = setTimeout(() => setKeyframe(1), 200);
            const timer2 = setTimeout(() => setKeyframe(0), 600);
            return () => clearTimeout(timer1, timer2);
        }
        
    }, [clicked])

    return (
        <div 
        className='name-animation' 
        style={{
            transform: keyframe < 2 ? 'rotate(0deg)' : 'rotate(-270deg)',
            height: keyframe < 2 ? '190px' : '118px',
            width: keyframe < 2 ? '' : '200px',
        }}
        onClick={() => setClicked(!clicked)}
        >
            <div className='name-container matthew' style={{width: keyframe < 1 ? '410px' : '82px'}}>
                <div className='name'> Matthew </div>
            </div>
            <div className='name-container williams' style={{width: keyframe < 1 ? '410px' : '82px'}}>
                <div className='name'> Williams </div>
            </div>
        </div>
    )
}
export default Title;