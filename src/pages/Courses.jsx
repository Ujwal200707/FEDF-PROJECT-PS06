import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Chip, MenuItem } from '@mui/material';

const Courses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Introduction to Mutual Funds',
      description: 'Learn the basics of mutual funds, their types, and how they work.',
      category: 'Beginner',
      duration: '30 min',
      author: 'John Smith'
    },
    {
      id: 2,
      title: 'Risk Assessment in Investing',
      description: 'Understanding different risk levels and how to assess your risk tolerance.',
      category: 'Intermediate',
      duration: '45 min',
      author: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Portfolio Diversification Strategies',
      description: 'Advanced techniques for building a diversified investment portfolio.',
      category: 'Advanced',
      duration: '60 min',
      author: 'Mike Davis'
    }
  ]);

  const [open, setOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    category: '',
    duration: '',
    author: 'Advisor'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewCourse({
      title: '',
      description: '',
      category: '',
      duration: '',
      author: 'Advisor'
    });
  };

  const handleSave = () => {
    if (newCourse.title && newCourse.description) {
      setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
      handleClose();
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'error';
      default: return 'default';
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || course.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

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
          🎓 Educational Courses
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
          Comprehensive learning resources for investors and financial advisors
        </Typography>

        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          padding: '30px',
          background: 'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%)',
          borderRadius: '15px',
          border: '2px solid #4caf50'
        }}>
          <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 'bold', marginBottom: '20px' }}>
            📚 Create New Course
          </Typography>
          <Typography variant="body1" sx={{ color: '#424242', marginBottom: '20px' }}>
            Share your knowledge and help others make informed investment decisions
          </Typography>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{
              padding: '12px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '25px',
              background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
              '&:hover': {
                background: 'linear-gradient(45deg, #388e3c, #4caf50)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            ➕ Create Course
          </Button>
        </div>

        {/* Search and Filter Section */}
        <div style={{
          marginBottom: '40px',
          padding: '30px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          borderRadius: '15px',
          border: '2px solid #dee2e6'
        }}>
          <Typography variant="h5" sx={{ color: '#495057', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
            🔍 Search & Filter Courses
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Search courses by title, description, or author"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    '&:hover fieldset': { borderColor: '#667eea' },
                    '&.Mui-focused fieldset': { borderColor: '#667eea' }
                  }
                }}
                placeholder="Type to search..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                select
                fullWidth
                label="Filter by Category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    '&:hover fieldset': { borderColor: '#667eea' },
                    '&.Mui-focused fieldset': { borderColor: '#667eea' }
                  }
                }}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                sx={{
                  height: '56px',
                  borderRadius: '10px',
                  borderColor: '#6c757d',
                  color: '#6c757d',
                  '&:hover': {
                    borderColor: '#495057',
                    backgroundColor: '#f8f9fa'
                  }
                }}
              >
                Clear Filters
              </Button>
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {filteredCourses.map((course) => (
            <Grid item xs={12} sm={6} lg={4} key={course.id}>
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
                  background: `linear-gradient(90deg, ${getCategoryColor(course.category) === 'success' ? '#4caf50' : getCategoryColor(course.category) === 'warning' ? '#ff9800' : '#9c27b0'}, ${getCategoryColor(course.category) === 'success' ? '#66bb6a' : getCategoryColor(course.category) === 'warning' ? '#ffb74d' : '#ba68c8'})`
                }} />

                <CardContent sx={{ flexGrow: 1, padding: '30px', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph sx={{ lineHeight: 1.6, flex: 1 }}>
                    {course.description}
                  </Typography>

                  <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Chip
                      label={course.category}
                      color={getCategoryColor(course.category)}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Chip
                      label={course.duration}
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
                    👨‍🏫 By: {course.author}
                  </Typography>
                </CardContent>

                <div style={{ padding: '30px', paddingTop: 0, backgroundColor: '#fafafa' }}>
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
                    📖 View Course
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
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
          🎓 Create New Course
        </DialogTitle>
        <DialogContent sx={{ paddingBottom: '30px' }}>
          <TextField
            autoFocus
            margin="dense"
            label="Course Title"
            fullWidth
            variant="outlined"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
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
            label="Description"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={newCourse.description}
            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
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
            value={newCourse.category}
            onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
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
            label="Duration (e.g., 30 min)"
            fullWidth
            variant="outlined"
            value={newCourse.duration}
            onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
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
              background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
              '&:hover': {
                background: 'linear-gradient(45deg, #388e3c, #4caf50)',
              }
            }}
          >
            Create Course
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Courses;
