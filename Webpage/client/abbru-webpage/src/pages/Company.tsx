import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Link, Box, CssBaseline, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';


const theme = createTheme();

const Company: React.FC = () => {
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
          width:'100vw'
        }}
      >
        {/* Imagen */}
        <Box
          sx={{
            top: { xs: '0.5rem', sm: '0', md: '0' },
            minHeight: '12vh',
            position: { xs: 'relative', sm: 'absolute', md: 'absolute' },
            width: { xs: '30%', sm: '30%', md: 'auto' },
            textAlign: { xs: 'left', sm: 'left', md: 'left' },
          }}
        >
          <img
            src="/abbrulogo.svg"
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
            top: { xs: '0.5rem',sm:'0.5rem',md:'1.5rem' },
            left: { xs:'0rem',sm: '7rem', md: '9.5rem' },
            minHeight: '12vh',
            position: { xs: 'relative', sm: 'relative', md: 'relative' },
            width: { xs: '42%', sm: '50%', md: '50%' },
            textAlign: { xs: 'center', sm: 'center', md: 'center' },
            marginLeft:{xs:'rem',sm:'5.5rem', md:'12rem'}
          }}
        >
          <img
            src="/10marcas.png"
            alt="Logo"
            style={{
              width: 'auto',
              height: '30%',
              maxWidth: '100%',
              minWidth: '25%',
              marginTop: '0.5rem',
              objectFit: 'contain',
            }}
          />
        </Box>       
        <Box
          sx={{
            top: { xs: '0.5rem',sm:'0.5rem',md:'1.5rem' },
            left: { xs:'1rem',sm: '6rem', md: '7rem' },
            minHeight: '12vh',
            position: { xs: 'relative', sm: 'relative', md: 'relative' },
            width: { xs: '20%', sm: '15%', md: '15%' },
            textAlign: { xs: 'center', sm: 'center', md: 'center' },
            
          }}
        >
          <img
            src="/gmax.png"
            alt="Logo"
            style={{
              width: 'auto',
              height: '40%',
              maxWidth: '45%',
              minWidth: '25%',
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
            right: { xs: 'auto', sm: 'auto', md: '3rem' },
            top: { xs: 'auto', sm: 'auto', md: '90%' },
            transform: { md: 'translateY(-50%)' },
          }}
        >
          <Link
            href="/frontend/"
            sx={{
              color: '#FFFFFF',
              mx: 2,
              fontSize: { xs: '7px', sm: '14px', md: '16px' },
            }}
          >
            Inicio
          </Link>
          <Link
            href="/frontend/news"
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
            href="/frontend/aboutus"
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
            href="/frontend/products"
            sx={{
              color: '#FFFFFF',
              mx: 2,
              fontSize: { xs: '7px', sm: '14px', md: '16px' },
            }}
          >
            Producto
          </Link>
          <Link
            href="/frontend/contact"
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
        {/* Body */}
        <Grid
          container
          component="div"
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{ mt: 0, height: '70vh', padding: 0, marginBottom: '12vh',
            backgroundImage:'url("/fondoempresa1.png")' , 
            backgroundSize: {xs:'100% 100%',sm:'cover',md:'cover'},
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat'
          }}
        >
          <Box
            sx={{
              padding: 0,
              marginTop: '0.5rem',
              marginBottom:'0.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'flex-start' },
              justifyContent: 'flex-start',
              width: { xs: '100%', sm: '60%', md: '60%' },
              position: 'relative',
              marginLeft: { sm: '0.5rem', md: '1.5rem' },
              //Preguntar Martin
              backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Fondo oscuro con 60% de opacidad
              borderRadius: '18px',  // Agregar un borde redondeado opcionalmente
            }}
          >
            {/* Typography Principal */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                mt:'0.5rem',
                mx:{ xs: '2%', sm: '1.5%', md: '1.5%'},
                fontFamily: 'Josefin Sans',
                fontSize: { xs: '14px', sm: '20px', md: '26px' },
                fontWeight:'bold',
                textDecoration:'underline',
                color:'#ffffff'
              }}
            >
              Grupo Abbruzzese - Tecnología Médica
            </Typography>

            {/* Primer Typography adicional */}
            <Typography
              variant="body2"
              sx={{
                mx: { xs: '5%', sm: '2%', md: '2%' },
                width: '90%',
                fontFamily: 'Josefin Sans',
                fontSize: { xs: '8px', sm: '14px', md: '16px' ,lg:'18px'},
                mt: { xs: '0.5rem', sm: '0.5rem', md: '0.5rem' },
                color:'#ffffff'
              }}
            >
              Somos una empresa Argentina con sede en Resistencia, Chaco(de cobertura regional); comprometida en ofrecer la más alta calidad en implantes para reconstrucción ósea y enfermedades de los huesos.   
              &nbsp;
              Representamos marcas dedicadas al desarrollo e innovación de productos médicos, buscando la excelencia en servicio y continuo desarrollo profesional médico.
            </Typography>

            {/* Segundo Typography adicional */}
            <Typography
              variant="body2"
              sx={{
                width: '90%',
                mx: { xs: '5%', sm: '2%', md: '2%' },
                fontFamily: 'Josefin Sans',
                fontSize: { xs: '8px', sm: '14px', md: '16px',lg:'18px' },
                mt: { xs: '0.5rem', sm: '0.5rem', md: '1.5rem' },
                color:'#ffffff'
              }}
            >
              Llevamos 23 años en el mercado de la salud, otorgando las mejores alternativas y soluciones para los casos más complejos del trauma ortopédico. 
              &nbsp;
              En Grupo Abbruzzese sabemos lo importante que es poder satisfacer las necesidades de nuestros clientes, por esa razón nos ocupamos de ofrecer productos de última generación y alta calidad, brindando un continuo servicio y manteniendo así los más altos estándares en innovación médica.
            </Typography>
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
            padding: {xs:'0rem',sm:'0.5rem',md:'0.5rem'}, 
          }}
        >
          <Box
            sx={{
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'flex-start' },
              justifyContent: 'flex-start',
              width: { xs: '20%', sm: '40%', md: '40%' },
              position: 'absolute',
              marginLeft: '0',

            }}
          >
       <Typography component='span'
        variant="body2"
        sx={{
        fontFamily: 'Josefin Sans',
        fontSize: { xs: '4px', sm: '8px', md: '10px' },
        color: '#FFFFFF',
        textWrap:'nowrap',
 
          }}
          
          >
            <PlaceIcon></PlaceIcon> 
            Chaco  Monteagudo 578 • Resistencia 
            </Typography>
            <Typography component='span'
        variant="body2"
        sx={{
        fontFamily: 'Josefin Sans',
        fontSize: { xs: '4px', sm: '8px', md: '10px' },
        color: '#FFFFFF',
        textWrap:'nowrap',
        marginLeft:'1.5rem'
          }}
          
          >
           TEL.: (0362) 4430466 / 4438409 
            </Typography>            <Typography component='span'
        variant="body2"
        sx={{
        fontFamily: 'Josefin Sans',
        fontSize: { xs: '4px', sm: '8px', md: '10px' },
        color: '#FFFFFF',
        textWrap:'nowrap',
        marginLeft:'1.5rem'
          }}
          
          >
            gerencia@ortopediaabbruzzese.com.ar
            </Typography>
          </Box>

    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '80%',
      marginLeft:{xs:'3.5rem'}
    }}
    >

    <Typography
      variant="body2"
      sx={{
        fontFamily: 'Josefin Sans',
        fontSize: { xs: '10px', sm: '16px', md: '18px' },
        color: '#FFFFFF',
        textWrap:'nowrap'
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
    marginLeft:{xs:'1.5rem',sm:'1rem',md:'.5rem'}
  }}
>
    <Link href="https://www.facebook.com/people/Grupo-Abbruzzese/100057542465339/" target="_blank" rel="noopener noreferrer">
    <Box
      component="img"
      src="/facebook-square-logo-48.png"
      alt="Facebook"
      sx={{
        width: { xs: '20px', sm: '35px', md: '7vh' }, 
        height: 'auto',
        margin: '0 0.2rem',
        objectFit: 'contain',
      }}
      />
      </Link>

    <Link href="https://www.instagram.com/grupoabbruzzese2024/" target="_blank" rel="noopener noreferrer">
       <Box
      component="img"
      src="/instagram-logo-48.png"
      alt="Instagram"
      sx={{
        width: { xs: '20px', sm: '35px', md: '7vh' }, 
        height: 'auto',
        margin: '0 0.2rem',
        objectFit: 'contain',
      }}
    />
    </Link>

    <Link href="https://www.linkedin.com/company/grupo-abbruzzese/" target="_blank" rel="noopener noreferrer">
    <Box
      component="img"
      src="/linkedin-square-logo-48.png"
      alt="LinkedIn"
      sx={{
        width: { xs: '20px', sm: '35px', md: '7vh' }, 
        height: 'auto',
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
              width: '80%',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Josefin Sans',
                fontSize: { xs: '6px', sm: '8px', md: '10px' },
                color: '#FFFFFF',
                marginRight:'1rem'
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

export default Company;