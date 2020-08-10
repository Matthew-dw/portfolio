import React, {useState} from 'react';

const Menu = props => {
    // State
    const [rotated, setRotated] = useState(false);
    const [apart, setApart] = useState(false);
    const [revealed, setRevealed] = useState(false);
    // Keyframe function for burger menu
    const onClick = () => {
        var timer1, timer2;
        if (rotated) {
            setRevealed(!revealed)
            timer1 = setTimeout(() => setRotated(!rotated), 400);
            timer2 = setTimeout(() => setApart(!apart), 400);
        } else {
            setRotated(!rotated)
            timer1 = setTimeout(() => setApart(!apart), 120);
            timer2 = setTimeout(() => setRevealed(!revealed), 200);
        }
        return () => clearTimeout(timer1, timer2);
    }
    // CSS 
    return (
        <div className='menu' 
        style={{
            width: revealed ? '275px' : '75px',
            boxShadow: revealed ? "-4px 1px 24px 1px rgba(0,0,0,0.75)" : "-4px 1px 24px 1px rgba(0,0,0,0)",
            background: revealed ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        }}
        >
            {/** Burger Menu Animation*/ }
            <div 
            className='animation' 
            style={{
                transform: rotated ? 'rotate(0deg)' : 'rotate(-90deg)',
                height: apart ? '160px' : '118px',
            }}
            onClick={() => onClick()}
            >
                <div className='animation-container' style={{top: '0px'}}>
                    <div className='name'> M </div>
                </div>

                <div className='animation-container' style={{bottom: '0px'}}>
                    <div className='name'> W </div>
                </div>
            </div>
            {/** Name Reveal*/ }
            <div className='name-reveal' onClick={() => onClick()} >
                <div className='name-container' style={{top: '0px', width: revealed ? '200px' : '0'}}>
                    <div className='name blue' > atthew </div>
                    <div className='name black'> atthew </div>
                </div>
                <div className='name-container' style={{bottom: '0px', width: revealed ? '200px' : '0'}}>
                    <div className='name blue' > illiams </div>
                    <div className='name black'> illiams </div>
                </div>
            </div>
            {/** Menu Items*/ }
            <div className='menu-items' style={{marginLeft: revealed ? '15px' : '-200px'}}>
                <div className='menu-item' >
                    About
                </div>
                <div className='menu-item' >
                    Projects
                </div>
                <div className='menu-item' >
                    Connect
                </div>
            </div>
        </div>
    )
}
export default Menu;