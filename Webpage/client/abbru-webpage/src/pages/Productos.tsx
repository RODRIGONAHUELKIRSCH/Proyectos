import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Link, Box, CssBaseline, Typography,Paper} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import {
  List,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import {  useState } from 'react';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { obtenerProductoPorCategoria } from '../apiconnect/apiconnection';

const theme = createTheme();

function Producto() {
  
const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({
  group1: false,
  group2: false,
  group3:false,
});

const toggleGroup = (group: string) => {
  setOpenGroups((prevOpenGroups) => {
    const newOpenGroups = Object.keys(prevOpenGroups).reduce((acc, key) => {
      acc[key] = key === group ? !prevOpenGroups[key] : false;
      return acc;
    }, {} as Record<string, boolean>); // Especifica explícitamente el tipo del acumulador
    return newOpenGroups;
  });
};

const [imgproduct,setImgprod] = useState<string>('');

const getProductImage = (cat: string) =>{
  const fetchproductimg= async () =>{
    const productimg = await obtenerProductoPorCategoria(cat);
    if(productimg){
      setImgprod(getimgprodurl(productimg));
    }
  }
  fetchproductimg();
}

const getimgprodurl= (imgprod : string)=>{
  const apiUrl = import.meta.env.VITE_API_URL;

  if(apiUrl){
    return `${apiUrl}/api/product/productimages/${imgprod}`;
  }else{
    console.error('API URL no está definida en el entorno.');
    return '';
  }

}

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Grid
      container
      component="main"
      sx={{ height: '100vh', width: '100vw', backgroundColor: '#ffffff', position: 'relative', margin: 0,padding:0 }}
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
            right: { xs: 'auto', sm: 'auto', md: '1rem' },
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

      <Grid
          container
          component="div"
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{ marginTop:'0',mt: 0, height: '70vh', padding: 0 ,backgroundColor:'#ffeadd',width:'100%',
            display:'flex',flexDirection:'column',alignItems:'flex-start',marginBottom:'12vh'
          }}
        >

    <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>

      <Paper
        sx={{
          width: { xs: '30%', sm: '30%', md: '30%' },
          height: 'auto',
          minHeight:'100px',
          display: 'flex',
          overflow:'auto',
          flexDirection: 'column',
          padding: 0.5,
          position: { xs: 'relative', sm: 'relative' },

        }}
      >

      <Typography component='h1' sx={{color:'white',minHeight:{xs:'1.5rem',sm:'2 rem',md:'3.5 rem'},margin: '0',height: '8vh',fontSize: { xs: '6px', sm: '12px', md: '18px' },whiteSpace: 'nowrap',backgroundColor: '#00349a',display: 'flex',alignItems: 'center',justifyContent: 'center',textAlign: 'center',marginBottom:'0.5rem'}} >Nos especializamos en:</Typography>
      
      <List component="nav" >

      <ListItemButton onClick={() => toggleGroup("group1")} sx={{ backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'},}} >
        <ListItemText primary="Columna" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}} />
        {openGroups["group1"] ? <ExpandLess    sx={{fontSize: { xs: '16px', sm: '20px', md: '24px' }, ml: { xs: '1.5rem', sm: '0', md: '0' } }} style={{color:'white'}}/> : <ExpandMore    sx={{ fontSize: { xs: '16px', sm: '20px', md: '24px' },ml: { xs: '1.5rem', sm: '0', md: '0' } }}  style={{color:'white'}}/>}
      </ListItemButton>
      <Collapse in={openGroups["group1"]} timeout="auto" unmountOnExit  >
        <List component="div" disablePadding>

          <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
           sx={{  pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'},}}  >
            <ListItemText primary="Cervical" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
          </ListItemButton>

          <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
          sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
            <ListItemText primary="Toracica" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}} />
          </ListItemButton>

          <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
          sx={{ pl: {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
            <ListItemText primary="Lumbar" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => toggleGroup("group2")} sx={{ backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
        <ListItemText primary="Reemplazos Articulares" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}} />
        {openGroups["group2"] ? <ExpandLess    sx={{fontSize: { xs: '16px', sm: '20px', md: '24px' }, ml: { xs: '1.8rem', sm: '0', md: '0' } }} style={{color:'white'}}/> : <ExpandMore    sx={{ fontSize: { xs: '16px', sm: '20px', md: '24px' },ml: { xs: '1.8rem', sm: '0', md: '0' } }}  style={{color:'white'}}/>}
      </ListItemButton>
      <Collapse in={openGroups["group2"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }}  
        sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
            <ListItemText primary="Rodilla" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
          </ListItemButton>
          <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
          sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
            <ListItemText primary="Cadera" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
          </ListItemButton>
          <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
           sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
            <ListItemText primary="Hombro" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => toggleGroup("group3")} sx={{ backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
        <ListItemText primary="Maxilo Facial" sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
        {openGroups["group3"] ? <ExpandLess    sx={{fontSize: { xs: '16px', sm: '20px', md: '24px' }, ml: { xs: '1.5rem', sm: '0', md: '0' } }} style={{color:'white'}}/> : <ExpandMore    sx={{ fontSize: { xs: '16px', sm: '20px', md: '24px' },ml: { xs: '1.5rem', sm: '0', md: '0' } }}  style={{color:'white'}}/>}
      </ListItemButton>
      <Collapse in={openGroups["group3"]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
        sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
            <ListItemText primary="Terciomedio"  sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
          </ListItemButton>
          <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
          sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
            <ListItemText primary="Mandibula"  sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
          </ListItemButton>
          <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
          sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
            <ListItemText primary="Craneo"  sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
          </ListItemButton>
        </List>
      </Collapse>
      
      <ListItemButton   onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
        <ListItemText primary="Reconstrucción desarrollo 3D"  sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}} />
      </ListItemButton>

      <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }} 
       sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
        <ListItemText primary="Osteosintesis General"  sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
      </ListItemButton>

      <ListItemButton onClick={(e) => {
    const value = (e.currentTarget.textContent || '').trim(); // Obtiene el texto dinámico
    getProductImage(value); // Llama a la función con el texto dinámico
  }}  
      sx={{ pl:  {xs:2,sm:4}, backgroundColor:'#00349a','&:hover':{backgroundColor:'#00349a'}, my: 0.5,mx:{xs:'0.2rem'}}}>
        <ListItemText primary="Artroscopia"   sx={{color:'white','&:hover':{textDecoration:'underline'}, '.MuiTypography-root': {fontSize: { xs: '6px', sm: '10px', md: '14px' }}}}/>
      </ListItemButton>

    </List>

        </Paper>
        
          <Box sx={{height:'100%', margin: { xs: 'auto', sm: '2px 5px' }, width: '100%' }}>

          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '100%',
          }}>

            <Grid container spacing={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '100%',
            backgroundImage: `url(${imgproduct|| "/presentacion.png"})`,backgroundSize:'90% 100%',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>  </Grid> 

            </Paper>

            </Box>

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
}

export default Producto;