// server.ts
import express, { Request, Response } from 'express';
import path from 'path';
import projectsData from './src/data/projects_data.json';

const app = express();

// URL mappings for short URLs
const urlMapping = new Map(projectsData.map((data: any, id: number) => [id, data.url]));

// Redirect route for shortened URLs
app.get('/projects/:id', (req: Request, res: Response) => {
  const targetUrl = urlMapping.get(parseInt(req.params.id));
  
  if (targetUrl) {
    // Redirect to the original URL with a 302 status code
    res.redirect(302, targetUrl);
  } else {
    // Redirect to the main site if the ID is not found
    res.redirect(302, '/');
  }
});

// Serve the React app build files
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
