import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ width: 300, position: {md: "fixed"}, m: 3, textAlign: 'center', borderRadius: '20px'}}>
      <img src='/assets/image/avatar.jpg' alt='My avatar' width={100} style={{borderRadius: '50%'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Henry Nguyen
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A guy who wants to explore this world of technologies
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='https://github.com/HenryNg101'>Github</Button>
        <Button size="small" href='https://www.linkedin.com/in/henry-nguyen0/'>LinkedIn</Button>
        <Button size="small" href='mailto:hungnguyenquoc8a2@gmail.com'>Gmail</Button>
      </CardActions>
    </Card>
  );
}