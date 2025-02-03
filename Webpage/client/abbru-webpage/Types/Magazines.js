// import React, { useState, useEffect } from 'react';
// import { Box, Paper, Typography, List, ListItemButton, Button } from '@mui/material';
// import Grid from '@mui/material/Grid2'; // Asegúrate de que Grid2 esté correctamente importado
// import ApiConnection from '../src/apiconnect/apiconnection';
// import { Magazine } from './types'; // Asegúrate de que Magazine esté correctamente importado
export {};
// const MagazineDisplay = () => {
//   const [magazines, setMagazines] = useState<Magazine[]>([]);
//   const [page, setPage] = useState(0);
//   const [yearRange, setYearRange] = useState({ startYear: "2024", endYear: "2029" });
//   const itemsPerPage = 6;
//   // Función para obtener revistas y actualizar el estado
//   const fetchMagazines = async (startYear: String, endYear:String) => {
//     try {
//       const data = await ApiConnection.fetchMagazinesByYearRange(startYear, endYear);
//       setMagazines(data);
//       setPage(0); // Resetear la página al cambiar de rango
//     } catch (error) {
//       console.error('Error fetching magazines:', error);
//     }
//   };
//   const handleYearRangeClick = (startYear: String, endYear: String) => {
//     fetchMagazines(startYear, endYear);
//   };
//   const paginatedMagazines = magazines.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
//   // Función para construir la URL de la imagen
//   // const getImageUrl = (imageString: String) => {
//   //   return `http://127.0.0.1:8080/api/magazine/images/${imageString}`;
//   // };
//   return (
//     <Box sx={{ width: { xs: '100%', sm: '70%', md: '85%' }, height: '100%', position: 'relative', marginLeft: { xs: 0, sm: 'auto' } }}>
//       <Typography component="h1" sx={{ margin: '0', padding: '1rem', height: '8vh', fontSize: { xs: '8px', sm: '12px', md: '20px' }, whiteSpace: 'nowrap', backgroundColor: '#00349a', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
//         Revistas por año:
//       </Typography>
//       <List sx={{ padding: { xs: '0.2rem', sm: '0.5rem', md: '1rem' } }}>
//         <ListItemButton onClick={() => handleYearRangeClick("2024", "2029")} sx={buttonStyle}>
//           <Typography sx={typographyStyle}>2024-2029</Typography>
//         </ListItemButton>
//         <ListItemButton onClick={() => handleYearRangeClick("2030", "2034")} sx={buttonStyle}>
//           <Typography sx={typographyStyle}>2030-2034</Typography>
//         </ListItemButton>
//         <ListItemButton onClick={() => handleYearRangeClick("2035", "2039")} sx={buttonStyle}>
//           <Typography sx={typographyStyle}>2035-2039</Typography>
//         </ListItemButton>
//         <ListItemButton onClick={() => handleYearRangeClick("2040", "2044")} sx={buttonStyle}>
//           <Typography sx={typographyStyle}>2040-2044</Typography>
//         </ListItemButton>
//       </List>
//       <Box sx={{ margin: { xs: 'auto', sm: '0px 5px' }, height: '100%' }}>
//         <Paper sx={{ height: '100%', padding: '1rem' }}>
//           <Grid container spacing={2}>
//             {paginatedMagazines.map((magazine, index) => (
//               <Grid size={{xs:12,sm:6,md:4}} key={index}>
//                 <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                   <Box 
//                     sx={{ 
//                       width: '100%', 
//                       height: '200px', 
//                       backgroundImage: 'url({$getImageUrl(magazine.imageString)})', 
//                       backgroundSize: 'cover', 
//                       backgroundPosition: 'center', 
//                       marginBottom: '0.5rem' // Espacio entre la imagen y el texto
//                     }}
//                   />
//                   <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '16px' } }}>{magazine.nombre}</Typography>
//                   <Typography variant="body2" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>{magazine.descripcion}</Typography>
//                   <Typography variant="caption" sx={{ fontSize: { xs: '10px', sm: '12px' } }}>{magazine.año}</Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//           {magazines.length > itemsPerPage && (
//             <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
//               <Button onClick={() => setPage(page - 1)} disabled={page === 0} variant="contained" sx={buttonControlStyle}>Anterior</Button>
//               <Button onClick={() => setPage(page + 1)} disabled={(page + 1) * itemsPerPage >= magazines.length} variant="contained" sx={buttonControlStyle}>Siguiente</Button>
//             </Box>
//           )}
//         </Paper>
//       </Box>
//     </Box>
//   );
// };
// const buttonStyle = {
//   border: 'solid 1px white',
//   borderRadius: '10px',
//   marginBottom: '15px',
//   backgroundColor: '#00349a',
//   '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' },
//   justifyContent: 'center',
//   alignItems: 'center'
// };
// const typographyStyle = {
//   fontSize: { xs: '8px', sm: '12px', md: '16px' },
//   whiteSpace: 'nowrap'
// };
// const buttonControlStyle = {
//   margin: '0 10px',
//   backgroundColor: '#00349a',
//   color: 'white',
//   '&:hover': { backgroundColor: 'rgba(0, 0, 5, 0.7)' }
// };
// export default MagazineDisplay;
