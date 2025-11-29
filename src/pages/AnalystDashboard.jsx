import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Button, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useFunds } from '../context/FundsContext';

const AnalystDashboard = () => {
  const { funds } = useFunds();
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [rankingsDialogOpen, setRankingsDialogOpen] = useState(false);

  const sortedFunds = funds
    .sort((a, b) => parseFloat(b.returns.replace('%', '')) - parseFloat(a.returns.replace('%', '')));

  const topPerformers = sortedFunds.slice(0, 3);

  const handleExportClick = () => {
    setExportDialogOpen(true);
  };

  const handleExportClose = () => {
    setExportDialogOpen(false);
  };

  const handleSelectFiles = () => {
    // Handle select files action
    setExportDialogOpen(false);
  };

  const handleGenerateReport = () => {
    setReportDialogOpen(true);
  };

  const handleReportClose = () => {
    setReportDialogOpen(false);
  };

  const handleViewRankings = () => {
    setRankingsDialogOpen(true);
  };

  const handleRankingsClose = () => {
    setRankingsDialogOpen(false);
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
          📊 Data Analyst Dashboard
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
          Advanced market analysis and investment insights
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
                  🌍 Market Overview
                </Typography>
                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>📈 Market Sentiment:</strong> Bullish - Tech sector leading
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>📊 VIX Index:</strong> 18.5 (Low volatility)
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#1976d2' }}>💹 Economic Indicators:</strong> GDP +2.3%, Inflation 2.1%
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: '#1976d2' }}>💰 Interest Rates:</strong> Federal Funds: 4.25-4.50%
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
                  🏆 Top Performing Funds
                </Typography>
                <List dense sx={{ marginBottom: '20px', flex: 1 }}>
                  {topPerformers.map((fund, index) => (
                    <ListItem key={fund.id} sx={{ padding: '8px 0' }}>
                      <ListItemText
                        primary={`${index + 1}. ${fund.name}`}
                        secondary={`${fund.returns} | ${fund.type} | Risk: ${fund.risk}`}
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
                  onClick={handleViewRankings}
                  sx={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                    }
                  }}
                >
                  View Full Rankings
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
                  ⚖️ Risk Distribution
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Current allocation across risk categories in our fund database.
                </Typography>
                <div style={{
                  backgroundColor: '#fff3e0',
                  padding: '20px',
                  borderRadius: '10px',
                  flex: 1
                }}>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#f57c00' }}>🛡️ Low Risk Funds:</strong> {funds.filter(f => f.risk === 'Low').length} funds
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#f57c00' }}>⚖️ Medium Risk Funds:</strong> {funds.filter(f => f.risk === 'Medium').length} funds
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: '#f57c00' }}>🚀 High Risk Funds:</strong> {funds.filter(f => f.risk === 'High').length} funds
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
                  📋 Report Generation
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Generate comprehensive market analysis and performance reports for stakeholders.
                </Typography>
                <div style={{ flex: 1 }} />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleGenerateReport}
                  sx={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #388e3c, #4caf50)',
                    },
                    marginBottom: '15px'
                  }}
                >
                  Generate Market Report
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleExportClick}
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
                  Export Data
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
                  🔬 Advanced Analytics Tools
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#666', marginBottom: '20px' }}>
                  Powerful tools for deep market analysis, trend forecasting, and investment insights.
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
                    📈 Trend Analysis
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
                    🔗 Correlation Matrix
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
                    ⚠️ Risk Modeling
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
                    📊 Performance Attribution
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
                    🔮 Forecasting Models
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
                    🏭 Sector Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

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
            📊 Market Report - {new Date().toLocaleDateString('en-GB')}
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <div style={{ lineHeight: 1.8 }}>
              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
                📈 Market Overview
              </Typography>
              <Typography variant="body1" paragraph sx={{ marginBottom: '20px' }}>
                Today's market showed mixed performance with technology stocks leading gains while energy sectors faced pressure from fluctuating oil prices.
              </Typography>

              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
                🏆 Top Performers
              </Typography>
              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                {topPerformers.map((fund, index) => (
                  <li key={fund.id} style={{ marginBottom: '8px' }}>
                    <strong>{fund.name}</strong> - {fund.returns} return, {fund.type} fund
                  </li>
                ))}
              </ul>

              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
                📊 Key Metrics
              </Typography>
              <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                  <strong>VIX Index:</strong> 18.5 (Low volatility environment)
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                  <strong>Federal Funds Rate:</strong> 4.25-4.50%
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                  <strong>GDP Growth:</strong> +2.3% (Q3 projection)
                </Typography>
                <Typography variant="body2">
                  <strong>Inflation Rate:</strong> 2.1% (Core CPI)
                </Typography>
              </div>

              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '15px' }}>
                🎯 Investment Recommendations
              </Typography>
              <Typography variant="body1" paragraph>
                Based on current market conditions, we recommend maintaining diversified portfolios with emphasis on technology and healthcare sectors. Consider dollar-cost averaging for long-term investors.
              </Typography>
            </div>
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
          open={exportDialogOpen}
          onClose={handleExportClose}
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
            Local File Manager Page
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px', textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: '#666' }}>
              Access your local file system to select and export data files.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center', gap: '15px' }}>
            <Button
              onClick={handleExportClose}
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
              onClick={handleSelectFiles}
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
              Select Files
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={rankingsDialogOpen}
          onClose={handleRankingsClose}
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
            🏆 Full Fund Rankings
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: '30px' }}>
            <List dense>
              {sortedFunds.map((fund, index) => (
                <ListItem key={fund.id} sx={{ padding: '8px 0' }}>
                  <ListItemText
                    primary={`${index + 1}. ${fund.name}`}
                    secondary={`${fund.returns} | ${fund.type} | Risk: ${fund.risk}`}
                    sx={{
                      '& .MuiListItemText-primary': { color: '#1a237e', fontWeight: 'bold' },
                      '& .MuiListItemText-secondary': { color: '#666' }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions sx={{ padding: '20px', justifyContent: 'center' }}>
            <Button
              onClick={handleRankingsClose}
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
              Close Rankings
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default AnalystDashboard;
