// /pages/api/projects/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import projectsData from '@/data/projects_data.json';
import { ProjectDetails } from '@/types/project_details';

// Create a URL mapping similar to your Express app
const urlMapping = new Map(
  projectsData.map((data: ProjectDetails, id: number) => [id, data.url])
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const targetUrl = urlMapping.get(parseInt(id as string));

  if (targetUrl) {
    // Send a 302 redirect response to the client
    res.redirect(302, targetUrl);
  } else {
    // If ID is not found, redirect to the homepage or an error page
    res.redirect(302, '/');
  }
}
