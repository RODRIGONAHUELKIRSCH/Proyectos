import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Link, Box, CssBaseline, Typography } from '@mui/material';

const theme = createTheme();


const News: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        component="main"
        sx={{ height: '100vh', width: '100vw', backgroundColor: '#ffffff', position: 'relative', margin: 0 }}
      >
        {/* Header */}
        <Grid
          container
          component="div"
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            margin: 0,
            height: '18vh',
            backgroundColor: '#00349a',
            position: 'relative', 
          }}
        >
          {/* Imagen */}
          <Box
            sx={{
              top: { xs: '0.5rem', sm: '0', md: '0' },
              minHeight: '12vh',
              position: { xs: 'relative', sm: 'absolute', md: 'absolute' },
              width: { xs: '50%', sm: '50%', md: 'auto' },
              textAlign: { xs: 'center', sm: 'left', md: 'left' },
            }}
          >
            <img
              src="../public/abbrulogo.svg"
              alt="Logo"
              style={{
                width: 'auto',
                height: '40%',
                maxWidth: '70%',
                minWidth: '30%',
                marginTop: '0.5rem',
                objectFit: 'contain',
              }}
            />
          </Box>
          <Box
            sx={{
              top: { xs: '0.5rem' },
              left: { sm: '12rem', md: '15rem' },
              minHeight: '12vh',
              position: { xs: 'relative', sm: 'relative', md: 'relative' },
              width: { xs: '50%', sm: '50%', md: '50%' },
              textAlign: { xs: 'center', sm: 'center', md: 'center' },
            }}
          >
            <img
              src="../public/marcas4.png"
              alt="Logo"
              style={{
                width: 'auto',
                height: '40%',
                maxWidth: '70%',
                minWidth: '30%',
                marginTop: '0.5rem',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Enlaces */}
          <Box
            sx={{
              padding: 0,
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'row', md: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'flex-end', md: 'flex-end' },
              width: { xs: '100%', sm: '100%', md: 'auto' },
              position: { xs: 'relative', sm: 'relative', md: 'absolute' },
              right: { xs: 'auto', sm: 'auto', md: '1rem' },
              top: { xs: 'auto', sm: 'auto', md: '90%' },
              transform: { md: 'translateY(-50%)' },
            }}
          >
            <Link
              href="/home"
              sx={{
                color: '#FFFFFF',
                mx: 2,
                fontSize: { xs: '7px', sm: '14px', md: '16px' },
              }}
            >
              Inicio
            </Link>
            <Link
              href="/news"
              sx={{
                color: '#FFFFFF',
                mx: 2,
                fontSize: { xs: '7px', sm: '14px', md: '16px' },
                whiteSpace: 'nowrap',
              }}
            >
              Eventos
            </Link>
            <Link
              href="/aboutus"
              sx={{
                color: '#FFFFFF',
                mx: 2,
                fontSize: { xs: '7px', sm: '14px', md: '16px' },
                whiteSpace: 'nowrap',
              }}
            >
              La Empresa
            </Link>
            <Link
              href="/products"
              sx={{
                color: '#FFFFFF',
                mx: 2,
                fontSize: { xs: '7px', sm: '14px', md: '16px' },
              }}
            >
              Producto
            </Link>
            <Link
              href="/contact"
              sx={{
                color: '#FFFFFF',
                mx: 2,
                fontSize: { xs: '7px', sm: '14px', md: '16px' },
              }}
            >
              Contacto
            </Link>
          </Box>
        </Grid>

       
        {/* Footer positioned at the bottom */}
        <Grid
          container
          component="div"
          size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          sx={{
            position: 'absolute',
            minWidth: '100vw',
            bottom: 0,
            height: '12vh',
            backgroundColor: '#89898e',
            padding: '1rem', 
          }}
        >

<Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '80%',
      marginLeft:'1.5rem'
    }}
  >

<Typography
      variant="body2"
      sx={{
        fontFamily: 'Josefin Sans',
        fontSize: { xs: '14px', sm: '16px', md: '18px' },
        color: '#FFFFFF',
        textWrap:'nowrap',
      }}
    >
      Síguenos en: 
    </Typography>
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',      
    width: '15%',
    marginLeft:{xs:'2rem',sm:'1rem',md:'.5rem'}
  }}
>
  <Link href="https://www.facebook.com/people/Grupo-Abbruzzese/100057542465339/" target="_blank" rel="noopener noreferrer">
    <Box
      component="img"
      src="../public/facebook-square-logo-48.png"
      alt="Facebook"
      sx={{
        width: { xs: '25px', sm: '35px', md: '7vh' }, 
        height: 'auto',
        margin: '0 0.2rem',
        objectFit: 'contain',
      }}
    />
  </Link>

  <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <Box
      component="img"
      src="../public/instagram-logo-48.png"
      alt="Instagram"
      sx={{
        width: { xs: '25px', sm: '35px', md: '7vh' }, 
        height: 'auto',
        margin: '0 0.2rem',
        objectFit: 'contain',
      }}
    />
  </Link>

  <Link href="https://www.linkedin.com/company/grupo-abbruzzese/" target="_blank" rel="noopener noreferrer">
    <Box
      component="img"
      src="../public/linkedin-square-logo-48.png"
      alt="LinkedIn"
      sx={{
        width: { xs: '25px', sm: '35px', md: '7vh' }, 
        margin: '0 0.2rem',
        objectFit: 'contain',
      }}
    />
  </Link>
</Box>

  </Box>
       
          {/* Box para el texto en la parte inferior derecha */}
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              padding: '0.5rem',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Josefin Sans',
                fontSize: { xs: '6px', sm: '8px', md: '10px' },
                color: '#FFFFFF',
              }}
            >
           &copy; {new Date().getFullYear()} Grupo Abbruzzese. Todos los derechos reservados.
       </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default News;