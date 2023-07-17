import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const accounts = [
  {"type": "Github", "url": "https://github.com/HenryNg101"},
  {"type": "Gmail", "url":"mailto:hungnguyenquoc8a2@gmail.com"},
  {"type": "LinkedIn", "url":"https://www.linkedin.com/in/henry-nguyen0/"}
]

export default function MediaCard() {
  return (
    <Card 
      sx={{ 
        width: 300,
        my: 2,
        mx: 'auto',
        p: 2,
        textAlign: 'center', 
        borderRadius: '20px',
        position: {md: 'fixed'}
      }}
    >
      <img src='/assets/image/avatar.jpg' alt='My avatar' width={100} style={{borderRadius: '50%', marginLeft: "auto", marginRight: "auto"}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Henry Nguyen
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A guy who wants to explore this world of technologies
        </Typography>
      </CardContent>
      <Typography variant="body2" color="text.secondary">
          My contacts:
        </Typography>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        {
          accounts.map((account) => (
            <Button
              key={account.type + account.url}
              sx={{ color: 'black', border:'solid thin', '&:hover': { backgroundColor: 'black', color: 'white'}}}
            >
              <a href={account.url}>{account.type}</a>
            </Button>
          ))
        }
      </CardActions>
    </Card>
  );
}