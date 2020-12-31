import React from 'react';

// Components
import {Container} from '@material-ui/core'
import Title from './components/Title'

function App() {
	return (
    	<Container fixed>
			<div className='title-main-container' >
				<div className='title-name-container' >
					<Title />
				</div>
				<div className='title-buttons-container'>
					{[0,0,0,0].map(e => <div className='title-button'/>)}
				</div>
			</div>
		</Container>
  	);
}

export default App;