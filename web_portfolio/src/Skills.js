import * as React from "react";
import {
  Box,Grid,Typography,Paper,Stack,Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { TbCarambola } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";



// Estilos personalizados
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  alignContent: "center",
  backgroundColor: "#7b4bbe",
}));

export default function Skills() {
  return (
    <Grid>
        {/* Sección principal */}
    <Box sx={{background:"#b19bff", height:300, borderRadius: "8px", }}>
    <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "100px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <Item
          sx={{
            background: "#7b4bbe",
            padding: "20px",
            width: "90%",
            maxWidth: "600px", // Limita el ancho máximo
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            marginTop:"50px"
          }}
        >
          <Typography variant="h3" sx={{ color: "#ffffff", fontSize: "1.5rem" }}>
            Proyectos Web
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#ffffff", marginTop: 2, fontSize: "1rem" }}
          >
            Habilidades
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: "center",
              marginTop: 3,
              flexWrap: "wrap", // Permite que los chips se ajusten
              gap: "10px", // Espaciado entre chips
            }}
          >
            <Chip color="white" icon={<FaHtml5 />} sx={{color:"#ffffff"}} label="HTML" />
            <Chip color="white" icon={<FaCss3Alt />} sx={{color:"#ffffff"}}label="CSS" />
            <Chip color="white" icon={<SiNodedotjs />} sx={{color:"#ffffff"}} label="Node.js" />
            <Chip color="white" icon={<FaReact />} sx={{color:"#ffffff"}} label="React" />
            <Chip color="white" icon={<FaPython />} sx={{color:"#ffffff"}} label="Python" />
            <Chip color="white" icon={<TbCarambola />} sx={{color:"#ffffff"}} label="Material UI" />
            <Chip color="white" icon={<IoLogoFigma />} sx={{color:"#ffffff"}} label="Figma" />
            <Chip color="white" sx={{color:"#ffffff"}} label="FlutterFlow" />
            <Chip color="white" sx={{color:"#ffffff"}} label="Diseño Web" />
            <Chip color="white" sx={{color:"#ffffff"}} label="UX/UI" />
          </Stack>
        </Item>
      </Box>
    </Box>
      
    </Grid>   
  );
}
