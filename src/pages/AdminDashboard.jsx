import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, Button, List, ListItem, ListItemText, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useFunds } from '../context/FundsContext';

const AdminDashboard = () => {
  const { funds } = useFunds();
  const [usersDialogOpen, setUsersDialogOpen] = useState(false);
  const [analyticsDialogOpen, setAnalyticsDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const defaultUsers = [
    { id: 1, name: 'John Investor', role: 'Investor', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Sarah Advisor', role: 'Advisor', status: 'Active', joinDate: '2024-02-20' },
    { id: 3, name: 'Mike Analyst', role: 'Analyst', status: 'Active', joinDate: '2024-03-10' },
    { id: 4, name: 'Admin User', role: 'Admin', status: 'Active', joinDate: '2023-12-01' }
  ];

  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const mockUsers = [...defaultUsers, ...storedUsers];

  const handleViewUsers = () => {
    const allUsers = [...defaultUsers, ...storedUsers];
    setUsers(allUsers);
    setUsersDialogOpen(true);
  };

  const handleUsersClose = () => {
    setUsersDialogOpen(false);
  };

  const handleViewAnalytics = () => {
    setAnalyticsDialogOpen(true);
  };

  const handleAnalyticsClose = () => {
    setAnalyticsDialogOpen(false);
  };

  const handleRoleChange = (userId, newRole) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
    // Update localStorage
    const updatedStored = storedUsers.map(user =>
      user.id === userId ? { ...user, role: newRole } : user
    );
    localStorage.setItem('users', JSON.stringify(updatedStored));
  };

  const handleRemoveUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    // Update localStorage
    const updatedStored = storedUsers.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(updatedStored));
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
          ⚙️ Admin Dashboard
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
          Platform management and oversight center
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Row 1 */}
          <Grid item xs={12} sm={6} lg={6}>
            <Card sx={{
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              height: '100%',
              minHeight: '320px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              }
            }}>
              <CardContent sx={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}>
                  📊 Platform Overview
                </Typography>
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>📈 Total Funds:</strong> {funds.length}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>👥 Active Users:</strong> {mockUsers.length}
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: '#1976d2' }}>💰 Total AUM:</strong> $12.5B
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <Card sx={{
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              height: '100%',
              minHeight: '320px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              }
            }}>
              <CardContent sx={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}>
                  👥 User Management
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Manage user accounts, roles, and permissions across the platform.
                </Typography>
                <List dense sx={{ marginBottom: '20px', flex: 1 }}>
                  {mockUsers.slice(0, 3).map((user) => (
                    <ListItem key={user.id} sx={{ padding: '8px 0' }}>
                      <ListItemText
                        primary={user.name}
                        secondary={`${user.role} - ${user.status}`}
                        sx={{
                          '& .MuiListItemText-primary': { color: '#1a237e', fontWeight: 'bold' },
                          '& .MuiListItemText-secondary': { color: '#666' }
                        }}
                      />
                      <Chip
                        label={user.role}
                        size="small"
                        color={user.role === 'Admin' ? 'error' : user.role === 'Advisor' ? 'warning' : 'primary'}
                        sx={{ fontWeight: 'bold', marginLeft: '10px' }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleViewUsers}
                  sx={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                    }
                  }}
                >
                  Manage Users
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Row 2 */}
          <Grid item xs={12} sm={6} lg={6}>
            <Card sx={{
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              height: '100%',
              minHeight: '320px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              }
            }}>
              <CardContent sx={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}>
                  📝 Content Management
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Oversee educational content, blog posts, and fund information.
                </Typography>
                <div style={{ display: 'flex', gap: '15px', flexDirection: 'column', flex: 1, justifyContent: 'flex-end' }}>
                  <Button
                    component={Link}
                    to="/posts"
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      borderColor: '#ff9800',
                      color: '#ff9800',
                      '&:hover': {
                        borderColor: '#f57c00',
                        backgroundColor: 'rgba(255, 152, 0, 0.04)',
                      }
                    }}
                  >
                    📝 Manage Blog Posts
                  </Button>
                  <Button
                    component={Link}
                    to="/courses"
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      borderColor: '#4caf50',
                      color: '#4caf50',
                      '&:hover': {
                        borderColor: '#388e3c',
                        backgroundColor: 'rgba(76, 175, 80, 0.04)',
                      }
                    }}
                  >
                    🎓 Manage Courses
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} lg={6}>
            <Card sx={{
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              height: '100%',
              minHeight: '320px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              }
            }}>
              <CardContent sx={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}>
                  📈 System Analytics
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  View platform usage statistics and performance metrics.
                </Typography>
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>👤 Daily Active Users:</strong> 892
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>👁️ Page Views Today:</strong> 12,450
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: '#1976d2' }}>⚖️ Fund Comparisons:</strong> 234
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleViewAnalytics}
                  sx={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #ff9800, #ffb74d)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #f57c00, #ff9800)',
                    }
                  }}
                >
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Dialog
          open={usersDialogOpen}
          onClose={handleUsersClose}
          maxWidth="lg"
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
            fontSize: '1.8rem',
            marginBottom: '20px'
          }}>
            👥 Manage Users
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Role</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Amount Invested</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>
                        <Select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user.id, e.target.value)}
                          size="small"
                          sx={{ minWidth: 120 }}
                        >
                          <MenuItem value="Investor">Investor</MenuItem>
                          <MenuItem value="Advisor">Advisor</MenuItem>
                          <MenuItem value="Analyst">Analyst</MenuItem>
                          <MenuItem value="Admin">Admin</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>${(user.id * 10000 + Math.random() * 50000).toFixed(0).toLocaleString()}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handleRemoveUser(user.id)}
                          sx={{ color: '#f44336' }}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center' }}>
            <Button
              onClick={handleUsersClose}
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
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={analyticsDialogOpen}
          onClose={handleAnalyticsClose}
          maxWidth="lg"
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
            fontSize: '1.8rem',
            marginBottom: '20px'
          }}>
            📊 System Analytics Dashboard
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
                  👥 User Analytics
                </Typography>
                <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>Total Users:</strong> {mockUsers.length}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>Active Users (24h):</strong> 892
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>New Signups (7d):</strong> 45
                  </Typography>
                  <Typography variant="body2">
                    <strong>User Retention Rate:</strong> 78%
                  </Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
                  📈 Progress Metrics
                </Typography>
                <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>Goals Completed:</strong> 156
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>Funds Tracked:</strong> {funds.length}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>Posts Published:</strong> 23
                  </Typography>
                  <Typography variant="body2">
                    <strong>Courses Completed:</strong> 89
                  </Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
                  ⚡ System Performance
                </Typography>
                <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>System Uptime:</strong> 99.9%
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>Average Response Time:</strong> 245ms
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    <strong>API Requests (24h):</strong> 12,450
                  </Typography>
                  <Typography variant="body2">
                    <strong>Error Rate:</strong> 0.1%
                  </Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
                  🟢 System Status
                </Typography>
                <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                  <Typography variant="body2" sx={{ marginBottom: '8px', color: '#4caf50' }}>
                    <strong>🟢 Web Server:</strong> Operational
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '8px', color: '#4caf50' }}>
                    <strong>🟢 Database:</strong> Operational
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: '8px', color: '#4caf50' }}>
                    <strong>🟢 API Gateway:</strong> Operational
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4caf50' }}>
                    <strong>🟢 CDN:</strong> Operational
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center' }}>
            <Button
              onClick={handleAnalyticsClose}
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
              Close Analytics
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminDashboard;
