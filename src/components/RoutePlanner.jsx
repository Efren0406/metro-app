import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Paper, Grid } from '@mui/material';

// Sample metro stations data (simplified)
const stations = [
  { id: 1, name: 'Observatorio', line: 'Línea 1' },
  { id: 2, name: 'Tacubaya', line: 'Línea 1' },
  { id: 3, name: 'Juanacatlán', line: 'Línea 1' },
  { id: 4, name: 'Chapultepec', line: 'Línea 1' },
  { id: 5, name: 'Sevilla', line: 'Línea 1' },
  { id: 6, name: 'Insurgentes', line: 'Línea 1' },
  { id: 7, name: 'Cuauhtémoc', line: 'Línea 1' },
  { id: 8, name: 'Balderas', line: 'Línea 1' },
  { id: 9, name: 'Salto del Agua', line: 'Línea 1' },
  { id: 10, name: 'Isabel la Católica', line: 'Línea 1' },
  { id: 11, name: 'Pino Suárez', line: 'Línea 1' },
  { id: 12, name: 'Merced', line: 'Línea 1' },
  { id: 13, name: 'Candelaria', line: 'Línea 1' },
  { id: 14, name: 'San Lázaro', line: 'Línea 1' },
  { id: 15, name: 'Moctezuma', line: 'Línea 1' },
  { id: 16, name: 'Balbuena', line: 'Línea 1' },
  { id: 17, name: 'Boulevard Puerto Aéreo', line: 'Línea 1' },
  { id: 18, name: 'Gómez Farías', line: 'Línea 1' },
  { id: 19, name: 'Zaragoza', line: 'Línea 1' },
  { id: 20, name: 'Pantitlán', line: 'Línea 1' },
];

const RoutePlanner = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [result, setResult] = useState(null);

  // Calculate estimated time (simplified calculation)
  const calculateRoute = () => {
    if (!origin || !destination) return;

    // Find the indices of the selected stations
    const originIndex = stations.findIndex(s => s.id === origin);
    const destIndex = stations.findIndex(s => s.id === destination);
    
    if (originIndex === -1 || destIndex === -1) return;

    // Calculate number of stations between origin and destination
    const stationCount = Math.abs(destIndex - originIndex);
    
    // Calculate time (2.5 minutes per station)
    const time = stationCount * 2.5;

    setResult({
      time: time,
      stations: stationCount,
      origin: stations[originIndex],
      destination: stations[destIndex]
    });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Planificador de Ruta
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <TextField
              select
              fullWidth
              label="Estación de origen"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              variant="outlined"
            >
              {stations.map((station) => (
                <MenuItem key={station.id} value={station.id}>
                  {station.name} ({station.line})
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <TextField
              select
              fullWidth
              label="Estación de destino"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              variant="outlined"
            >
              {stations.map((station) => (
                <MenuItem key={station.id} value={station.id}>
                  {station.name} ({station.line})
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={calculateRoute}
              size="large"
              disabled={!origin || !destination}
              sx={{ height: '56px' }}
            >
              Calcular
            </Button>
          </Grid>
        </Grid>
      </Paper>

      
      {result && (
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Resultado de la ruta
          </Typography>
          <Typography>Origen: {result.origin.name} ({result.origin.line})</Typography>
          <Typography>Destino: {result.destination.name} ({result.destination.line})</Typography>
          <Typography>Estaciones intermedias: {result.stations - 1}</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Tiempo estimado: {result.time} minutos
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default RoutePlanner;
