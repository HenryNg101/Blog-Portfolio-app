import React from 'react';
import ProjectInfoCard from '../components/project_info_card';
import projectsData from '../data/projects_data.json';
import { useSearchParams } from 'react-router-dom';
import FadeIn from 'react-fade-in';

/*
Metadata of a project's info (projects_data.json):

"url": str (Link to the project, could be Github or post),
"title": str (Project title),
"desc": str (Project's short description),
"img": {
  "loc": str (The location of image file to present),
  "alt": str (Alternative text when image is not available)
},
"technologies_used": [] (List of technologies used in the project)
*/

function Projects() {
  const [searchParam] = useSearchParams();
  const url_mapping = new Map(projectsData.map((data: any, id: number) => [id, data.url]));
  var projectId = searchParam.get("id");

  if(projectId != null && url_mapping.has(parseInt(projectId))){
    window.location.replace(url_mapping.get(parseInt(projectId)));
    return null;
  }

  return (
    <FadeIn delay={100}>
      {
        projectsData.map((data: any) => (
          <ProjectInfoCard
            url={data.url}
            title={data.title}
            desc={data.desc}
            img={data.img}
            technologies_used={data.technologies_used}/>
        ))
      }
    </FadeIn>
  );
}

export default Projects;