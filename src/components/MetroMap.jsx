import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

// Import the metro map image (you'll need to add the image to your project)
import metroMapImage from '../assets/metro-map.jpg';

const MetroMap = () => {
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Mapa del Metro de la CDMX
      </Typography>
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 2, 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <Box 
          component="img"
          src={metroMapImage}
          alt="Mapa del Metro de la Ciudad de México"
          sx={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        />
      </Paper>
      
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
        Mapa del Sistema de Transporte Colectivo Metro de la Ciudad de México
      </Typography>
    </Box>
  );
};

export default MetroMap;
