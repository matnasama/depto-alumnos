import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import './footer.css'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Acerca de nosotros
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aquí podrás encontrar los trámites que se realizan en el Departamento de Alumnos y las consultas frecuentes que recibimos.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
                Contactanos
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Bmé. Mitre 1891 (1744), Moreno 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Email: alumnos@unm.edu.ar
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Teléfono: 011 2078-9170
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Seguinos
            </Typography>
            <Link href="https://www.facebook.com/unimoreno" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/unm_oficial/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://twitter.com/unimoreno" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}