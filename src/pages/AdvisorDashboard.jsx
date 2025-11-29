import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, Button, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AdvisorDashboard = () => {
  const [clientsDialogOpen, setClientsDialogOpen] = useState(false);

  const handleViewClients = () => {
    setClientsDialogOpen(true);
  };

  const handleClientsClose = () => {
    setClientsDialogOpen(false);
  };

  const mockClients = [
    { id: 1, name: 'Alice Johnson', portfolio: '$150,000', risk: 'Moderate', lastContact: '2024-12-01', fund: 'Tech Growth Fund' },
    { id: 2, name: 'Bob Smith', portfolio: '$250,000', risk: 'High', lastContact: '2024-11-28', fund: 'Emerging Markets ETF' },
    { id: 3, name: 'Carol Davis', portfolio: '$75,000', risk: 'Low', lastContact: '2024-11-30', fund: 'Bond Index Fund' },
    { id: 4, name: 'David Wilson', portfolio: '$320,000', risk: 'High', lastContact: '2024-11-25', fund: 'Global Equity Fund' },
    { id: 5, name: 'Emma Brown', portfolio: '$180,000', risk: 'Moderate', lastContact: '2024-12-02', fund: 'Balanced Portfolio' },
    { id: 6, name: 'Frank Miller', portfolio: '$95,000', risk: 'Low', lastContact: '2024-11-29', fund: 'Conservative Income Fund' },
    { id: 7, name: 'Grace Lee', portfolio: '$410,000', risk: 'High', lastContact: '2024-11-27', fund: 'Venture Capital Fund' },
    { id: 8, name: 'Henry Taylor', portfolio: '$135,000', risk: 'Moderate', lastContact: '2024-12-01', fund: 'Real Estate Investment Trust' },
    { id: 9, name: 'Ivy Chen', portfolio: '$275,000', risk: 'High', lastContact: '2024-11-26', fund: 'Cryptocurrency Index' },
    { id: 10, name: 'Jack Anderson', portfolio: '$60,000', risk: 'Low', lastContact: '2024-11-30', fund: 'Money Market Fund' }
  ];

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
          👨‍💼 Financial Advisor Dashboard
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
          Client management and investment advisory center
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
                  📊 Client Portfolio
                </Typography>
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>👥 Total Clients:</strong> 45
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>💰 Assets Under Management:</strong> $2.1M
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: '#1976d2' }}>📅 Pending Consultations:</strong> 8
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
                  📈 Recent Client Activity
                </Typography>
                <List dense sx={{ marginBottom: '20px', flex: 1 }}>
                  {mockClients.slice(0, 3).map((client) => (
                    <ListItem key={client.id} sx={{ padding: '8px 0' }}>
                      <ListItemText
                        primary={client.name}
                        secondary={`Portfolio: ${client.portfolio} | Risk: ${client.risk}`}
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
                  onClick={handleViewClients}
                  sx={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                    }
                  }}
                >
                  View All Clients
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
                  🎓 Educational Content
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Create and manage educational materials for clients to enhance their investment knowledge.
                </Typography>
                <div style={{ flex: 1 }} />
                <Button
                  component={Link}
                  to="/courses"
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #388e3c, #4caf50)',
                    }
                  }}
                >
                  Manage Courses
                </Button>
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
                  📊 Market Insights
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Latest market trends and investment opportunities for your clients.
                </Typography>
                <div style={{
                  backgroundColor: '#fff3e0',
                  padding: '20px',
                  borderRadius: '10px',
                  flex: 1
                }}>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#f57c00' }}>📈 S&P 500:</strong> +2.3% (This Week)
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#f57c00' }}>💻 Tech Sector:</strong> Bullish Outlook
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: '#f57c00' }}>💰 Bond Yields:</strong> 4.2% Average
                  </Typography>
                </div>
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
                  🛠️ Advisory Tools & Reports
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Professional tools to help provide personalized investment advice and generate comprehensive client reports.
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
                    ⚠️ Risk Assessment Tool
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
                    📊 Portfolio Analyzer
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
                    🎯 Recommendation Engine
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
                    📄 Generate Client Report
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
                    📈 Performance Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Dialog
          open={clientsDialogOpen}
          onClose={handleClientsClose}
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
            👥 All Clients
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Amount</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Fund Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockClients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell>{client.name}</TableCell>
                      <TableCell>{client.portfolio}</TableCell>
                      <TableCell>{client.fund}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center' }}>
            <Button
              onClick={handleClientsClose}
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
      </div>
    </div>
  );
};

export default AdvisorDashboard;
