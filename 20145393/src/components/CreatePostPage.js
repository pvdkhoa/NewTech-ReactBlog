import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Typography, Stack, TextField, Button} from '@mui/material'

function CreatePostPage({ onCreatePost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const styles = {
      container: {
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        borderRadius: '10px',
      },
      heading: {
        fontWeight: 'bold',
        fontSize: '32px',
        color: 'green',
      },
      formContainer: {
        marginLeft: '12px',
        marginRight: '12px',
      },
      inputGroup: {
        marginBottom: '20px',
      },
      label: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
      textField: {
        marginLeft: '10px',
      },
      createButton: {
        marginTop: '20px',
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold',
      },
      homeButton: {
        marginTop: '20px',
        marginLeft: '20px',
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
      },
    };
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleContentChange = (event) => {
      setContent(event.target.value);
    };
  
    const handleCreatePost = () => {
      if (title.trim() === '' || content.trim() === '') {
        alert('Please enter a title and content for the post.');
        return;
      }
  
      const newPost = {
        title,
        content,
        comments: [],
      };
  
      onCreatePost(newPost);
  
      setTitle('');
      setContent('');
      
      // return to the home page
      navigate('/');
    };
  
    return (
      <Box style={styles.container}>
        <Typography variant="h4" style={styles.heading}>
          Create Post
        </Typography>
  
        <Box style={styles.formContainer}>
          <Stack style={styles.inputGroup} spacing={2}>
            <Typography variant="h5" style={styles.label}>
              Title
            </Typography>
            <TextField
              id="outlined-basic"
              style={styles.textField}
              label="Title"
              variant="outlined"
              onChange={handleTitleChange}
            />
          </Stack>
  
          <Stack style={styles.inputGroup} spacing={2}>
            <Typography variant="h5" style={styles.label}>
              Content
            </Typography>
            <TextField
              style={styles.textField}
              label="Content"
              variant="outlined"
              onChange={handleContentChange}
              id="outlined-multiline-static"
              multiline
              rows={4}
            />
          </Stack>
  
          <Button variant="contained" style={styles.createButton} onClick={handleCreatePost}>
            Create Post
          </Button>
          <Button variant="contained" style={styles.homeButton} onClick={() => navigate('/')}>
            Home
          </Button>
        </Box>
      </Box>
    );
  }

  export default CreatePostPage;


