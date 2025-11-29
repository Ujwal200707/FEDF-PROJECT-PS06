import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Button, List, ListItem, ListItemText, Chip, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useFunds } from '../context/FundsContext';

const InvestorDashboard = () => {
  const { funds } = useFunds();
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [newGoalDialogOpen, setNewGoalDialogOpen] = useState(false);
  const [viewGoalsDialogOpen, setViewGoalsDialogOpen] = useState(false);
  const [recommendationsDialogOpen, setRecommendationsDialogOpen] = useState(false);
  const [goals, setGoals] = useState([
    { id: 1, name: 'Emergency Fund', target: 15000, current: 12000, deadline: '2025-06-01' },
    { id: 2, name: 'Retirement', target: 500000, current: 75000, deadline: '2045-01-01' },
    { id: 3, name: 'Vacation', target: 5000, current: 3500, deadline: '2025-08-01' }
  ]);
  const [newGoal, setNewGoal] = useState({ name: '', target: '', current: '', deadline: '' });

  const handleViewReport = () => {
    setReportDialogOpen(true);
  };

  const handleReportClose = () => {
    setReportDialogOpen(false);
  };

  const handleNewGoalOpen = () => {
    setNewGoalDialogOpen(true);
  };

  const handleNewGoalClose = () => {
    setNewGoalDialogOpen(false);
    setNewGoal({ name: '', target: '', current: '', deadline: '' });
  };

  const handleViewGoals = () => {
    setViewGoalsDialogOpen(true);
  };

  const handleViewGoalsClose = () => {
    setViewGoalsDialogOpen(false);
  };

  const handleViewRecommendations = () => {
    setRecommendationsDialogOpen(true);
  };

  const handleRecommendationsClose = () => {
    setRecommendationsDialogOpen(false);
  };

  const handleSaveGoal = () => {
    if (newGoal.name && newGoal.target && newGoal.current && newGoal.deadline) {
      const newId = goals.length > 0 ? Math.max(...goals.map(g => g.id)) + 1 : 1;
      setGoals([...goals, { id: newId, ...newGoal, target: parseFloat(newGoal.target), current: parseFloat(newGoal.current) }]);
      handleNewGoalClose();
    }
  };

  const handleRemoveGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const mockPortfolio = [
    { fund: 'Growth Fund A', invested: 10000, current: 11250, return: '+12.5%' },
    { fund: 'Balanced Fund B', invested: 8000, current: 8240, return: '+3.0%' },
    { fund: 'Bond Fund C', invested: 7000, current: 7070, return: '+1.0%' }
  ];

  const totalInvested = mockPortfolio.reduce((sum, item) => sum + item.invested, 0);
  const totalCurrent = mockPortfolio.reduce((sum, item) => sum + item.current, 0);
  const totalReturn = ((totalCurrent - totalInvested) / totalInvested * 100).toFixed(1);

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
          📈 Investor Dashboard
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
          Your personal investment management center
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
                  💼 Portfolio Summary
                </Typography>
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>💰 Total Invested:</strong> ${totalInvested.toLocaleString()}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>📊 Current Value:</strong> ${totalCurrent.toLocaleString()}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#4caf50' }}>📈 Total Return:</strong> +{totalReturn}%
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: '#1976d2' }}>📁 Active Positions:</strong> {mockPortfolio.length}
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
                  📊 Recent Performance
                </Typography>
                <List dense sx={{ marginBottom: '20px', flex: 1 }}>
                  {mockPortfolio.map((item, index) => (
                    <ListItem key={index} sx={{ padding: '8px 0' }}>
                      <ListItemText
                        primary={item.fund}
                        secondary={`$${item.current.toLocaleString()} (${item.return})`}
                        sx={{
                          '& .MuiListItemText-primary': { color: '#1a237e', fontWeight: 'bold' },
                          '& .MuiListItemText-secondary': { color: '#666' }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleViewReport}
                  sx={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                    }
                  }}
                >
                  View Detailed Report
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
                  🎯 Investment Goals
                </Typography>
                <List dense sx={{ marginBottom: '20px', flex: 1 }}>
                  {goals
                    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                    .slice(0, 3)
                    .map((goal, index) => {
                      const progress = (goal.current / goal.target * 100).toFixed(0);
                      const isOverdue = new Date(goal.deadline) < new Date();
                      return (
                        <ListItem key={index} sx={{ padding: '8px 0' }}>
                          <ListItemText
                            primary={`${goal.name}: $${goal.current.toLocaleString()} / $${goal.target.toLocaleString()}`}
                            secondary={`Progress: ${progress}% | Due: ${goal.deadline}${isOverdue ? ' - Overdue' : ''}`}
                            sx={{
                              '& .MuiListItemText-primary': { color: '#1a237e', fontWeight: 'bold' },
                              '& .MuiListItemText-secondary': { color: isOverdue ? '#f44336' : '#666' }
                            }}
                          />
                        </ListItem>
                      );
                    })}
                </List>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <Button
                    variant="contained"
                    onClick={handleNewGoalOpen}
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #388e3c, #4caf50)',
                      }
                    }}
                  >
                    Set New Goal
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleViewGoals}
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                      }
                    }}
                  >
                    View Goals
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
                  💡 Personalized Recommendations
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Funds that match your risk profile and investment goals.
                </Typography>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px', flex: 1 }}>
                  {funds.slice(0, 3).map((fund) => (
                    <Chip
                      key={fund.id}
                      label={fund.name}
                      variant="outlined"
                      onClick={() => window.location.href = `/funds/${fund.id}`}
                      sx={{
                        cursor: 'pointer',
                        borderColor: '#667eea',
                        color: '#667eea',
                        fontWeight: 'bold',
                        '&:hover': {
                          borderColor: '#5a6fd8',
                          backgroundColor: 'rgba(102, 126, 234, 0.04)',
                        }
                      }}
                    />
                  ))}
                </div>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleViewRecommendations}
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
                  View All Recommendations
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Full Width Row */}
          <Grid item xs={12}>
            <Card sx={{
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              }
            }}>
              <CardContent sx={{ padding: '30px' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}>
                  ⚡ Quick Actions
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Common investment tasks and tools to manage your portfolio effectively.
                </Typography>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                      }
                    }}
                  >
                    ➕ Add Funds to Portfolio
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                      }
                    }}
                  >
                    ⚖️ Rebalance Portfolio
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                      }
                    }}
                  >
                    💼 Tax Optimization
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                      }
                    }}
                  >
                    📄 Download Statements
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                      }
                    }}
                  >
                    📞 Contact Advisor
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Dialog
          open={newGoalDialogOpen}
          onClose={handleNewGoalClose}
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
            🎯 Set New Investment Goal
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <TextField
              fullWidth
              label="Goal Name"
              value={newGoal.name}
              onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
              sx={{ marginBottom: '15px' }}
            />
            <TextField
              fullWidth
              label="Target Amount"
              type="number"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
              sx={{ marginBottom: '15px' }}
            />
            <TextField
              fullWidth
              label="Current Amount"
              type="number"
              value={newGoal.current}
              onChange={(e) => setNewGoal({ ...newGoal, current: e.target.value })}
              sx={{ marginBottom: '15px' }}
            />
            <TextField
              fullWidth
              label="Deadline"
              type="date"
              value={newGoal.deadline}
              onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center', gap: '15px' }}>
            <Button
              onClick={handleNewGoalClose}
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
              onClick={handleSaveGoal}
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
              Save Goal
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={viewGoalsDialogOpen}
          onClose={handleViewGoalsClose}
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
            fontSize: '1.8rem',
            marginBottom: '20px'
          }}>
            🎯 Investment Goals
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Target</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Current</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Progress</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Deadline</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {goals
                    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                    .map((goal, index) => {
                      const progress = (goal.current / goal.target * 100).toFixed(0);
                      const isOverdue = new Date(goal.deadline) < new Date();
                      return (
                        <TableRow key={index}>
                          <TableCell>{goal.name}</TableCell>
                          <TableCell>${goal.target.toLocaleString()}</TableCell>
                          <TableCell>${goal.current.toLocaleString()}</TableCell>
                          <TableCell>{progress}%</TableCell>
                          <TableCell sx={{ color: isOverdue ? '#f44336' : 'inherit' }}>
                            {goal.deadline}{isOverdue ? ' - Overdue' : ''}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => handleRemoveGoal(goal.id)}
                              sx={{ color: '#f44336' }}
                            >
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center' }}>
            <Button
              onClick={handleViewGoalsClose}
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
          open={reportDialogOpen}
          onClose={handleReportClose}
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
            fontSize: '1.8rem',
            marginBottom: '20px'
          }}>
            📊 Detailed Investment Report
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
              Portfolio Summary
            </Typography>
            <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
              <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                <strong>Total Invested:</strong> ${totalInvested.toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                <strong>Current Value:</strong> ${totalCurrent.toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                <strong>Total Return:</strong> +{totalReturn}%
              </Typography>
              <Typography variant="body2">
                <strong>Active Positions:</strong> {mockPortfolio.length}
              </Typography>
            </div>

            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
              Fund Details
            </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Fund Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Invested Amount</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Current Value</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Return</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockPortfolio.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.fund}</TableCell>
                      <TableCell>${item.invested.toLocaleString()}</TableCell>
                      <TableCell>${item.current.toLocaleString()}</TableCell>
                      <TableCell sx={{ color: item.return.startsWith('+') ? '#4caf50' : '#f44336' }}>{item.return}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center' }}>
            <Button
              onClick={handleReportClose}
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
              Close Report
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={recommendationsDialogOpen}
          onClose={handleRecommendationsClose}
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
            💡 Top Fund Recommendations
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Fund Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Risk</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Returns</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Preference Criteria</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {funds.slice(0, 10).map((fund) => {
                    const returnValue = parseFloat(fund.returns.replace('%', ''));
                    let preference = 'Average';
                    if (returnValue > 15) preference = 'Better';
                    else if (returnValue > 10) preference = 'Good';
                    return (
                      <TableRow key={fund.id}>
                        <TableCell>{fund.name}</TableCell>
                        <TableCell>{fund.type}</TableCell>
                        <TableCell>{fund.risk}</TableCell>
                        <TableCell sx={{ color: returnValue > 0 ? '#4caf50' : '#f44336' }}>{fund.returns}</TableCell>
                        <TableCell sx={{
                          color: preference === 'Better' ? '#4caf50' : preference === 'Good' ? '#ff9800' : '#666'
                        }}>
                          {preference}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center' }}>
            <Button
              onClick={handleRecommendationsClose}
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
              Close Recommendations
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default InvestorDashboard;
