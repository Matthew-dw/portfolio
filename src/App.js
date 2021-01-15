import React, {useState} from 'react';

// Components
import {Container} from '@material-ui/core'
import Title from './components/Title'
import Content from './components/Content'

function App() {
	const [displayContent, setDisplayContent] = useState(0)
	return ( 
    	<Container fixed overflow="visible" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
			<Title setDisplayContent={setDisplayContent} />
			{displayContent === 0 && <Content />}
		</Container>
  	);
}

export default App;