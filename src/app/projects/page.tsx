'use client'

import ProjectInfoCard from '@/components/ProjectInfoCard';
import projectsData from '@/data/projects_data.json'
import FadeIn from 'react-fade-in';
import { ProjectDetails } from '@/types/project_details';
import Head from 'next/head';

function Projects() {
  return (
    <>
      <Head>
        <title>Henry Nguyen | Projects</title>
      </Head>
      <FadeIn delay={100}>
        {
          projectsData.map((data: ProjectDetails) => (
            <ProjectInfoCard
              key={data.url}
              url={data.url}
              title={data.title}
              desc={data.desc}
              img={data.img}
              technologies_used={data.technologies_used}/>
          ))
        }
      </FadeIn>
    </>
  );
}

export default Projects;