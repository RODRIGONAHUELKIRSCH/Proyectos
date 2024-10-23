import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Link, Box, CssBaseline, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import ImageSlider from '../../Types/ImageSlider'; 
import GoogleMapsComponent from '../GoogleMaps/GoogleMapsComponent';

const theme = createTheme();

function Inicio() {
  const slides = [
    {
      image: '../public/sl1.png',
      link: '/aboutus'
    },
    {
      image: '../public/sl2.png', // Cambia estas rutas a las imágenes que tengas
      link: '/products'
     },
  ];
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Grid 
      container
      component="main"
      sx={{ height: '100%', width: '100vw', backgroundColor: '#ffffff',
        minWidth:'100%',
        maxWidth:'100%',
        position: 'relative', margin: 0,padding:0}}
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
            src="../public/10marcas.png"
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
            src="../public/gmax.png"
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
            href="/"
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

      <Grid
          container
          component="div"
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{ flexGrow:'1',mt: 0,height:'auto' ,maxHeight:'auto',minHeight: 'auto', padding: 0 ,backgroundColor:'#e7e7e7',width:'100vw',maxWidth:'100%', minWidth:'100%'}}
        >
          <Box
            sx={{
              padding: 0,
              heigth:'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' },
              justifyContent: 'flex-start',
              width: { xs: '100%', sm: '90%', md: '95%' },
              position: 'relative',
              marginLeft: { sm: '2.5rem', md: '1.5rem' },
              marginBottom:'1.5rem'
            }}
          >
          <ImageSlider  slides={slides}  />
          </Box>


    {/* Cada Box contendrá un link con una imagen y un texto centrado */}
    <Box
            sx={{
              height:{xs:'8vh',sm:'auto',md:'auto'},
              padding: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' },
              justifyContent: 'space-around',
              width: { xs: '100%', sm: '90%', md: '95%' },
              position: 'relative',
              marginLeft: { sm: '2.5rem', md: '2rem' },
              marginBottom:{xs:'0rem'},
              marginTop:'2rem',
            }}
          >
    <Box
      sx={{
        height:{xs:'8vh',sm:'auto',md:'auto'},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: {xs:'20%',sm:'22%',md:'33%'}, 
        textAlign: 'center', // Centra el texto
      }}
    >
      <Link href="/aboutus" sx={{textDecoration:'none',   
       '&:hover': { textDecoration: 'none',color:'#00349a'
          }}}>
        <img src="q1.png" alt="La Empresa" style={{ width: '80%', height: 'auto',minWidth:'30%' ,minHeight:'30%'}} />
        <Typography variant="body1" sx={{color:'#727376',
        '&:hover': { color: '#00349a', textDecoration: 'underline'
          },
          fontSize:{xs: '12px', sm: '14px', md: '16px'}, 
          textWrap:'nowrap'
          }}>La Empresa</Typography>
      </Link>
    </Box>

    <Box
      sx={{
        height:{xs:'8vh',sm:'auto',md:'auto'},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: {xs:'20%',sm:'22%',md:'33%'},
        textAlign: 'center',
      }}
    >
      <Link href="/products" sx={{textDecoration:'none',
      '&:hover': { textDecoration: 'none',color:'#00349a'
          }}}>
        <img src="q2.png" alt="Productos" style={{ width: '80%', height: 'auto',minWidth:'30%' }} />
        <Typography variant="body1" sx={{color:'#727376',
        '&:hover': { color: '#00349a', textDecoration: 'underline'
          },

          fontSize:{xs: '12px', sm: '14px', md: '16px'}
          }}>Productos</Typography>
      </Link>
    </Box>

    <Box
      sx={{
        height:{xs:'8vh',sm:'auto',md:'auto'},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: {xs:'20%',sm:'22%',md:'33%'},
        textAlign: 'center',
      }}
    >
      <Link href="/news" sx={{textDecoration:'none',
      '&:hover': { textDecoration: 'none',color:'#00349a'
          }}}>
        <img src="a3.png" alt="Eventos" style={{ width: '80%', height: 'auto',minWidth:'30%' }} />
        <Typography variant="body1" sx={{color:'#727376',
        '&:hover': { color: '#00349a', textDecoration: 'underline',
          },
          fontSize:{xs: '12px', sm: '14px', md: '16px'}
          }}>Eventos</Typography>
      </Link>
    </Box>
    </Box>
    

      <Box
    sx={{
      height: 'auto', // Altura del box principal
      marginTop: {xs:'3.5rem',sm:'1rem',md:'2rem'}, // Margin top de 2rem
      width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden', // Evita barra de desplazamiento horizontal
      overflowY: 'hidden',   // Permite scroll vertical si es necesario
    }}
  >
    <Box
      sx={{
        heigth:'auto',
        width: { xs: '90%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden', 
      }}
    >
      <Link
        href="/news"
        sx={{
          textDecoration: 'none',
          justifyContent: 'center',
          display: 'flex',
          overflowX: 'hidden',
          padding:'10px'
        }}
      >
        <img
          src="/bannereventos.png"
          alt="Revistas"
          style={{
            maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
            height: 'auto', // Mantener proporción de la imagen
          }}
        />
      </Link>
    </Box>
  </Box>

  <Box
    sx={{
      height: 'auto', // Altura del box principal
      marginTop: {xs:'0.7rem',sm:'1rem',md:'2rem'}, // Margin top de 2rem
      width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden', // Evita barra de desplazamiento horizontal
      overflowY: 'hidden',   // Permite scroll vertical si es necesario
    }}
  >
    <Box
      sx={{
        heigth:'10vh',
        width: { xs: '90%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden', 
      }}
    >
      <Link
        href="/"
        sx={{
          textDecoration: 'none',
          justifyContent: 'center',
          display: 'flex',
          overflowX: 'hidden',
          padding:'10px'
        }}
      >
        <img
          src="/MAG-ABBRUZZE.png"
          alt="Revistas"
          style={{
            maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
            height: 'auto', // Mantener proporción de la imagen
          }}
        />
      </Link>
    </Box>
  </Box>
  <Box
    sx={{
      height: 'auto', // Altura del box principal
      marginTop: {xs:'0rem',sm:'1rem',md:'0.5rem'}, // Margin top de 2rem
      width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden', // Evita barra de desplazamiento horizontal
      overflowY: 'hidden',   // Permite scroll vertical si es necesario
    }}
  >
    <Box
      sx={{
        heigth:'auto',
        width: { xs: '85%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden', 
      }}
    >
      <Link
        href="/"
        sx={{
          textDecoration: 'none',
          justifyContent: 'center',
          display: 'flex',
          overflowX: 'hidden',
        }}
      >
        <img
          src="/TOD-REV.png"
          alt="Revistas"
          style={{
            maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
            height: 'auto', // Mantener proporción de la imagen
          }}
        />
      </Link>
    </Box>
  </Box>
  
  <Box
    sx={{
      height: 'auto', // Altura del box principal
      marginTop: {xs:'0.5rem',sm:'1rem',md:'2.5rem'}, // Margin top de 2rem
      width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden', // Evita barra de desplazamiento horizontal
      overflowY: 'hidden',   // Permite scroll vertical si es necesario
      marginBottom:'0rem'
    }}
  >
    <Box
      sx={{
        heigth:'auto',
        width: { xs: '85%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden', 
      }}
    >
      <Link
        href="/"
        sx={{
          textDecoration: 'none',
          justifyContent: 'center',
          display: 'flex',
          overflowX: 'hidden',
        }}
      >
        <img
          src="/camino12423.png"
          alt="Revistas"
          style={{
            maxWidth: '100%', // La imagen se ajustará al contenedor sin desbordarse
            height: 'auto', // Mantener proporción de la imagen
          }}
        />

      </Link>
    </Box>
  </Box>

  <Box
    sx={{
      height: 'auto', // Altura del box principal
      marginTop: {xs:'0.5rem',sm:'1rem',md:'2.5rem'}, // Margin top de 2rem
      width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden', // Evita barra de desplazamiento horizontal
      overflowY: 'hidden',   // Permite scroll vertical si es necesario
      marginBottom:'1rem'
    }}
  >
    <Box
      sx={{
        heigth:{xs:'8vh',sm:'24vh',md:'50vh'},
        width: { xs: '85%', sm: '90%', md: '90%' }, // Ajustar el ancho internamente
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden', 
      }}
    >
      <GoogleMapsComponent />
    </Box>
  </Box>
  <Box
    sx={{
      height: '12vh', // Altura del box principal
// Margin top de 2rem
      width: '100%', // Aseguramos que el ancho del Box sea del 100% del contenedor padre
      display: 'flex',

      overflowX: 'hidden', // Evita barra de desplazamiento horizontal
      overflowY: 'hidden',   // Permite scroll vertical si es necesario
      marginBottom:'0rem',
      backgroundColor:'#89898e'
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
    marginLeft:{xs:'2rem',sm:'1rem',md:'.5rem'}
  }}
>
    <Link href="https://www.facebook.com/people/Grupo-Abbruzzese/100057542465339/" target="_blank" rel="noopener noreferrer">
    <Box
      component="img"
      src="../public/facebook-square-logo-48.png"
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
      src="../public/instagram-logo-48.png"
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
      src="../public/linkedin-square-logo-48.png"
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
    </Box>

  
   </Grid>
  
    </Grid>
  </ThemeProvider>
  );
}

export default Inicio;