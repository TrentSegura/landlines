// import React, { Component } from 'react';
// import ProjectItem from './ProjectItem';
// import axios from 'axios'

// export class Projects extends Component {
//     state = {
//         projects: [],
        
//     }

//     componentDidMount() {
//         axios.get('http://localhost:8888/m12/landlines-wp/wp-json/wp/v2/projects')
//         .then(res => this.setState({
//             projects: res.data,
//         }))
//         .catch(err => console.log(err));
//     }


//     render() {
//         const { projects } = this.state;


//             return (
//                 <div>
//                     {projects.map(project =>(
//                         <ProjectItem key={project.id} project={project} />
//                     ))}
//                 </div>
//             );
//     }
// }

// export default Projects
