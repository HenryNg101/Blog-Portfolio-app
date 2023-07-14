import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, position: "fixed"}}>
      <CardMedia
        sx={{ height: 320 }}
        src="../public/assets/img/avatar.jpg"
        title="My avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Henry Nguyen
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A guy who loves coding
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
        <Button size="small">LinkedIn</Button>
        <Button size="small">Gmail</Button>
      </CardActions>
    </Card>
  );
}