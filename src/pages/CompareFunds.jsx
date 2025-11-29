import React from 'react';
import { Typography, Card, CardContent, Grid, Button, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useFunds } from '../context/FundsContext';

const CompareFunds = () => {
  const { selectedFunds, removeFromComparison } = useFunds();

  if (selectedFunds.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          No Funds Selected for Comparison
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Go to the Funds page and add funds to compare them side by side.
        </Typography>
        <Button variant="contained" sx={{ marginTop: '20px' }} href="/funds">
          Browse Funds
        </Button>
      </div>
    );
  }

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
      default: return 'default';
    }
  };

  return (
    <div style={{
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1400px',
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
          ⚖️ Fund Comparison
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
          Compare your selected funds side by side to make informed investment decisions
        </Typography>

        {selectedFunds.length > 0 ? (
          <>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '15px',
              padding: '20px',
              marginBottom: '30px',
              color: 'white',
              textAlign: 'center'
            }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                📊 Comparing {selectedFunds.length} Fund{selectedFunds.length > 1 ? 's' : ''}
              </Typography>
            </div>

            <TableContainer
              component={Paper}
              sx={{
                marginBottom: '40px',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1a237e' }}>Fund Name</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1a237e' }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1a237e' }}>Risk Level</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1a237e' }}>Returns</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1a237e' }}>AUM</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1a237e' }}>Expense Ratio</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', color: '#1a237e' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedFunds.map((fund, index) => (
                    <TableRow
                      key={fund.id}
                      sx={{
                        '&:nth-of-type(odd)': { backgroundColor: '#fafafa' },
                        '&:hover': { backgroundColor: '#f0f0f0' }
                      }}
                    >
                      <TableCell sx={{ fontWeight: 'bold', color: '#1a237e' }}>{fund.name}</TableCell>
                      <TableCell>
                        <Chip
                          label={fund.type}
                          sx={{
                            backgroundColor: '#e3f2fd',
                            color: '#1976d2',
                            fontWeight: 'bold'
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={fund.risk}
                          color={getRiskColor(fund.risk)}
                          sx={{ fontWeight: 'bold' }}
                        />
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold', color: '#4caf50', fontSize: '16px' }}>
                        {fund.returns}
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{fund.aum}</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>{fund.expenseRatio}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => removeFromComparison(fund.id)}
                          sx={{
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            borderColor: '#f44336',
                            color: '#f44336',
                            '&:hover': {
                              borderColor: '#d32f2f',
                              backgroundColor: '#ffebee',
                            }
                          }}
                        >
                          🗑️ Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                marginBottom: '30px',
                color: '#1a237e',
                fontWeight: 'bold'
              }}
            >
              📋 Detailed Risk Analysis
            </Typography>

            <Grid container spacing={4}>
              {selectedFunds.map((fund) => (
                <Grid item xs={12} md={6} key={fund.id}>
                  <Card sx={{
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}>
                    <CardContent sx={{ padding: '30px' }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          color: '#1976d2',
                          fontWeight: 'bold',
                          marginBottom: '20px',
                          textAlign: 'center'
                        }}
                      >
                        ⚠️ {fund.name} - Risk Factors
                      </Typography>
                      <div style={{ backgroundColor: '#fff3e0', padding: '20px', borderRadius: '10px' }}>
                        <ul style={{ paddingLeft: '20px', margin: 0 }}>
                          {fund.factors.map((factor, index) => (
                            <li
                              key={index}
                              style={{
                                marginBottom: '10px',
                                color: '#424242',
                                lineHeight: 1.6
                              }}
                            >
                              {factor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <div style={{
              textAlign: 'center',
              marginTop: '40px',
              padding: '30px',
              background: 'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 100%)',
              borderRadius: '15px',
              border: '2px solid #4caf50'
            }}>
              <Typography variant="h5" sx={{ color: '#2e7d32', fontWeight: 'bold', marginBottom: '10px' }}>
                🎯 Ready to Invest?
              </Typography>
              <Typography variant="body1" sx={{ color: '#424242', marginBottom: '20px' }}>
                Based on your comparison, you can now make an informed investment decision.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #388e3c, #4caf50)',
                  }
                }}
              >
                🚀 Start Investing
              </Button>
            </div>
          </>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
            borderRadius: '20px',
            border: '3px solid #ff9800'
          }}>
            <Typography variant="h4" sx={{ color: '#e65100', marginBottom: '20px', fontWeight: 'bold' }}>
              🔍 No Funds Selected
            </Typography>
            <Typography variant="h6" sx={{ color: '#bf360c', marginBottom: '30px' }}>
              Add funds to your comparison list to see them side by side
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="/funds"
              sx={{
                padding: '15px 30px',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '25px',
                background: 'linear-gradient(45deg, #ff9800, #ffb74d)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #f57c00, #ff9800)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              📊 Browse Funds
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareFunds;
