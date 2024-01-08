// import React, { Fragment, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { getMovieDetails } from '../../api-helpers/api-helpers';
// import { Box, FormLabel, TextField, Typography } from '@mui/material';
// import { grey } from '@mui/material/colors';

// const Booking = () => {
//     const [movie,setMovie] =useState()
//     const id = useParams().id;
//     console.log(id);
//     useEffect(()=>{
//         getMovieDetails(id).then((res)=>setMovie(res.movie)).catch((err)=>console.log(err));
//     },[id])
//     console.log(movie );
//   return (
//     <div>
//     {movie && (
//       <Fragment>
//         <Typography padding={3} fontFamily='fantasy'  variant='h6' textAlign={"center"}>
//           Book Tickets Of Movies: {movie.title}
//         </Typography>
//         <Box display="flex" justifyContent="center">
//         <Box display="flex" justifyContent={"column"} flexDirection="column" paddingTop={3} width="50%" marginRight={"auto"}>
//         <img width="80%" height={"300px"} src={movie.posterUrl} alt={movie.title} />
//         <Box width={"80%"} marginTop={3} padding={2}>
//             <Typography paddingTop={2}>{movie.description}</Typography>
//             <Typography fontWeight={'bold'} marginTop={1}>
//                 Starrer:
//                 {movie.actors.map((actor)=>" "+actor+"")}</Typography>
//                 <Typography fontWeight={'bold'} marginTop={1}>
//                     ReleaseDate:{ new Date(movie.releaseDate).toDateString()}
//                 </Typography>
//         </Box>
//         </Box>
//         <Box width={"50%"} paddingTop={3}>
//             <form>
//                 <Box padding={5} margin={"auto"} display="flex" flexDirection={"column"} >
//                     <FormLabel>
//                         Seat Number
//                     </FormLabel>
//                     <TextField name='SeatNumber' type={'number'} margin='normal' variant='standrad'/>
//                     {/* <TextField name='SeatNumber' type={'number'} margin='normal' variant='standrad'/> */}

//                 </Box>
//             </form>
//         </Box>
//         </Box>
//       </Fragment>
//     )}
//   </div>  )
// }

// export default Booking


// import React, { Fragment, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getMovieDetails } from '../../api-helpers/api-helpers';
// import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
// import { grey } from '@mui/material/colors';

// const Booking = () => {
//   const [movie, setMovie] = useState({
//     title: '',
//     posterUrl: '',
//     description: '',
//     actors: [],
//     releaseDate: new Date(),
//   });

//   const { id } = useParams();

// const [inputs,setInputs] =useState({seatNumber:"",date:""})

//   useEffect(() => {
//     getMovieDetails(id)
//       .then((res) => setMovie(res.movie))
//       .catch((err) => console.log(err));
//   }, [id]);


// const handleChange = (e)=>{
//   setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value,}))
// }
// const handleSubmit = (e) =>{
//   e.preventDefault();
//   console.log(inputs);
// }
//   return (
//     <div>
//       {movie && (
//         <Fragment>
//           <Typography padding={3} fontFamily="fantasy" variant="h6" textAlign="center">
//             Book Tickets Of Movies: {movie.title}
//           </Typography>
//           <Box display="flex" justifyContent="center">
//             <Box display="flex" justifyContent="column" flexDirection="column" paddingTop={3} width="50%" marginRight="auto">
//               <img width="80%" height="300px" src={movie.posterUrl} alt={movie.title} />
//               <Box width="80%" marginTop={3} padding={2}>
//                 <Typography paddingTop={2}>{movie.description}</Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Starrer: {movie.actors.map((actor) => ' ' + actor + '')}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Release Date: {new Date(movie.releaseDate).toDateString()}
//                 </Typography>
//               </Box>
//             </Box>
//             <Box width="50%" paddingTop={3}>
//               <form onSubmit={handleSubmit}>
//                 <Box padding={5} margin="auto" display="flex" flexDirection="column">
//                   <FormLabel>Seat Number</FormLabel>
//                   <TextField value={inputs.seatNumber} onChange={handleChange} name="SeatNumber" type="number" margin="normal" variant="standard" />
//                   <FormLabel>Booking Date</FormLabel>
//                   <TextField value={inputs.date} onChange={handleChange}  name="Date" type="date" margin="normal" variant="standard" />
// <Button type='submit' sx={{mt:3}}>Book now</Button>
//                 </Box>
//               </form>
//             </Box>
//           </Box>
//         </Fragment>
//       )}
//     </div>
//   );
// };

// export default Booking;


// import React, { Fragment, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getMovieDetails, newBooking } from '../../api-helpers/api-helpers';
// import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';

// const Booking = () => {
//   const [movie, setMovie] = useState({
//     title: '',
//     posterUrl: '',
//     description: '',
//     actors: [],
//     releaseDate: new Date(),
//   });

//   const { id } = useParams();
//   const [inputs, setInputs] = useState({ seatNumber: '', date: '' });

//   useEffect(() => {
//     getMovieDetails(id)
//       .then((res) => setMovie(res.movie))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(inputs);
//   // newBooking({...inputs,movie:movie._id})
//   // .then((res)=>console.log(res))
//   // .catch((err)=>console.log(err))
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     console.log(id);
//     newBooking({inputs, movie: id,})
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };
  

//   return (
//     <div>
//       {movie && (
//         <Fragment>
//           <Typography padding={3} fontFamily="fantasy" variant="h6" textAlign="center">
//             Book Tickets Of Movies: {movie.title}
//           </Typography>
//           <Box display="flex" justifyContent="center">
//             <Box display="flex" justifyContent="column" flexDirection="column" paddingTop={3} width="50%" marginRight="auto">
//               <img width="80%" height="300px" src={movie.posterUrl} alt={movie.title} />
//               <Box width="80%" marginTop={3} padding={2}>
//                 <Typography paddingTop={2}>{movie.description}</Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Starrer: {movie.actors.map((actor) => ' ' + actor + '')}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Release Date: {new Date(movie.releaseDate).toDateString()}
//                 </Typography>
//               </Box>
//             </Box>
//             <Box width="50%" paddingTop={3}>
//               <form onSubmit={handleSubmit}>
//                 <Box padding={5} margin="auto" display="flex" flexDirection="column">
//                   <FormLabel>Seat Number</FormLabel>
//                   <TextField value={inputs.seatNumber} onChange={handleChange} name="seatNumber" type="number" margin="normal" variant="standard" />
//                   <FormLabel>Booking Date</FormLabel>
//                   <TextField value={inputs.date} onChange={handleChange} name="date" type="date" margin="normal" variant="standard" />
//                   <Button type="submit" sx={{ mt: 3 }}>
//                     Book now
//                   </Button>
                  
//                 </Box>
//               </form>
//             </Box>
//           </Box>
//         </Fragment>
//       )}
//     </div>
//   );
// };

// export default Booking;



import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, newBooking } from '../../api-helpers/api-helpers';
import { Box, Button, FormLabel, Snackbar, TextField, Typography, Alert } from '@mui/material';

const Booking = () => {
  const [movie, setMovie] = useState({
    title: '',
    posterUrl: '',
    description: '',
    actors: [],
    releaseDate: new Date(),
  });

  const { id } = useParams();
  const [inputs, setInputs] = useState({ seatNumber: '', date: '' });
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newBooking({ inputs, movie: id })
      .then((res) => {
        console.log(res);
        setOpenAlert(true); // Display success alert
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography padding={3} fontFamily="fantasy" variant="h6" textAlign="center">
            Book Tickets Of Movies: {movie.title}
          </Typography>
          <Box display="flex" justifyContent="center">
            <Box display="flex" justifyContent="column" flexDirection="column" paddingTop={3} width="50%" marginRight="auto">
              <img width="80%" height="300px" src={movie.posterUrl} alt={movie.title} />
              <Box width="80%" marginTop={3} padding={2}>
                <Typography paddingTop={2}>{movie.description}</Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Starrer: {movie.actors.map((actor) => ' ' + actor + '')}
                </Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Release Date: {new Date(movie.releaseDate).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box width="50%" paddingTop={3}>
              <form onSubmit={handleSubmit}>
                <Box padding={5} margin="auto" display="flex" flexDirection="column">
                  <FormLabel>Seat Number</FormLabel>
                  <TextField value={inputs.seatNumber} onChange={handleChange} name="seatNumber" type="number" margin="normal" variant="standard" />
                  <FormLabel>Booking Date</FormLabel>
                  <TextField value={inputs.date} onChange={handleChange} name="date" type="date" margin="normal" variant="standard" />
                  <Button type="submit" sx={{ mt: 3 }}>
                    Book now
                  </Button>
                  <Snackbar
                    open={openAlert}
                    autoHideDuration={6000}
                    onClose={handleAlertClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  >
                    <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
                      Booking successful!
                    </Alert>
                  </Snackbar>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
