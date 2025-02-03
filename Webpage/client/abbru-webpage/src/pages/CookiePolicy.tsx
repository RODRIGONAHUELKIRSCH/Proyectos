
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/company/grupo-abbruzzese/" target="_blank">
        Grupo Abbruzzese
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function CookiePolicy() {
  // Estado para los valores de los campos

  



  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center',  backgroundImage: `url("/ortopedia4.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', }}>
        <CssBaseline />
        <Grid size={{ xs: 12, sm: 8, md: 5 }} component={Paper} elevation={6} square>
          <Box
            sx={{
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px',
              
            }}
          >

            <Typography color='red' component="h1" variant="h5" sx={{fontSize:{xs:'12px',sm:'16px',md:'24px'}}}>
             ¡Politica de Cookies!
            </Typography>


            <Box   sx={{ mt: 1 }}>
            <Typography color='grey' component="h1" variant='subtitle2'  sx={{mt:1,fontSize:{xs:'8px',sm:'12px',md:'24px'}}}>
            ¿Què son las cookies?
            </Typography>


          <Typography  component="p" sx={{fontSize:{xs:'8px',sm:'12px',md:'14px'}}}>
          Una cookie es un archivo que incluye una pequeña cantidad de datos que se descargan e instalan en un dispositivo mientras se navega por un sitio web. En vistas posteriores del sitio web, las cookies se devuelven al sitio web original o a otros sitios web que reconocen dicha cookie. Las cookies son útiles porque permiten almacenar y recuperar información sobre el número de visitantes, los hábitos de navegación de los usuarios y dispositivos y, según la información que contienen y la forma en que los usuarios utilizan el dispositivo, también pueden ser útiles para reconocer a los usuarios.
          </Typography>    
            <Typography component="p" sx={{fontSize:{xs:'8px',sm:'12px',md:'14px'}}}>
            Las cookies son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestación de servicios interactivos, facilitándole la navegación y usabilidad de nuestra web. 
            </Typography>
          <Typography color='grey' component="h1" variant='subtitle2'  sx={{mt:1,fontSize:{xs:'8px',sm:'12px',md:'24px'}}}>
            ¿Para què las utilizamos?
            </Typography>
            <Typography  component="p" sx={{fontSize:{xs:'8px',sm:'12px',md:'14px'}}}>
              Utilizamos cookies para brindarle una mejor experiencia de usuario y para controlar el acceso a diferentes paginas dentro de la web.  </Typography>
            <Typography sx={{ mt: 1 ,fontSize:{xs:'8px',sm:'12px',md:'14px'}}}  component="p">Por ejemplo si acepta las cookies se le dara acceso a las paginas de eventos y productos para acceder a estas paginas es necesario loguearse(ademas de aceptar las cookies) tambien accede a que guardemos sus datos de inicio de sesion (estos solo seran guardados si marca la casilla "Recuerdame"), ahora si rechaza las cookies se bloqueara el acceso a estas paginas de la web.
            </Typography>
            </Box>
            <Typography sx={{ mt: 2, fontSize:{xs:'12px',sm:'16px',md:'24px'} }} color="#00349a"  component="h1" variant="h5">
                Atentamente-Grupo Abbruzzese
            </Typography>
              <Copyright sx={{ mt: 3.5 ,fontSize:{xs:'8px',sm:'12px',md:'14px'}}} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}