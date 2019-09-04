import React, { useState } from 'react';

// Components
import Intro from './components/Intro';
import MenuContent from './components/MenuContent'
import MenuButton from './components/MenuButton'
import Projects from './components/Projects'

function App() {
  	// Has user clicked/scrolled on main screen yet
	const [animationDone, setAnimationDone] = useState(0);
	// Is the menu open
	const [open, setOpen] = useState(0);
	// Selected tab
	const [selected, setSelected] = useState(0);
	  
  	return (
    	<div className='main'>
			
			<div 
			className='menu'
			style={{
				marginLeft: open ? '0' : '-200px',
				opacity: animationDone ? 1 : 0,
			}}
			>
				<MenuContent selected={selected} setSelected={setSelected}/>
			</div>


			<div 
			className='content'
			style={{marginLeft: open ? '200px' : '0',
			opacity: open ? 0.1 : 1}}

			onClick={() => open ? setOpen(0) : 0}
			>
				<div 
				className='menu-button'
				style={{opacity: animationDone ? 1 : 0}} 
				onClick={() => setOpen(!open)}
				>
					<MenuButton />
				</div>

				{selected === 0 && <Intro setAnimationDone={setAnimationDone} animationDone={animationDone}/>}
				{selected === 1 && <Projects />}
      	</div>
    	</div>
  	);
}

export default App;