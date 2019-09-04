import React from 'react';
import '../css/projects.css';

const Projects = () => {
    const projects = [
        0,
        0,
        0,
        0,
        0,
    ]
    return (
        <div className='project-container'>
            {projects.map(project => {
                return (
                    <div className='project'>
                        <div className='title'> 
                            Title
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Projects;