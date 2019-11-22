import React, {useState, useEffect} from 'react';
const Project = props => {
    const project = props.project;
    const [visible, setVisible] = useState(0)
    
    useEffect(() => {
        if (visible > 0) return;
        const timer1 = setTimeout(() => setVisible(1), props.time);
        return () => clearTimeout(timer1);
    }, [visible, props])

    return (
        <div className='project' style={{opacity: visible > 0 ? 1 : 0, marginLeft: visible > 0 ? 0 : 20}}>
            {project.icon}
            <div className='project-body'>
                <div className='project-title'> 
                    {project.title}
                    {project.tech && project.tech.map(tech => <i key={tech} className={tech + ' project-tech'}></i>)}
                </div>
                <div className='project-shorttext'>
                    {project.shorttext}
                </div>
            </div>
            
        </div>
    )
}
export default Project;