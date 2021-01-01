import React, {useState, useEffect} from 'react';
import '../css/title.css'
const Title = props => {
    const [clicked, setClicked] = useState(0)
    const [keyframe, setKeyframe] = useState(0)
    const lastClickedValue = 0;

    // Animation keyframe timers
    useEffect(() => {
        if (clicked === lastClickedValue) return
        if (clicked) {
            const timer1 = setTimeout(() => setKeyframe(1), 200)
            const timer2 = setTimeout(() => setKeyframe(2), 300)
            const timer3 = setTimeout(() => setKeyframe(3), 800)
            return () => clearTimeout(timer1, timer2, timer3);
        }
        if (!clicked) {
            const timer3 = setTimeout(() => setKeyframe(2), 100)
            const timer1 = setTimeout(() => setKeyframe(1), 200)
            const timer2 = setTimeout(() => setKeyframe(0), 600)
            return () => clearTimeout(timer1, timer2, timer3)
        }
    }, [clicked])

    useEffect(() => {
        if (keyframe === 3) props.setDisplayContent(true)
        else props.setDisplayContent(false)
    }, [props, keyframe])

    // Button properties
    const buttons = [
        {logo: 'fas fa-arrow-left',  onClick: () => setClicked(!clicked) },
        {logo: 'far fa-file',        onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/')},
        {logo: 'fab fa-github',      onClick: () => window.open('https://github.com/Matthew-dw')},
        {logo: 'fab fa-linkedin-in', onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/')},
    ]

    return (
        <div className='title-main-container' style={{width: clicked? '10%' : '100%'}}>
            <div className='title-name-container' >
                <div className='name-animation' 
                    style={{
                        transform: keyframe < 2 ? 'rotate(0deg)' : 'rotate(-270deg)',
                        height: keyframe < 2 ? '190px' : '118px',
                        width: keyframe < 2 ? '420px' : '100px',
                        cursor: keyframe === 3 ? 'pointer' : '',
                    }}
                    onClick={() => keyframe === 3 && setClicked(!clicked)}
                >
                    <div className='name-container matthew' style={{width: keyframe < 1 ? '410px' : '82px'}}>
                        <div className='name'> Matthew </div>
                    </div>
                    <div className='name-container williams' style={{width: keyframe < 1 ? '410px' : '82px'}}>
                        <div className='name'> Williams </div>
                    </div>
                </div>
            </div>
            <div className='title-buttons-container'>
                {keyframe < 2 && buttons.map( (button, i) =>  
                    <div className={'title-button ' + button.logo} key={i} 
                        onClick={button.onClick} 
                        style={{ 
                            opacity: !clicked ? keyframe < 1 ? '1' : '0' : keyframe < 3 ? '0' : '1',
                        }} 
                    />
                )}
            </div>
        </div>
    )
}
export default Title;