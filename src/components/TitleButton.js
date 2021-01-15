import React, { useState } from 'react';
const TitleButton = props => {
    const [tooltipVisible, setTooltipVisible] = useState(0)
    return <div 
        className={'title-button ' + props.logo}
        onClick={props.onClick} 
        onMouseEnter={() => setTooltipVisible(1)}
        onMouseLeave={() => setTooltipVisible(0)}
    >
        { tooltipVisible ? <div className='title-button-tooltip'> {props.description} </div> : '' }
    </ div>
}

export default TitleButton