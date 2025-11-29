import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, Button, Chip, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useFunds } from '../context/FundsContext';

const FundsList = () => {
  const { funds, addToComparison } = useFunds();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterRisk, setFilterRisk] = useState('');

  const filteredFunds = funds.filter(fund => {
    const matchesSearch = fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fund.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === '' || fund.type === filterType;
    const matchesRisk = filterRisk === '' || fund.risk === filterRisk;
    return matchesSearch && matchesType && matchesRisk;
  });

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
      default: return 'default';
    }
  };

  const fundTypes = [...new Set(funds.map(fund => fund.type))];
  const riskLevels = [...new Set(funds.map(fund => fund.risk))];

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
            marginBottom: '40px',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}
        >
          Mutual Funds Directory
        </Typography>

        {/* Search and Filter Section */}
        <Card sx={{
          padding: '30px',
          marginBottom: '40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: '15px'
        }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: '30px' }}>
            🔍 Find Your Perfect Fund
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <TextField
                label="Search funds"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                    '&.Mui-focused fieldset': { borderColor: 'white' }
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.8)' },
                  '& .MuiInputBase-input': { color: 'white' }
                }}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>Fund Type</InputLabel>
                <Select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  label="Fund Type"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '& .MuiSelect-icon': { color: 'white' },
                    '& .MuiSelect-select': { color: 'white' }
                  }}
                >
                  <MenuItem value="">All Types</MenuItem>
                  {fundTypes.map(type => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>Risk Level</InputLabel>
                <Select
                  value={filterRisk}
                  onChange={(e) => setFilterRisk(e.target.value)}
                  label="Risk Level"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                    '& .MuiSelect-icon': { color: 'white' },
                    '& .MuiSelect-select': { color: 'white' }
                  }}
                >
                  <MenuItem value="">All Risks</MenuItem>
                  {riskLevels.map(risk => (
                    <MenuItem key={risk} value={risk}>{risk}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Card>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#666',
            fontStyle: 'italic'
          }}
        >
          📊 Showing {filteredFunds.length} mutual fund{filteredFunds.length !== 1 ? 's' : ''} • Click to explore details
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {filteredFunds.map((fund) => (
            <Grid item xs={12} sm={6} lg={4} key={fund.id}>
              <Card sx={{
                height: '100%',
                minHeight: '450px',
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
                  background: `linear-gradient(90deg, ${getRiskColor(fund.risk) === 'success' ? '#4caf50' : getRiskColor(fund.risk) === 'warning' ? '#ff9800' : '#f44336'}, ${getRiskColor(fund.risk) === 'success' ? '#66bb6a' : getRiskColor(fund.risk) === 'warning' ? '#ffb74d' : '#ef5350'})`
                }} />

                <CardContent sx={{ flexGrow: 1, padding: '30px', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                    {fund.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph sx={{ lineHeight: 1.6, flex: 1 }}>
                    {fund.description}
                  </Typography>

                  <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Chip
                      label={fund.type}
                      size="small"
                      sx={{
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        fontWeight: 'bold'
                      }}
                    />
                    <Chip
                      label={`Risk: ${fund.risk}`}
                      color={getRiskColor(fund.risk)}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </div>

                  <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '10px', flex: 1 }}>
                    <Typography variant="body2" sx={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#1976d2' }}>📈 Returns:</strong> {fund.returns}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#1976d2' }}>💰 AUM:</strong> {fund.aum}
                    </Typography>
                    <Typography variant="body2">
                      <strong style={{ color: '#1976d2' }}>💸 Expense Ratio:</strong> {fund.expenseRatio}
                    </Typography>
                  </div>
                </CardContent>

                <div style={{ padding: '30px', paddingTop: 0, backgroundColor: '#fafafa' }}>
                  <Button
                    component={Link}
                    to={`/funds/${fund.id}`}
                    variant="contained"
                    fullWidth
                    sx={{
                      marginBottom: '15px',
                      borderRadius: '25px',
                      fontWeight: 'bold',
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #5a6fd8, #6a4190)',
                      }
                    }}
                  >
                    🔍 View Details
                  </Button>
                  <Button
                    onClick={() => addToComparison(fund)}
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
                    ⚖️ Add to Compare
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredFunds.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <Typography variant="h5" sx={{ color: '#666', marginBottom: '16px' }}>
              🔍 No funds found
            </Typography>
            <Typography variant="body1" sx={{ color: '#999' }}>
              Try adjusting your search criteria or browse all funds.
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default FundsList;