import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import MetroMap from './components/MetroMap';
import RoutePlanner from './components/RoutePlanner';
import Tips from './components/Tips';
import './App.css';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Metro CDMX
          </Typography>
          <Button color="inherit" component={Link} to="/">Mapa</Button>
          <Button color="inherit" component={Link} to="/ruta">Ruta</Button>
          <Button color="inherit" component={Link} to="/consejos">Consejos</Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<MetroMap />} />
          <Route path="/ruta" element={<RoutePlanner />} />
          <Route path="/consejos" element={<Tips />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
