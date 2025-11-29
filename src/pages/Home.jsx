import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

const Home = () => {
  const roles = [
    {
      title: 'Investor',
      value: 'investor',
      path: `/login?role=investor`,
      description: 'Explore and manage your investments',
      icon: '📈',
      color: '#4caf50'
    },
    {
      title: 'Financial Advisor',
      value: 'advisor',
      path: `/login?role=advisor`,
      description: 'Provide guidance and create content',
      icon: '👨‍💼',
      color: '#2196f3'
    },
    {
      title: 'Data Analyst',
      value: 'analyst',
      path: `/login?role=analyst`,
      description: 'Analyze trends and generate reports',
      icon: '📊',
      color: '#ff9800'
    },
    {
      title: 'Administrator',
      value: 'admin',
      path: `/login?role=admin`,
      description: 'Manage platform and oversee operations',
      icon: '⚙️',
      color: '#9c27b0'
    }
  ];

  const features = [
    {
      title: 'Comprehensive Fund Database',
      description: 'Access detailed information about various mutual funds',
      icon: '📚'
    },
    {
      title: 'Risk Assessment Tools',
      description: 'Evaluate investment risks and make informed decisions',
      icon: '⚖️'
    },
    {
      title: 'Performance Analytics',
      description: 'Track fund performance and market trends',
      icon: '📈'
    },
    {
      title: 'Educational Resources',
      description: 'Learn about investing through courses and articles',
      icon: '🎓'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      {/* Hero Section */}
      <div style={{
        padding: '80px 20px 60px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        borderRadius: '0 0 50px 50px'
      }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}
        >
          Mutual Funds Information Platform
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          paragraph
          sx={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            fontSize: '1.2rem',
            lineHeight: 1.6
          }}
        >
          Your comprehensive guide to understanding mutual funds, their structure, risks, and investment factors
        </Typography>

        <div style={{ marginBottom: '40px' }}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            size="large"
            sx={{
              padding: '12px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '25px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
              },
              marginRight: '20px'
            }}
          >
            Get Started
          </Button>
          <Button
            component={Link}
            to="/funds"
            variant="outlined"
            size="large"
            sx={{
              padding: '12px 30px',
              fontSize: '16px',
              borderRadius: '25px',
              borderColor: '#667eea',
              color: '#667eea',
              '&:hover': {
                borderColor: '#5a6fd8',
                backgroundColor: 'rgba(102, 126, 234, 0.04)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            Browse Funds
          </Button>
        </div>
      </div>

      {/* Role Selection */}
      <div style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ marginBottom: '50px', color: '#1a237e' }}
        >
          Choose Your Role
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          {roles.map((role) => (
            <Grid item xs={12} sm={6} md={3} key={role.path}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: `2px solid ${role.color}20`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 30px ${role.color}30`,
                    borderColor: role.color,
                  }
                }}
                component={Link}
                to={role.path}
                style={{ textDecoration: 'none' }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', padding: '30px 20px' }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}>
                    {role.icon}
                  </div>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ color: role.color, fontWeight: 'bold' }}
                  >
                    {role.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {role.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Features Section */}
      <div style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ marginBottom: '50px', color: '#1a237e' }}
        >
          Platform Features
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1000px', margin: '0 auto' }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                }
              }}>
                <div style={{ fontSize: '2.5rem', marginRight: '20px' }}>
                  {feature.icon}
                </div>
                <div>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: '60px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to Start Investing?
        </Typography>
        <Typography variant="h6" paragraph sx={{ marginBottom: '30px', opacity: 0.9 }}>
          Join thousands of investors making informed decisions
        </Typography>
        <Button
          component={Link}
          to="/compare"
          variant="contained"
          size="large"
          sx={{
            padding: '15px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '30px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              transform: 'translateY(-2px)',
            }
          }}
        >
          Compare Funds Now
        </Button>
      </div>
    </div>
  );
};

export default Home;
