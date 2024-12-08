import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Paper
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

// Componentes de Skills
import Skills from "./Skills";
// Componentes de carrusel
import Pcarousel from "./Pcarousel";
import Scarousel from "./Scarousel";
import Jcarousel from "./Jcarousel";
import JTcarousel from "./JTcarousel";
import CHcarousel from "./CHcarousel";
import Procarousel from "./Procarousel";
//import Bcarousel from "./Bcarousel";

// Estilos personalizados
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  alignContent: "center",
  backgroundColor: "#7b4bbe",
}));

export default function MultiActionAreaCard() {
  return (
    <div className="Card">
      {/* Sección principal */}
      <Skills/>

      {/* Contenedor de proyectos */}
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 10,
          gap: 2,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            {[
              {
                title: "JuriChat - 2024",
                description:
                  "Prototipo desarrollado en Flutterflow con el proyecto JuriChat, una plataforma interactiva basada en un LLM.",
                actions: [
                  {
                    label: "Ver FlutterFlow",
                    link: "https://app.flutterflow.io/share/ley-express-o5njx3",
                  },
                  {
                    label: "Ver Repositorio",
                    link: "https://github.com/EduardoAlvarez12/juri-chat",
                  },
                ],
                carousel: <CHcarousel />,
              },
              {
                title: "Jóvenes en STEM - 2023",
                description:
                  "Sitio web Jóvenes en STEM desarrollado para brindar información sobre actividades e historia del proyecto.",
                  
                
                actions: [
                  {
                    label: "Ver Repositorio",
                    link: "https://github.com/EduardoAlvarez12/jovenes_stem_project",
                  },
                  {
                    label: "Ver sitio",
                    link: "https://www.jovenesenstem-ugb.com/",
                  },
                ],
                tags: ["React", "Django", "Material UI"],
                carousel: <JTcarousel />,
              },
              {
                title: "Jóvenes en STEM - 2023",
                description:
                 "Prototipo realizado en figma para sitio web de Jóvenes en STEM, proyecto de Proyección social,para brindar información sobre las actividades e historia del proyecto.",
                actions: [
                  {
                    label: "Ver Figma",
                    link: "https://www.figma.com/design/CSB5sD6gwQnojtLzZobAFU/TecnoGirls-en-STEM--Sitio-Web?m=auto&t=ZpqNqefd3idoRrQZ-6",
                  },
                ],
                carousel: <Jcarousel />,
              },
              {
                title: "Proyects Pro - 2023",
                description:
                 "El proyecto consiste en realizar una plataforma de programadores y empresas de diferentes rubros,con el fin de establecer como intermediario la plataforma para poder determinar los proyectos que una empresa afiliada a la plataforma.",
                actions: [
                  {
                    label: "Ver Figma",
                    link: "https://www.figma.com/design/CSB5sD6gwQnojtLzZobAFU/TecnoGirls-en-STEM--Sitio-Web?m=auto&t=ZpqNqefd3idoRrQZ-6",
                  },
                ],
                carousel: <Procarousel />,
              },
              {
                title: "Platinum Sponsor/PMV  - 2023",
                description:
                 "Desarrollo de la plataforma “Platinum Sponsor” innovadora para la publicación de material audiovisual, que les permite los usuarios subir y compartir historias, novelas, etc.",
                 actions: [],
                carousel: <Pcarousel />,
              },
              {
                title: "Student’s Grade Calculator - 2022",
                description:
                 "Desarrollo de un sitio web para docentes que facilite el registro de cálculo automático de notas, con capacidad de personalización y modificación de cálculos.",
                actions: [
                  {
                    label: "Ver Repositorio",
                    link: "https://github.com/elenalazzo/Proyecto_SGC",
                  },
                ],
                tags:["Node JS","Mongo DB", "Bootstrap"],
                carousel: <Scarousel />,
              },
              
              // Agrega más proyectos según sea necesario
            ].map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Item>
                  <Card>
                    {project.carousel}
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                        {/* Etiquetas de habilidades */}
                      {project.tags && project.tags.length > 0 && (
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            justifyContent: "center",
                            flexWrap: "wrap", // Para manejar etiquetas largas o muchas etiquetas
                            marginTop: 2,
                          }}
                        >
                          {project.tags.map((tag, i) => (
                            <Chip
                              key={i}
                              label={tag}
                              color="default"
                              sx={{
                                backgroundColor: deepPurple[50],
                                color: deepPurple[800],
                              }}
                            />
                          ))}
                        </Stack>
                      )}
                    </CardContent>
                    <CardActions>
                      {project.actions.map((action, i) => (
                        <Button
                          key={i}
                          size="small"
                          sx={{ color: deepPurple[500] }}
                          href={action.link}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
