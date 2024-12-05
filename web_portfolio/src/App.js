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
    <Grid>
    
      <Box  sx={{
          backgroundImage: `url('https://pinguinodigital.com/wp-content/uploads/2020/06/recursos-de-dise%C3%B1o-gr%C3%A1fico1.jpg')`,
          backgroundSize: '100%', // Ajusta la imagen para que cubra todo el área del contenedor
          backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
          backgroundPosition: 'center', // Centra la imagen en el contenedor
          height: "240px",
          position: "relative",
          display:"flex",
          justifyContent:"center",
          alignItems:"left",
          fontSize:"100px",
          color:"#FFFFFF"
            //background:
             // "linear-gradient(to right, white 0%, #5458ca 30%, #575cfc 70%, white 100%)",
           // boxShadow:
             // "10px 0 10px -10px rgba(0, 0, 0, 0.3), -10px 0 10px -10px rgba(0, 0, 0, 0.3)",
        }}>
          <Typography variant="h1" sx={{marginTop:10}} gutterBottom>
          Portafolio Web
          </Typography>
        
       </Box> 
 
        <Box sx={{background:"#7b4bbe"}}>
       <Card sx={{ display: 'flex', boxShadow: 3, maxWidth: 650, margin: 'auto', marginTop:3, background:"#b19bff", color:"#ffffff"}}>
      {/* Foto de presentación */}
      <CardMedia
        component="img"
        sx={{ width: 200, height: 265 }}
        image="https://i.postimg.cc/J0yjwZFd/perfil-hayci.png"
        alt="Foto de perfil"
      />

      {/* Contenido */}
      <CardContent sx={{ flex: 1, color:"#ffffff"}}>
        {/* Nombre y descripción */}
        <Typography gutterBottom variant="h5" component="div">
          HAYCI ZUNIGA
        </Typography>
        <Typography variant="body2" gutterBottom>
          Desarrolladora front-end.
        </Typography>
         {/* Iconos de contacto */}
         <Grid container spacing={2} alignItems="center">
          {/* Correo */}
          <Grid item>
            <IconButton aria-label="correo" sx={{ color:"#3f0773" }} >
            <BusinessIcon/>
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography variant="body2">
             Estudiante de Universidad Gerardo Barrios
            </Typography>
          </Grid>
          </Grid>

        {/* Iconos de contacto */}
        <Grid container spacing={2} alignItems="center">
          {/* Correo */}
          <Grid item>
            <IconButton aria-label="correo" sx={{ color:"#3f0773" }}>
              <EmailIcon />
            </IconButton>
          </Grid>
            <Grid item xs>
          <img 
            src="https://i.postimg.cc/JzPGLTtg/correo.png" 
            alt="Descripción de la imagen" 
            style={{ width: '49%', maxHeight: '50px', objectFit: 'contain' }} 
          />
        </Grid>
         
        </Grid>
        {/* Iconos de cgithub */}
        <Grid container spacing={2} alignItems="center">
          {/* Correo */}
          <Grid item>
            <IconButton aria-label="correo" sx={{ color:"#3f0773"}}>
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
          <Link href="https://github.com/HayciZuniga"  sx={{ color: deepPurple[500] }}>HayciZuniga</Link>
          </Grid>
        </Grid>
           {/* Iconos de cgithub */}
          <Grid container spacing={2} alignItems="center">
          {/* Correo */}
          <Grid item>
            <IconButton aria-label="correo" sx={{ color:"#3f0773" }}>
              <LinkedInIcon/>
            </IconButton>
          </Grid>
          <Grid item xs>
          <Link href="https://www.linkedin.com/in/hayci-zuniga-00b7b7319/"  sx={{ color: deepPurple[500] }}>Perfil</Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Box>
    <Pcards/>
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5', // Fondo del pie de página
        padding: 2, // Espaciado interno
        textAlign: 'center', // Centrar texto
        borderTop: '1px solid #e0e0e0', // Línea superior
        marginTop: 5, // Espaciado superior
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} HayciZuniga. Todos los derechos reservados.
      </Typography>
    </Box>
    </Grid>
    
  );
}