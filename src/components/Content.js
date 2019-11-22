import React, {useState} from 'react';
import '../css/content.css';
import Projects from './ProjectPage';
import About from './About';
const Main = props => {
    const [selected, setSelected] = useState(0);
    const views = [<About />, <Projects />]
    return (
        <div className='content'>
            <div className='container'>
                <div className='body'>
                    <div className='top-button-group'>
                        <div className={selected === 1 ? 'selector-button' : 'selector-button-selected'}
                        onClick={() => setSelected(0)}>
                            <div>About</div>
                        </div>
                        <div className={selected === 1 ? 'selector-button-selected' : 'selector-button'}
                        onClick={() => setSelected(1)}>
                            <div>Projects</div>
                        </div>
                    </div>
                    <div className='view'>
                        {views[selected]}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;