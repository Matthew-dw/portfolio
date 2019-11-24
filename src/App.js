import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

// Components
import Intro from './components/Intro';
import Content from './components/Content'

function App() {
	return (
    	<div className='main'>
		<Router basename={process.env.PUBLIC_URL} >
			<Switch>
				<Route path="/home">
					<Content/>
				</Route>
				<Route path="/">
					<Intro setView={0}/>
				</Route>
			</Switch>
		</Router>
		</div>
  	);
}

export default App;