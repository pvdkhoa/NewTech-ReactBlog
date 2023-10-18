import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Typography, Box, List, ListItem, Drawer,  ListItemIcon, ListItemText} from '@mui/material';
import IndexPage from './components/IndexPage';
import CreatePostPage from './components/CreatePostPage';
import EditPostPage from './components/EditPostPage';
import PostDetailPage from './components/PostDetailPage';
import Chip from '@mui/material/Chip';


// Make toggle Dark/ Light styles
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {createTheme, ThemeProvider} from '@mui/material';
import HomePage from './components/IndexPage';
import { v4 as uuidv4 } from 'uuid';

function BlogApp() {
  const [posts, setPosts] = useState([]);

  // Function to create a new post
  const handleCreatePost = (newPost) => {
    const postId = Date.now();
    const postWithId = { ...newPost, id: postId };
    setPosts([...posts, postWithId]);
  };

  // Function to delete a post
  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  // Function to edit a post
  const handleEditPost = (postId, updatedPost) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, ...updatedPost };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // Function to add a comment to a post
  const handleAddComment = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const updatedComments = [...post.comments, comment];
        return { ...post, comments: updatedComments };
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  const handleHome = () => {
    <Link to="/">Home</Link>
  }

  const handleCreatPost = () => {
    <Link to="/create">Create Post</Link>
  }

  const styles = {
    buttonContainer: {
      marginLeft: '12px',
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      marginBottom: '12px',
    },
    homeButton: {
      fontSize: '16px', // Change the font size
      backgroundColor: 'blue', // Change the background color
      color: 'white', // Change the text color
    },
    createPostButton: {
      fontSize: '18px', // Change the font size
      backgroundColor: 'green', // Change the background color
      color: 'white', // Change the text color
    },
  };

  return (
    <Router>
      <header style={{ backgroundColor: '#f8f8f8', padding: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="collapse navbar-collapse" id="navbarExample01">
            <Box>
              <Typography style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginLeft: '20px' }}>CRUD Post</Typography>
              <Typography className="nav-link" style={{ fontSize: '18px', color: '#666', marginLeft: '20px' }}>Simple Blog</Typography>
            </Box>
          </div>
        </nav>
      </header>
      <Box style={styles.buttonContainer}>
  <Box style={styles.button}>
    <Chip label="Home" component={Link} to="/" onClick={handleHome} style={styles.homeButton} variant="outlined" />
  </Box>
  <Box style={styles.button}>
    <Chip label="Create Post" component={Link} onClick={handleCreatPost} to="/create" style={styles.createPostButton} variant="outlined" />
  </Box>
</Box>
      <Routes>
        <Route path="/" element={<IndexPage posts={posts} onDeletePost={handleDeletePost} />} />
        <Route path="/create" element={<CreatePostPage onCreatePost={handleCreatePost} />} />
        <Route path="/posts/:postId/edit" element={<EditPostPage posts={posts} onEditPost={handleEditPost} />} />
        <Route path="/posts/:postId" element={<PostDetailPage posts={posts} onDeletePost={handleDeletePost} onAddComment={handleAddComment} />} />
      </Routes>
    </Router>
  );
}



export default BlogApp;



