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
  IconButton,
  Chip,
  Avatar
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';

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
    <Box className="page-section">
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          Consejos para Usuarios del Metro
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}
        >
          Comparte y descubre consejos útiles para navegar por el Metro CDMX.
          Tu experiencia puede ayudar a otros usuarios.
        </Typography>
      </Box>

      <Paper
        elevation={0}
        className="form-container"
        sx={{ mb: 4 }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <ShareIcon color="primary" />
            Comparte tu consejo
          </Typography>
        </Box>

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
            placeholder="Escribe aquí tu consejo para otros usuarios del Metro..."
            InputProps={{
              startAdornment: <LightbulbIcon sx={{ mr: 1, color: 'primary.main', opacity: 0.7 }} />
            }}
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
            placeholder="tu@email.com"
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1, color: 'primary.main', opacity: 0.7 }} />
            }}
          />

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              disabled={!newTip.trim()}
              className="primary-button"
              sx={{
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              Enviar Consejo
            </Button>
          </Box>
        </form>

        {submitted && (
          <Alert
            severity="success"
            sx={{ mt: 3 }}
            icon={<FavoriteIcon />}
          >
            ¡Gracias por tu consejo! Será revisado y publicado pronto.
          </Alert>
        )}
      </Paper>

      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <LightbulbIcon color="primary" />
          Consejos de la Comunidad
        </Typography>

        <Chip
          label={`${tips.length} consejos disponibles`}
          color="primary"
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        />
      </Box>

      <List sx={{ width: '100%', bgcolor: 'transparent' }}>
        {tips.map((tip, index) => (
          <React.Fragment key={index}>
            <Paper
              elevation={0}
              className="tip-card"
              sx={{ mb: 2 }}
            >
              <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                <Box className="tip-content" sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 40,
                        height: 40,
                        mt: 0.5
                      }}
                    >
                      <LightbulbIcon />
                    </Avatar>

                    <Box sx={{ flex: 1 }}>
                      <ListItemText
                        primary={tip}
                        primaryTypographyProps={{
                          variant: 'body1',
                          color: 'text.primary',
                          lineHeight: 1.6,
                          fontWeight: 400,
                        }}
                      />

                      <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Chip
                          label="Consejo útil"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Typography variant="caption" color="text.secondary">
                          Consejo #{index + 1}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            </Paper>
            {index < tips.length - 1 && (
              <Divider
                component="li"
                sx={{
                  my: 1,
                  opacity: 0.3,
                  borderColor: 'divider'
                }}
              />
            )}
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontStyle: 'italic',
            opacity: 0.8
          }}
        >
          Estos consejos son proporcionados por la comunidad de usuarios del Metro CDMX.
        </Typography>
      </Box>
    </Box>
  );
};

export default Tips;
