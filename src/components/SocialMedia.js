import React, {useState, useEffect} from 'react';

const SocialMedia = props => {
    const [visible, setVisible] = useState(-1);
    const [allVisible, setAllVisible] = useState(0);
    const icons = [
        <i class="fab fa-github" />,
        <i class="fab fa-linkedin-in"/>,
        <i class="fab fa-facebook-f" />,
        <i class="fab fa-steam-symbol"/>,
        <i class="fab fa-youtube"/>
    ]
    useEffect(() => {  
        if (visible === 4 || props.animationDone) setAllVisible(1);
    }, [visible, props])

    useEffect(() => {  
        const timer = setInterval(() => {
            if (props.keyframe === 2 && !allVisible)setVisible(visible + 1)
        }, 150);
        return () => clearInterval(timer)
    }, [allVisible, props, visible])
    
    return (
        <div className='socialmedia'>
            {icons.map((icon, index) => {
                return (
                    <div className={'circle ' + ((visible >= index) || allVisible ? 'visible': '')}> 
                        <a href='https://www.google.ca'>
                        {icon}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}
export default SocialMedia;