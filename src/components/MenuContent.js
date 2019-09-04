import React from 'react';
import '../css/menu-content.css'

const MenuContent = props => {
    const options = ['INTRO', 'PROJECTS','ABOUT' ];
    return (
        <div
        className='menu-wrapper'
        style={{marginTop: `calc(45vh - ${props.selected*70}px)`}}
        >
            <div className='arrow'/>
            {options.map((option, index) => {
            const selected = (option === options[props.selected]) ? 'selected':'';
            return(
                <div className={'menu-option-container'}>
                    <div 
                    className={'menu-option ' + selected}
                    onClick={() => props.setSelected(index)}
                    style={{opacity: 1 - 0.4*(Math.abs(props.selected-index))}}
                    >
                        {option}
                    </div>
                </div>
            )})}
        </div>
    )
}
export default MenuContent;