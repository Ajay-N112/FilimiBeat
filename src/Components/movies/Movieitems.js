// import React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';

// const Movieitems = ({title,releaseDate,possterUrl,id}) => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100vh"
//     >
//       <Card
//         sx={{
//           width: 255,
//           height: 300,
//           borderRadius: 5,
//           transition: 'box-shadow 0.3s',
//           ':hover': {
//             boxShadow: '10px 10px 20px #ccc',
//           },
//           margin: 2, // Add margin for gap
//         }}
//       >
//      {possterUrl && (
//   <img
//     height="50%"
//     width="100%"
//     src={possterUrl}
//     alt={title}
//   />
// )}

//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//          {title}
//           </Typography>
       
//           <Typography variant="body2" color="text.secondary">
//          {new Date(releaseDate).toDateString()}
//           </Typography>
//         </CardContent>
//         <CardActions sx={{ justifyContent: 'center' }}>
//           <Button
//           LinkComponent={Link} to={`/booking/${id}`}
//           size="small">BOOK</Button>
     
//         </CardActions>
//       </Card>
//     </Box>
//   );
// };

// export default Movieitems;


// import React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';

// const Movieitems = ({ title, releaseDate, possterUrl, id }) => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100vh"
//     >
//       <Card
//         sx={{
//           width: 255,
//           height: 300,
//           borderRadius: 5,
//           transition: 'box-shadow 0.3s',
//           ':hover': {
//             boxShadow: '10px 10px 20px #ccc',
//           },
//           margin: 2, // Add margin for gap
//         }}
//       >
//         {possterUrl && (
//           <img height="50%" width="100%" src={possterUrl} alt={title} />
//         )}

//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>

//           <Typography variant="body2" color="text.secondary">
//             {new Date(releaseDate).toDateString()}
//           </Typography>
//         </CardContent>
//         <CardActions sx={{ justifyContent: 'center' }}>
//           <Button component={Link} to={`/booking/${id}`} size="small">
//             BOOK
//           </Button>
//         </CardActions>
//       </Card>
//     </Box>
//   );
// };

// export default Movieitems;


// import React, { useEffect, useState } from 'react';
// import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { getAllMovies } from '../../api-helpers/api-helpers';

// const Movie = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);



//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         setLoading(true);
//         const data = await getAllMovies();
//         setMovies(data);
//       } catch (error) {
//         setError('Error fetching movies. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   console.log(movie);

//   const handleAddMovie = async () => {
//     // Logic to add a new movie goes here
//     try {
//       // Your code to add a new movie

//       // Fetch the updated movie list
//       const updatedMovies = await getAllMovies();
//       setMovies(updatedMovies);
//     } catch (error) {
//       console.error('Error adding a new movie:', error);
//     }
//   };

//   return (
//     <Box width={'100%'} height="100%" marginTop={2} margin="auto">
//       <Box padding={5} margin="auto">
//         <Typography variant="h4" textAlign="center">
//           NEW RELEASES
//         </Typography>
//       </Box>
//       {loading ? (
//         <Box textAlign="center">Loading movies...</Box>
//       ) : error ? (
//         <Box textAlign="center" color="red">
//           {error}
//         </Box>
//       ) : (
//         <Box display="flex" width="80%" justifyContent="center" flexWrap="wrap">
//           {movies &&
//             movies.map((movie, index) => (
//               <Card key={index} id={movie._id} style={{ margin: '10px', minWidth: '200px' }}>
//                 <CardMedia component="img" alt={movie.title} height="140" image={movie.posterUrl} />
//                 <CardContent>
//                   <Typography variant="h6" component="div">
//                     {movie.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Release Date: {new Date(movie.releaseDate).toDateString()}
//                   </Typography>
//                 </CardContent>
//                 <Button component={Link} to={`/booking/${movie._id}`} style={{ marginLeft: '50px' }}>
//                   Book Now
//                 </Button>
//               </Card>
//             ))}
//         </Box>
//       )}
//       <Box display="flex" padding={5} margin="auto">
//         <Button onClick={handleAddMovie}>Add a New Movie</Button>
//       </Box>
//     </Box>
//   );
// };

// export default Movie;
