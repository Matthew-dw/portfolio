import React, {useState} from 'react';

// Components
import {Container} from '@material-ui/core'
import Title from './components/Title'
<<<<<<< HEAD
import Content from './components/Content'

function App() {
	const [displayContent, setDisplayContent] = useState(0)
	return ( 
    	<Container fixed overflow="visible" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
			<Title setDisplayContent={setDisplayContent} />
			{displayContent === 0 && <Content />}
=======

function App() {
	const Content = props => <div className='content'>

	</div>
	const [displayContent, setDisplayContent] = useState(false)
	return ( 
    	<Container fixed overflow="visible" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
			<Title setDisplayContent={setDisplayContent} />
			{displayContent && <Content />}
>>>>>>> 30cb995a8b3e251fdc539979d65a777e47a25fb4
		</Container>
  	);
}

export default App;