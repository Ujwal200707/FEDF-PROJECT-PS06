import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Chip } from '@mui/material';

const Posts = () => {
  const userRole = localStorage.getItem('userRole') || '';
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Market Update: Q4 2024 Trends',
      content: 'The fourth quarter of 2024 has shown remarkable resilience in the mutual fund sector...',
      category: 'Market News',
      author: 'Market Analyst',
      date: '2024-12-01',
      excerpt: 'Quarterly analysis of market performance and future outlook.'
    },
    {
      id: 2,
      title: 'Investing in Emerging Markets',
      content: 'Emerging markets offer unique opportunities for diversification...',
      category: 'Investment Tips',
      author: 'Investment Advisor',
      date: '2024-11-28',
      excerpt: 'Exploring the benefits and risks of emerging market investments.'
    },
    {
      id: 3,
      title: 'Tax Benefits of Mutual Funds',
      content: 'Understanding the tax implications of different mutual fund investments...',
      category: 'Tax Guide',
      author: 'Tax Specialist',
      date: '2024-11-25',
      excerpt: 'A comprehensive guide to tax-efficient investing.'
    }
  ]);

  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
    excerpt: '',
    author: 'Admin'
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewPost({
      title: '',
      content: '',
      category: '',
      excerpt: '',
      author: 'Admin'
    });
  };

  const handleSave = () => {
    if (newPost.title && newPost.content) {
      const today = new Date().toISOString().split('T')[0];
      setPosts([...posts, { ...newPost, id: posts.length + 1, date: today }]);
      handleClose();
    }
  };

  const handleRemovePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Market News': 'primary',
      'Investment Tips': 'success',
      'Tax Guide': 'warning',
      'Analysis': 'info'
    };
    return colors[category] || 'default';
  };

  return (
    <div style={{
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}
        >
          📰 Blog Posts & News
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            marginBottom: '40px',
            color: '#666',
            fontStyle: 'italic'
          }}
        >
          Latest market insights, investment tips, and educational content
        </Typography>

        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          padding: '30px',
          background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
          borderRadius: '15px',
          border: '2px solid #ff9800'
        }}>
          <Typography variant="h5" sx={{ color: '#e65100', fontWeight: 'bold', marginBottom: '20px' }}>
            ✍️ Share Your Insights
          </Typography>
          <Typography variant="body1" sx={{ color: '#424242', marginBottom: '20px' }}>
            Publish articles, market analysis, and investment advice to help the community
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              padding: '12px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '25px',
              background: 'linear-gradient(45deg, #ff9800, #ffb74d)',
              '&:hover': {
                background: 'linear-gradient(45deg, #f57c00, #ff9800)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            📝 Write New Post
          </Button>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {posts.map((post) => (
            <Grid item xs={12} sm={6} lg={4} key={post.id}>
              <Card sx={{
                height: '100%',
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                }
              }}>
                <div style={{
                  height: '8px',
                  background: `linear-gradient(90deg, ${getCategoryColor(post.category) === 'primary' ? '#1976d2' : getCategoryColor(post.category) === 'success' ? '#4caf50' : getCategoryColor(post.category) === 'warning' ? '#ff9800' : '#00bcd4'}, ${getCategoryColor(post.category) === 'primary' ? '#1565c0' : getCategoryColor(post.category) === 'success' ? '#66bb6a' : getCategoryColor(post.category) === 'warning' ? '#ffb74d' : '#26c6da'})`
                }} />

                <CardContent sx={{ flexGrow: 1, padding: '30px', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph sx={{ lineHeight: 1.6, flex: 1 }}>
                    {post.excerpt}
                  </Typography>

                  <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Chip
                      label={post.category}
                      color={getCategoryColor(post.category)}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Chip
                      label={`📅 ${post.date}`}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: '#667eea',
                        color: '#667eea',
                        fontWeight: 'bold'
                      }}
                    />
                  </div>

                  <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
                    ✍️ By: {post.author}
                  </Typography>
                </CardContent>

                <div style={{ padding: '30px', paddingTop: 0, backgroundColor: '#fafafa' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        borderColor: '#667eea',
                        color: '#667eea',
                        '&:hover': {
                          borderColor: '#5a6fd8',
                          backgroundColor: 'rgba(102, 126, 234, 0.04)',
                        }
                      }}
                    >
                      📖 Read Full Article
                    </Button>
                    {userRole === 'admin' && (
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => handleRemovePost(post.id)}
                        sx={{
                          borderRadius: '25px',
                          fontWeight: 'bold',
                          background: 'linear-gradient(45deg, #f44336, #d32f2f)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #d32f2f, #b71c1c)',
                          }
                        }}
                      >
                        🗑️ Remove
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '20px',
            padding: '20px'
          }
        }}
      >
        <DialogTitle sx={{
          textAlign: 'center',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '20px'
        }}>
          ✍️ Create New Post
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: '30px' }}>
          <TextField
            autoFocus
            margin="dense"
            label="Post Title"
            fullWidth
            variant="outlined"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                '&:hover fieldset': { borderColor: '#667eea' },
                '&.Mui-focused fieldset': { borderColor: '#667eea' }
              }
            }}
          />
          <TextField
            margin="dense"
            label="Excerpt"
            fullWidth
            variant="outlined"
            value={newPost.excerpt}
            onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                '&:hover fieldset': { borderColor: '#667eea' },
                '&.Mui-focused fieldset': { borderColor: '#667eea' }
              }
            }}
          />
          <TextField
            margin="dense"
            label="Category"
            fullWidth
            variant="outlined"
            value={newPost.category}
            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                '&:hover fieldset': { borderColor: '#667eea' },
                '&.Mui-focused fieldset': { borderColor: '#667eea' }
              }
            }}
          />
          <TextField
            margin="dense"
            label="Content"
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                '&:hover fieldset': { borderColor: '#667eea' },
                '&.Mui-focused fieldset': { borderColor: '#667eea' }
              }
            }}
          />
        </DialogContent>
        <DialogActions sx={{ padding: '20px', justifyContent: 'center', gap: '15px' }}>
          <Button
            onClick={handleClose}
            sx={{
              borderRadius: '25px',
              padding: '10px 30px',
              fontWeight: 'bold',
              borderColor: '#666',
              color: '#666',
              '&:hover': {
                borderColor: '#333',
                backgroundColor: '#f5f5f5'
              }
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{
              borderRadius: '25px',
              padding: '10px 30px',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ff9800, #ffb74d)',
              '&:hover': {
                background: 'linear-gradient(45deg, #f57c00, #ff9800)',
              }
            }}
          >
            Publish Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Posts;
