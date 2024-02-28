import * as React from 'react';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const accounts = [
  {"type": "Github", "url": "https://github.com/HenryNg101", "icon": faSquareGithub},
  {"type": "Gmail", "url":"mailto:hungnguyenquoc8a2@gmail.com", "icon": faEnvelope},
  {"type": "LinkedIn", "url":"https://www.linkedin.com/in/henry-nguyen0/", "icon": faLinkedin}
]

export default function MediaCard() {
  return (
    <Card sx={{ width: 300, my: 2, mx: 'auto', p: 2, textAlign: 'center', borderRadius: '20px', position: {md: 'fixed'}}}>
      <CardMedia
        sx={{width: 100, height: 100, borderRadius: '50%', marginLeft: "auto", marginRight: "auto"}}
        image="/assets/image/avatar.jpg"
        title="Avatar"
      />
            
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"> Henry Nguyen </Typography>
        <Typography variant="body2" color="text.secondary"> A guy who wants to explore this world of technologies </Typography>
      </CardContent>
      <Typography variant="body2" color="text.secondary"> My contacts: </Typography>

      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        {
          accounts.map((account) => (
            <a href={account.url} key={account.type + account.url}>
              <FontAwesomeIcon icon={account.icon} size='2x' color='gray' title={account.type}
                onMouseEnter={(e) => {e.currentTarget.style.color = 'black'}} 
                onMouseLeave={(e) => {e.currentTarget.style.color = 'gray'}}
              />
            </a>
          ))
        }
      </CardActions>
    </Card>
  );
}