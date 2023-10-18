// import { useNavigate, useParams } from "react-router-dom";
// import React, { useState } from "react";
// import { Button, Typography, TextField, Box, Avatar} from "@mui/material";
// function PostDetailPage({ posts, onDeletePost, onAddComment }) {
//     const { postId } = useParams();
//     const post = posts.find((post) => post.id === Number(postId));
//     const [comment, setComment] = useState('');
//     const history = useNavigate();
//     const handleDeletePost = () => {
//       onDeletePost(post.id);
//       history('/');
//     };

//     const handleCommentChange = (event) => {
//       setComment(event.target.value);
//     };

//     const handleAddComment = () => {
//       if (comment.trim() === '') {
//         alert('Please enter a comment.');
//         return;
//       }
//       const newComment = {
//         content: comment,
//       }

//       onAddComment(post.id, newComment);
//       setComment(" ");
//     };

//     if (!post) {
//       return <p>Post not found.</p>;
//     }

//     return (
//       <Box sx={{ml: 12, mt: 5}}>
//         <Typography style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }} textAlign={'center'}>Title: {post.title}</Typography>
//         <Typography style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }} textAlign={'center'} >Content: {post.content}</Typography>
//         <h3 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }} textAlign={'center'}>Comments</h3>
//         {post.comments.length === 0 ? (
//           <p>No comments yet.</p>
//         ) : (
//           <Box>
//             {post.comments.map((comment, index) => (
//               // <li key={index}>Guest:{comment}</li>
//               <Typography variant = 'p' key={index} sx={{ display: "flex", alignItems: "center", mb: 2}}>
//                 <Avatar 
//                   src= '.....'
//                   sx={{ width: 65, height: 65, mr: 2 }}  

//                 /> 
//                    Guest:  {comment.content}
//               </Typography>
//             ))}
//           </Box>
//         )}
//         <div>
//           <TextField id="outlined-basic" sx={{ml: 5, mt: 2}} label="Comment" variant="outlined" onChange={handleCommentChange} />
//           <Button variant="contained" sx={{ml: 5, mt: 5}} onClick={handleAddComment} >Add Comment</Button>

//         <Button variant="contained" sx={{ml: 5, mt: 5}}  onClick={handleDeletePost}>Delete Post</Button>
//         <Button variant="contained" sx={{ml: 5, mt: 5}} onClick={() => history('/')} >Back to Home</Button>
//         </div>
//       </Box>
//     );
//   }

//   export default PostDetailPage;


import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { Button, Typography, TextField, Box, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles"; // Import makeStyles

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    padding: "16px",
    maxWidth: "600px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "16px",
  },
  commentTitle: {
    marginTop: "32px",
  },
  commentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "16px",
  },
  comment: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
}));

function PostDetailPage({ posts, onDeletePost, onAddComment }) {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === Number(postId));
  const [comment, setComment] = useState("");
  const history = useNavigate();
  const classes = useStyles(); // Initialize styles

  const handleDeletePost = () => {
    onDeletePost(post.id);
    history("/");
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() === "") {
      alert("Please enter a comment.");
      return;
    }
    const newComment = {
      content: comment,
    };

    onAddComment(post.id, newComment);
    setComment("");
  };

  if (!post) {
    return <p>Post not found.</p>;
  }

  const styles = {
    noComment: {
      fontSize: '18px',
      fontStyle: 'italic',
      color: '#999',
    },
    comment: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    avatar: {
      width: '65px',
      height: '65px',
      marginRight: '15px',
    },
    commentInput: {
      marginTop: '20px',
    },
    addButton: {
      marginTop: '30px',
      backgroundColor: 'green',
      color: 'white',
      fontWeight: 'bold',
    },
    deleteButton: {
      marginTop: '20px',
      backgroundColor: 'red',
      color: 'white',
      fontWeight: 'bold',
    },
    backButton: {
      marginTop: '20px',
      backgroundColor: 'blue',
      color: 'white',
      fontWeight: 'bold',
    },
    content: {
      fontSize: '18px',
      color: '#444',
      marginBottom: '20px',
    },
  };


  return (
    <Box className={classes.pageContainer}>
      <Typography className={classes.title}>
        Title: {post.title}
      </Typography>
      <Typography className={classes.content}>
        Content: {post.content}
      </Typography>
      <Typography className={classes.commentTitle}>
        Comments
      </Typography>
      {post.comments.length === 0 ? (
        <p style={styles.noComment}>No comments yet.</p>
      ) : (
        <Box className={classes.commentContainer}>
          {post.comments.map((comment, index) => (
            <Typography variant="p" key={index} style={styles.comment}>
              <Avatar src="url_to_avatar_image" style={styles.avatar} />
              Guest: {comment.content}
            </Typography>
          ))}
        </Box>
      )}
      <TextField
        id="outlined-basic"
        style={styles.commentInput}
        label="Comment"
        variant="outlined"
        onChange={handleCommentChange}
      />
      <Button variant="contained" style={styles.addButton} onClick={handleAddComment}>
        Add Comment
      </Button>
      <Button variant="contained" style={styles.deleteButton} onClick={handleDeletePost}>
        Delete Post
      </Button>
      <Button variant="contained" style={styles.backButton} onClick={() => history("/")}>
        Back to Home
      </Button>
    </Box>

  );
}

export default PostDetailPage;
