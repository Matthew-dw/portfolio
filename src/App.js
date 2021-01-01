import React, {useState} from 'react';

// Components
import {Container} from '@material-ui/core'
import Title from './components/Title'

function App() {
	const Content = props => <div className='content'>

	</div>
	const [displayContent, setDisplayContent] = useState(false)
	return ( 
    	<Container fixed overflow="visible" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
			<Title setDisplayContent={setDisplayContent} />
			{displayContent && <Content />}
		</Container>
  	);
}

export default App;