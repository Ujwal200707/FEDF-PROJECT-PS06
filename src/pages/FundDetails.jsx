import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, Card, CardContent, Chip, List, ListItem, ListItemText, Grid } from '@mui/material';
import { useFunds } from '../context/FundsContext';

const FundDetails = () => {
  const { id } = useParams();
  const { funds, addToComparison } = useFunds();
  const fund = funds.find(f => f.id === parseInt(id));

  if (!fund) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5">Fund not found</Typography>
        <Button component={Link} to="/funds" variant="contained" sx={{ marginTop: '20px' }}>
          Back to Funds
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
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <Button
          component={Link}
          to="/funds"
          variant="outlined"
          sx={{
            marginBottom: '30px',
            borderRadius: '25px',
            padding: '8px 20px',
            fontWeight: 'bold'
          }}
          startIcon="←"
        >
          Back to Funds
        </Button>

        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          padding: '30px',
          background: `linear-gradient(135deg, ${getRiskColor(fund.risk) === 'success' ? '#e8f5e8' : getRiskColor(fund.risk) === 'warning' ? '#fff3e0' : '#ffebee'} 0%, ${getRiskColor(fund.risk) === 'success' ? '#f1f8e9' : getRiskColor(fund.risk) === 'warning' ? '#fff8e1' : '#ffcdd2'} 100%)`,
          borderRadius: '15px',
          border: `3px solid ${getRiskColor(fund.risk) === 'success' ? '#4caf50' : getRiskColor(fund.risk) === 'warning' ? '#ff9800' : '#f44336'}`
        }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#1a237e',
              marginBottom: '20px'
            }}
          >
            {fund.name}
          </Typography>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <Chip
              label={fund.type}
              sx={{
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '8px 16px'
              }}
            />
            <Chip
              label={`Risk: ${fund.risk}`}
              color={getRiskColor(fund.risk)}
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '8px 16px'
              }}
            />
          </div>
        </div>

        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <Card sx={{ borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <CardContent sx={{ padding: '30px' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}>
                  📊 Overview
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '16px', lineHeight: 1.7, color: '#424242' }}>
                  {fund.description}
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginTop: '30px', marginBottom: '20px' }}>
                  📈 Key Metrics
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <div style={{
                      textAlign: 'center',
                      padding: '20px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '10px',
                      border: '2px solid #e9ecef'
                    }}>
                      <Typography variant="h4" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                        {fund.returns}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        Annual Returns
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <div style={{
                      textAlign: 'center',
                      padding: '20px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '10px',
                      border: '2px solid #e9ecef'
                    }}>
                      <Typography variant="h4" sx={{ color: '#2196f3', fontWeight: 'bold' }}>
                        {fund.aum}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        Assets Under Management
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <div style={{
                      textAlign: 'center',
                      padding: '20px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '10px',
                      border: '2px solid #e9ecef'
                    }}>
                      <Typography variant="h4" sx={{ color: '#ff9800', fontWeight: 'bold' }}>
                        {fund.expenseRatio}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        Expense Ratio
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card sx={{ borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <CardContent sx={{ padding: '30px' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}>
                  🏗️ Fund Structure
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '15px', lineHeight: 1.6, color: '#424242' }}>
                  {fund.structure}
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
              <CardContent sx={{ padding: '30px' }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', marginBottom: '20px' }}>
                  ⚠️ Risk Factors
                </Typography>
                <List dense>
                  {fund.factors.map((factor, index) => (
                    <ListItem key={index} sx={{ padding: '8px 0' }}>
                      <ListItemText
                        primary={factor}
                        sx={{
                          '& .MuiListItemText-primary': {
                            color: '#424242',
                            fontSize: '14px'
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Button
              onClick={() => addToComparison(fund)}
              variant="contained"
              fullWidth
              sx={{
                padding: '15px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '10px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
                }
              }}
            >
              ⚖️ Add to Comparison
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FundDetails;
