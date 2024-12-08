import * as React from 'react';
import Box from '@mui/material/Box';
import Pcards from './Pcards';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Card, CardContent, CardMedia, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import GitHubIcon from '@mui/icons-material/GitHub';
import { deepPurple } from '@mui/material/colors';

export default function App() {
  return (
    <Grid container spacing={2}>
      {/* Encabezado */}
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundImage: `url('https://pinguinodigital.com/wp-content/uploads/2020/06/recursos-de-dise%C3%B1o-gr%C3%A1fico1.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: { xs: '200px', md: '300px' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '4rem' },
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            Portafolio Web
          </Typography>
        </Box>
      </Grid>

      {/* Tarjeta principal */}
      <Grid item xs={12} md={8} lg={6} sx={{ margin: 'auto' }}>
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 3, background: '#b19bff', color: '#ffffff' }}>
          {/* Foto de presentación */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center', // Centra horizontalmente
              alignItems: 'center', // Centra verticalmente
              width: { xs: '100%', md: 200 }, // Asegura el tamaño del contenedor
              height: { xs: 'auto', md: 265 }, // Ajusta la altura según sea necesario
              overflow: 'hidden', // Evita que la imagen se desborde
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 'auto', // Ajusta el ancho de la imagen
                height: 'auto', // Mantiene la proporción
                objectFit: 'contain', // Asegura que la imagen no se recorte
              }}
              image="https://i.postimg.cc/J0yjwZFd/perfil-hayci.png"
              alt="Foto de perfil"
            />
          </Box>
          {/* Contenido */}
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h5"
            sx={{
              fontWeight: 'bold',
              margin: 0,
            }}>
              HAYCI ZUNIGA
            </Typography>
            <Typography variant="body2" gutterBottom>
              Desarrolladora front-end.
            </Typography>
            {/* Iconos de contacto */}
            {[
              {
                icon: <BusinessIcon />,
                text: 'Egresada de la Universidad Gerardo Barrios',
              },
              {
                icon: <EmailIcon />,
                text: <img src="https://i.postimg.cc/JzPGLTtg/correo.png" alt="Correo" style={{ width: '54%', height: 'auto' }} />,
              },
              {
                icon: <GitHubIcon />,
                text: <Link href="https://github.com/HayciZuniga" sx={{ color: deepPurple[500] }}>HayciZuniga</Link>,
              },
              {
                icon: <LinkedInIcon />,
                text: <Link href="https://www.linkedin.com/in/hayci-zuniga-00b7b7319/" sx={{ color: deepPurple[500] }}>Perfil</Link>,
              },
            ].map((item, index) => (
              <Grid container spacing={2} alignItems="center" key={index}>
                <Grid item>
                  <IconButton sx={{ color: '#3f0773' }}>{item.icon}</IconButton>
                </Grid>
                <Grid item xs>
                  <Typography variant="body2">{item.text}</Typography>
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>

      {/* Otros componentes */}
      <Grid item xs={12}>
        <Pcards />
      </Grid>

      {/* Footer */}
      <Grid item xs={12}>
        <Box
          component="footer"
          sx={{
            backgroundColor: '#f5f5f5',
            padding: 2,
            textAlign: 'center',
            borderTop: '1px solid #e0e0e0',
            marginTop: 5,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} HayciZuniga. Todos los derechos reservados.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
