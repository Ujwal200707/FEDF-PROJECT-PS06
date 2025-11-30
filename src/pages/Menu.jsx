import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, Button } from '@mui/material';

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('userRole') || '';
    setIsLoggedIn(loggedIn);
    setUserRole(role);
  }, []);

  const getDashboardItem = () => {
    if (!isLoggedIn) {
      return { to: '/login', label: 'Login', icon: '🔐', description: 'User authentication' };
    }
    switch (userRole) {
      case 'investor':
        return { to: '/investor', label: 'Investor Dashboard', icon: '📈', description: 'Personal investment dashboard' };
      case 'advisor':
        return { to: '/advisor', label: 'Advisor Dashboard', icon: '👨‍💼', description: 'Financial advisor tools' };
      case 'analyst':
        return { to: '/analyst', label: 'Analyst Dashboard', icon: '📊', description: 'Market analysis tools' };
      case 'admin':
        return { to: '/admin', label: 'Admin Dashboard', icon: '⚙️', description: 'Platform administration' };
      default:
        return null;
    }
  };

  const menuItems = [
    { to: '/', label: 'Home', icon: '🏠', description: 'Main landing page' },
    { to: '/funds', label: 'Funds', icon: '📊', description: 'Browse investment funds' },
    { to: '/courses', label: 'Courses', icon: '🎓', description: 'Educational content' },
    { to: '/posts', label: 'Posts', icon: '📰', description: 'Blog posts and news' },
    { to: '/compare', label: 'Compare Funds', icon: '⚖️', description: 'Compare fund performance' },
    { to: '/funds/1', label: 'Sample Fund', icon: '💼', description: 'Sample fund details' }
  ];

  const dashboardItem = getDashboardItem();
  if (dashboardItem) {
    menuItems.push(dashboardItem);
  }

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
            WebkitTextFillColor: 'teal',
            fontWeight: 'bold'
          }}
        >
          🗂️ Navigation Menu
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
          Quick access to all platform sections
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card sx={{
                height: '100%',
                minHeight: '200px',
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
                <CardContent sx={{ flexGrow: 1, padding: '30px', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', textAlign: 'center' }}>
                    {item.icon} {item.label}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph sx={{ lineHeight: 1.6, flex: 1, textAlign: 'center' }}>
                    {item.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={item.to}
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                      }
                    }}
                  >
                    Go to {item.label}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '24px',
    maxWidth: '780px',
    margin: '40px auto',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
  },
  title: {
    margin: 0,
    fontSize: '28px',
    color: '#1b5e20'
  },
  subtitle: {
    marginTop: '8px',
    color: '#4a4a4a'
  },
  list: {
    marginTop: '18px',
    paddingLeft: '16px'
  },
  link: {
    color: '#1565c0',
    textDecoration: 'none',
    fontSize: '16px'
  },
  note: {
    marginTop: '20px',
    color: '#666'
  }
};

export default Menu;
