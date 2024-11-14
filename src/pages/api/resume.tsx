// /pages/api/projects/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const repo_owner = 'HenryNg101';
        const repo_name = 'HenryNg101';
        // Fetch the latest release data from the GitHub API
        const response = await axios.get(`https://api.github.com/repos/${repo_owner}/${repo_name}/releases/latest`);
        const releaseData = response.data;
    
        // Retrieve the download URL from the first asset in the release, in this case, it's my resume
        const fileUrl = releaseData.assets[0].browser_download_url;
    
        // Redirect to the file URL with a 302 status
        res.redirect(302, fileUrl);
    } catch (error) {
        console.error("Error fetching release data:", error);
        res.status(500).json({ error: 'Failed to retrieve resume URL' });
    }
}
