import React from 'react';

const MenuButton = props =>  (
    <div>
        {[0,0,0].map(line => (
            <div className='menu-button-line' />
        ))}
    </div>
)

export default MenuButton;