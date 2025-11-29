import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Typography, Card, CardContent, TextField, Button, Select, MenuItem, FormControl, InputLabel, Alert } from '@mui/material';

const Login = () => {
  const [searchParams] = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    role: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam) {
      setFormData(prev => ({ ...prev, role: roleParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Sign up validation
      if (formData.name && formData.username && formData.password && formData.email && formData.role) {
        // Mock sign up - store user
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
          id: users.length + 1,
          name: formData.name,
          username: formData.username,
          email: formData.email,
          role: formData.role.charAt(0).toUpperCase() + formData.role.slice(1), // Capitalize
          status: 'Active',
          joinDate: new Date().toISOString().split('T')[0]
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        setSuccess('Sign up successful! You can now log in.');
        setTimeout(() => {
          setIsSignUp(false);
          setFormData({ name: '', username: '', password: '', email: '', role: '' });
          setSuccess('');
        }, 2000);
      } else {
        setError('Please fill in all fields');
      }
    } else {
      // Login validation
      if (formData.username && formData.password && formData.role) {
        // Mock authentication
        localStorage.setItem('userRole', formData.role);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', formData.username);

        setSuccess('Login successful!');

        // Redirect based on role after showing success
        setTimeout(() => {
          switch (formData.role) {
            case 'admin':
              window.location.href = '/admin';
              break;
            case 'advisor':
              window.location.href = '/advisor';
              break;
            case 'analyst':
              window.location.href = '/analyst';
              break;
            case 'investor':
              window.location.href = '/investor';
              break;
            default:
              window.location.href = '/';
          }
        }, 1000); // 1 second delay
      } else {
        setError('Please fill in all fields');
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <Card sx={{
        maxWidth: 400,
        width: '100%',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        borderRadius: '16px'
      }}>
        <CardContent sx={{ padding: '40px 32px' }}>
          <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ marginBottom: '32px', color: '#1a237e' }}>
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </Typography>

          <Typography variant="body1" align="center" sx={{ marginBottom: '24px', color: '#666' }}>
            {isSignUp ? 'Sign up to get started' : 'Sign in to access your dashboard'}
          </Typography>

          {error && (
            <Alert severity="error" sx={{ marginBottom: '20px' }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ marginBottom: '20px' }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ marginBottom: '16px' }}
                required
              />
            )}

            <TextField
              fullWidth
              label="Username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: '16px' }}
              required
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{ marginBottom: '16px' }}
              required
            />

            {isSignUp && (
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                sx={{ marginBottom: '16px' }}
                required
              />
            )}

            <FormControl fullWidth margin="normal" sx={{ marginBottom: '24px' }}>
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                value={formData.role}
                onChange={handleChange}
                label="Role"
                required
              >
                <MenuItem value="investor">Investor</MenuItem>
                <MenuItem value="advisor">Financial Advisor</MenuItem>
                <MenuItem value="analyst">Data Analyst</MenuItem>
                {!isSignUp && <MenuItem value="admin">Administrator</MenuItem>}
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                padding: '12px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                background: 'linear-gradient(45deg, #1976d2, #1565c0)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1565c0, #0d47a1)',
                }
              }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>

          <Typography variant="body2" align="center" sx={{ marginTop: '20px', color: '#666', cursor: 'pointer' }} onClick={() => { setIsSignUp(!isSignUp); setError(''); setSuccess(''); setFormData({ name: '', username: '', password: '', email: '', role: '' }); }}>
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </Typography>

          {!isSignUp && (
            <Typography variant="body2" align="center" sx={{ marginTop: '10px', color: '#666' }}>
              Demo credentials: Use any username/password and select a role
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;