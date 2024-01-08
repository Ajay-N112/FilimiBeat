// import React, { useEffect, useState } from 'react';
// import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { getAllMovies } from '../../api-helpers/api-helpers';


// const Movie = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getAllMovies()
//       .then((data) => setMovies(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box width={'100%'} height="100%" marginTop={2} margin="auto">
    
//       <Box padding={5} margin="auto">
//         <Typography variant="h4" textAlign={"center"}>
//           NEW RELEASES
//         </Typography>
//       </Box>
//       <Box display="flex" width="80%" justifyContent={"center"} flexWrap="wrap">
//         {movies &&
//           movies.slice(0, 4).map((movie, index) => (
//             <Card key={index}
//             id={movie._id}
//             style={{ margin: '10px', minWidth: '200px' }}>
//               <CardMedia
//                 component="img"
//                 alt={movie.title}
//                 height="140"
//                 image={movie.posterUrl}
//               />
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {movie.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Release Date: {new Date(movie.releaseDate).toDateString()}
//                 </Typography>
//               </CardContent>
//               <Button style={{marginLeft:'50px'}}>Book NOw</Button>
//             </Card>
//           ))}
//       </Box>
//       <Box display="flex" padding={5} margin="auto">
   
//       </Box>
//     </Box>
//   );
// };

// export default Movie;



import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../../api-helpers/api-helpers';


const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box width="100%" height="100%" marginTop={2} margin="auto">
    <Box padding={5} margin="auto">
      <Typography variant="h4" textAlign="center" color="black">
        NEW RELEASES
      </Typography>
    </Box>
    <Grid container justifyContent="center" spacing={3}>
      {movies &&
        movies.map((movie, index) => (
          <Grid item key={index}>
            <Card style={{ minWidth: '250px', maxWidth: '300px', textAlign: 'center' }}>
              <CardMedia component="img" alt={movie.title} height="200" image={movie.posterUrl} />
              <CardContent>
                <Typography variant="h6" component="div" color="primary">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Release Date: {new Date(movie.releaseDate).toDateString()}
                </Typography>
              </CardContent>
              <Button
                component={Link}
                to={`/booking/${movie._id}`}
                variant="contained"
                color="secondary"
                style={{ margin: '10px auto' }}
              >
                Book Now
              </Button>
            </Card>
          </Grid>
        ))}
    </Grid>
    <Box display="flex" padding={5} margin="auto"></Box>
  </Box>
  );
};

export default Movie;
