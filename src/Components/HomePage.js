// // import { Box, Button, Typography } from '@mui/material'
// // import React, { useEffect, useState } from 'react'
// // import Movieitems from './movies/Movieitems'
// // import { Link } from 'react-router-dom'
// // import { getAllMovies } from '../api-helpers/api-helpers'


// // const HomePage = () => {
// //     const [movies,setMovies]=useState([]);
    
// //     useEffect(()=>{
// //         getAllMovies()
// //         .then((data)=>setMovies(data))
// //         .catch(err=>console.log(err));
// //     },[])
// //     // console.log(movies);
// //   return (
// // <Box width={'100%'} height="100%" marginTop={2} margin="auto">
// //   <Box margin={'auto'} width="80%" height={"40vh"} padding={2}>
// //    <img src="https://i.postimg.cc/x8zt17LD/5ae625182044787-Y3-Jvc-Cwx-NDAw-LDEw-OTUs-MCw0-NTA.jpg" alt=""
   
// //    width={"100%"}
// //    height={"100%"}
// //    />
// //   </Box>
// //   <Box padding={5} margin="auto">
// //     <Typography variant='h4' textAlign={"center"} >NEW RELEASES</Typography>

// //   </Box>
// //   <Box display="flex" width="80%" justifyContent={"center"} flexWrap="wrap">
// // {movies && movies
// // .slice(0,4)
// // .map((movie,index)=>(
// //     <Movieitems
// //     id={movie.id}
// //     title={movie.title}
// //     posterUrl={movie.posterUrl}
// //     releaseDate={movie.releaseDate}
// //     key={index}
// // />

// // ))}
// // {/* console.log(movie); */}
// //   </Box>
// //   <Box display="flex" padding={5} margin='auto'>
// //     <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{margin:"auto",color:"#2b2d42"}}>
// //     View All Movies
// //     </Button>

// //   </Box>
// // </Box>

// //   )
// // }

// // export default HomePage


// import React, { useEffect, useState } from 'react';
// import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { getAllMovies } from '../api-helpers/api-helpers';

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getAllMovies()
//       .then((data) => setMovies(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box width={'100%'} height="100%" marginTop={2} margin="auto">
//       <Box margin={'auto'} width="80%" height={"40vh"} padding={2}>
//         <img
//           src="https://i.postimg.cc/x8zt17LD/5ae625182044787-Y3-Jvc-Cwx-NDAw-LDEw-OTUs-MCw0-NTA.jpg"
//           alt=""
//           width={"100%"}
//           height={"100%"}
//         />
//       </Box>
//       <Box padding={5} margin="auto">
//         <Typography variant="h4" textAlign={"center"}>
//           NEW RELEASES
//         </Typography>
//       </Box>
//       <Box display="flex" width="80%" justifyContent={"center"} flexWrap="wrap">
//         {movies &&
//           movies.slice(0, 4).map((movie, index) => (
//             <Card key={index} style={{ margin: '10px', minWidth: '200px' }}>
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
//         <Button
//           component={Link}
//           to="/movies"
//           variant="outlined"
//           sx={{ margin: 'auto', color: '#2b2d42' }}
//         >
//           View All Movies
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import { Box, Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { getAllMovies } from '../api-helpers/api-helpers';
// import { Carousel } from 'react-responsive-carousel';


// const HomePage = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getAllMovies()
//       .then((data) => setMovies(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box width={'100%'} marginTop={2} margin="auto">
//       <Box margin="auto" width="80%" height={"40vh"} padding={2}>
//         <img
//           src="https://earlylifestyle.com/wp-content/uploads/2023/11/kannur-squad-movie-review.jpg"
//           alt=""
//           width={"100%"}
//           height={"100%"}
//           style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
//         />
//       </Box>
//       <Box padding={5} margin="auto">
//       <Typography variant="h4" textAlign="center" color="black" fontWeight="bold">
//   NEW RELEASES
// </Typography>
//       </Box>
//       <Grid container justifyContent="center" spacing={3}>
//         {movies &&
//           movies.slice(0, 4).map((movie, index) => (
//             <Grid item key={index}>
//               <Card
//                 style={{
//                   minWidth: '250px',
//                   maxWidth: '300px',
//                   textAlign: 'center',
//                   borderRadius: '10px',
//                   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                 }}
//               >
//                 <CardMedia component="img" alt={movie.title} height="200" image={movie.posterUrl} />
//                 <CardContent>
//                   <Typography variant="h6" component="div" color="primary">
//                     {movie.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Release Date: {new Date(movie.releaseDate).toDateString()}
//                   </Typography>
//                 </CardContent>
//                 <Button
//                   component={Link}
//                   to={`/booking/${movie._id}`}
//                   variant="contained"
//                   color="secondary"
//                   style={{ margin: '10px auto' }}
//                 >
//                   Book Now
//                 </Button>
//               </Card>
//             </Grid>
//           ))}
//       </Grid>
//       <Box display="flex" padding={5} margin="auto">
//         <Button
//           component={Link}
//           to="/movies"
//           variant="outlined"
//           sx={{ margin: 'auto', color: '#2b2d42' }}
//           color="secondary"
//         >
//           View All Movies
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;



import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getAllMovies } from '../api-helpers/api-helpers';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Box width={'100%'} marginTop={2} margin="auto">
      <Slider {...settings}>
        {movies &&
          movies.slice(0, 20).map((movie, index) => (
            <div key={index}>
              <img
                src={movie.posterUrl}
                alt={movie.title}
                style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%' }}
              />
            </div>
          ))}
      </Slider>
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign="center" color="black" fontWeight="bold">
          NEW RELEASES
        </Typography>
      </Box>
      <Grid container justifyContent="center" spacing={3}>
        {movies &&
          movies.slice(0, 4).map((movie, index) => (
            <Grid item key={index}>
              <Card
                style={{
                  minWidth: '250px',
                  maxWidth: '300px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
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
      <Box display="flex" padding={5} margin="auto">
        <Button
          component={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: 'auto', color: '#2b2d42' }}
          color="secondary"
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
