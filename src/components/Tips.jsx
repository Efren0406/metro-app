import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  Container,
  Alert,
  IconButton
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Sample tips data
const initialTips = [
  "Trate de mirar hacia los señalamientos, carteles o personal del metro que esté disponible para poder ubicarse.",
  "Busque un mapa de las líneas del metro (que normalmente se encuentran en las paredes de los andenes y transbordes).",
  "Si está transbordando trate de seguir el flujo de gente y carteles que lo lleven al cambio de línea (normalmente el color de la zona cambia de acuerdo a la línea en la que se encuentra).",
  "Puede acercarse a torniquetes y taquillas donde normalmente hay personal del metro que lo pueden orientar.",
  "Lea las señales cuando esté en terminales que indiquen las rutas de los transportes.",
  "Siga las flechas y los iconos de las imágenes en los carteles.",
  "Solo cruce los torniquetes cuando esté seguro de que ha llegado a su destino.",
  "Para poder utilizar el metro necesita una tarjeta de movilidad integrada para la ciudad de México.",
  "Las recargas de la tarjeta se hacen en las taquillas marcadas con señalamientos por personal autorizado y competente.",
  "Consulta el Mapa del Metro antes de salir o usa apps como 'Metro CDMX' para planear tu ruta.",
  "Ten a la mano tu tarjeta de movilidad integrada (MI) para poder acceder al metro.",
  "Sigue la señalización por colores y nombres de línea (por ejemplo, rosa para Línea 1, amarillo para Línea 5, café para Línea 9)."
];

const Tips = () => {
  const [tips, setTips] = useState(initialTips);
  const [newTip, setNewTip] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor ingresa un correo electrónico válido');
      return;
    }
    
    if (!newTip.trim()) {
      return;
    }
    
    // In a real app, you would send this to a backend
    setTips([newTip, ...tips]);
    setNewTip('');
    setEmail('');
    setSubmitted(true);
    setEmailError('');
    
    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Consejos para Usuarios del Metro
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Comparte tu consejo
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="Tu consejo"
            value={newTip}
            onChange={(e) => setNewTip(e.target.value)}
            margin="normal"
            required
          />
          
          <TextField
            fullWidth
            variant="outlined"
            label="Tu correo electrónico (opcional)"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError('');
            }}
            margin="normal"
            error={!!emailError}
            helperText={emailError}
          />
          
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              disabled={!newTip.trim()}
            >
              Enviar Consejo
            </Button>
          </Box>
        </form>
        
        {submitted && (
          <Alert severity="success" sx={{ mt: 2 }}>
            ¡Gracias por tu consejo! Será revisado y publicado pronto.
          </Alert>
        )}
      </Paper>
      
      <Typography variant="h5" gutterBottom>
        Consejos de la Comunidad
      </Typography>
      
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {tips.map((tip, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={tip}
                primaryTypographyProps={{
                  variant: 'body1',
                  color: 'text.primary',
                }}
              />
            </ListItem>
            {index < tips.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Tips;
