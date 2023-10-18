// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes, useParams, useNavigate } from 'react-router-dom';

// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

// import {  CardActions, CardMedia, Button } from '@mui/material';


// function PostCard({ post, onDeletePost }) {
//   return (
//     <Card sx={{ maxWidth: 300, ml: 6, boxShadow: '0px 2px 4px rgba(0, 0, 0, 1)' }}>
//       <CardMedia
//         sx={{ height: 240 }}
//         image=""
//         title={post.title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {post.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {post.content}
//         </Typography>
//       </CardContent>
//       <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Button size="small" component={Link} to={`/posts/${post.id}/edit`} >
//             Edit
//           </Button>
//           <Button size="small" component={Link} to={`/posts/${post.id}`}>
//             Comment
//           </Button>
//           <Tooltip title="Delete" arrow>
//             <IconButton>
//               <DeleteIcon  onClick={() => onDeletePost(post.id)} />
//             </IconButton>
//           </Tooltip>
//       </CardActions>
//     </Card>
//   );
// }

// export default function HomePage({ posts, onDeletePost }) {
//   return (
//     <Grid container spacing={2}>
//       {posts.map((post) => (
//         <Grid item xs={12} sm={6} md={4} key={post.id}>
//           <PostCard post={post} onDeletePost={onDeletePost} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActions, CardMedia, Button, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 300,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px', // Rounded corners
    backgroundColor: 'gray', // Background color
    padding: '16px', // Explicit padding value
  },
  cardMedia: {
    height: 80,
  },
  cardContent: {
    padding: '12px', // Explicit padding value
    
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'gray', // Background color
    padding: '12px', // Explicit padding value
    margin: "12px"
  },
  cardActionButtons: {
    color: 'white', // Text color
    backgroundColor: 'green',
    borderRadius: '10px', 
  },
}));

function PostCard({ post, onDeletePost }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image="" title={post.title} />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      
      <CardActions className={classes.cardActions}>
        <Button
          size="large"
          component={Link}
          to={`/posts/${post.id}/edit`}
          style={{ backgroundColor: 'blue', color: 'white', fontWeight: 'bold' }}
        >
          Edit
        </Button>
        <Button
          size="large"
          component={Link}
          to={`/posts/${post.id}`}
          style={{ backgroundColor: 'green', color: 'white', fontWeight: 'bold' }}
        >
          Comment
        </Button>
        <Tooltip title="Delete" arrow>
          <IconButton
            onClick={() => onDeletePost(post.id)}
            style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold' }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

const HomePage = ({ posts, onDeletePost }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <PostCard post={post} onDeletePost={onDeletePost} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
