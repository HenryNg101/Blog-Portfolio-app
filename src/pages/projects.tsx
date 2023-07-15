import React from 'react';
import ProjectInfoCard from '../components/project_info_card';
import projectsData from '../data/projects_data.json';

/*
Metadata of a project's info (projects_data.json):

"img": {
  "loc": str (The location of image file to present),
  "alt": str (Alternative text when image is not available)
},
"project_info": {
  "url": str (Link to the project, could be Github or post),
  "title": str (Project title),
  "desc": str (Project's short description) 
},
"technologies_used": [] (List of technologies used in the project)

*/

function Projects() {
  return (
    <>
      {
        projectsData.map((data: any) => (
          <ProjectInfoCard img={data.img} project_info={data.project_info} technologies_used={data.technologies_used}/>
        ))
      }
    </>
  );
}

export default Projects;