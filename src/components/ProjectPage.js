import React, {useState} from 'react';
import '../css/projects.css';
import Project from './Project'

const ProjectPage = () => {
    const projects = [
        {
            title: 'Do Your Dishes',
            text: 'Do your dishes is a full stack application that allows users to create and join houses. Chores can be created, assigned and viewd on the calendar. I built this application using MongoDB, Express, React and Node. ',
            shorttext: 'Users create houses, invite friends and assign chores',
            img: <img src='https://i.imgur.com/uxRbWLN.png' className='project-img' alt='project-img' />,
            icon: <i className="fas fa-home project-logo" onClick={() => setSelected(0)}></i>,
            tech: ["fab fa-react", "fab fa-node-js", ],
            github: 'https://github.com/Matthew-dw/DoYourDishes',
        },
        {
            title: 'Math Racer',
            text: 'Users race eachother to complete a list of math questions through the use of websockets',
            shorttext: 'Users race eachother to answer math questions',
            icon: <i className="fas fa-keyboard project-logo" onClick={() => setSelected(1)}></i>,
            tech: ["fab fa-react", "fab fa-node-js", ],
            github: '',
        },
        {
            title: 'Portfolio',
            text: 'You\'re looking at it!',
            shorttext: 'You\'re looking at it!',
            icon: <i className="fas fa-globe project-logo" onClick={() => setSelected(2)} ></i>,
            tech: ["fab fa-react", ],
            github: '',
        },
        {
            title: 'ReCommend',
            text: 'Uses the yelp data set to recommend restaurants to users based on their past experiences',
            shorttext: 'Recommends restaurants to users using the Yelp dataset',
            icon: <i className="fas fa-hamburger project-logo" onClick={() => setSelected(3)} ></i>,
            tech: [ "fab fa-java", ],
            github: '',
        },
    ]

    const [selected, setSelected] = useState(4);

    const ProjectView = props => {
        const project = projects[selected];
        return (
            <div className='project-container'>
                <div className='project-back' onClick={() => {setSelected(4)}}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className='project-container-title'>
                    {project.title}
                </div> 
                <div className='row'>
                    {project.img}
                </div>
                <div className='row'>
                    <p className='project-p'>
                        {project.text}
                    </p>
                </div>
                <a href={project.github} className='project-a'> GitHub </a>
            </div>
        )
    }
    const DefaultView = props => {
        return (
            <div className='project-container'>
                {projects.map((project, i) => <Project project={project} id={i} time={i*75}/>)}
            </div>
        )
    }
    if (selected < 4) return <ProjectView/>
    else return <DefaultView />
}
export default ProjectPage;