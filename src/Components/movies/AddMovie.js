// import { CheckBox } from '@mui/icons-material'
// import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'

// const AddMovie = () => {
// const [inputs,setInputs] = useState({title:"",description:"",posterUrl:"",releaseDate:"",})
// const handleChange =(e)=>{
//   setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value,}))
// }

// const handleSubmit = (e)=>{
//   e.preventDefault();
//   console.log(inputs);
// }

//   return (
//     <div>
// <form  onSubmit={handleSubmit}>
//     <Box padding={10} width={'50%'} margin='auto' display={'flex'} flexDirection="column" boxShadow={"10px 10px 20px #ccc"} mt={3}>

//         <Typography textAlign={'center'} variant='h4' fontFamily={"verdana"}> Add New Movies</Typography>
//         <FormLabel>Title</FormLabel>
//         <TextField
//         value={inputs.title}
//         onChange={handleChange}
//         name='title' variant='standard' margin='normal'></TextField>
//         <FormLabel>Description</FormLabel>
//         <TextField
//           value={inputs.description}
//         onChange={handleChange} name='Description' variant='standard' margin='normal'></TextField>
//         <FormLabel>Poster Url</FormLabel>
//         <TextField 
//          value={inputs.posterUrl}
//          onChange={handleChange}
//         name='posterUrl' variant='standard' margin='normal'></TextField>
//         <FormLabel>Relase date</FormLabel>
//         <TextField 
//         type='date'
//          value={inputs.releaseDate}
//          onChange={handleChange}
//         name='ReleaseDate' variant='standard' margin='normal'></TextField>
//         <FormLabel>Actors</FormLabel>
//         <Box display={"flex"}>
//         <TextField name='actors' variant='standard' margin='normal'></TextField>
//         <Button sx={{marginLeft: "10px", height:"35px"}}>Add Actors</Button>

//         </Box>
//         {/* <FormLabel >Featured</FormLabel> */}
//         {/* <CheckBox /> */}
//         <Button type='submit' variant='contained' sx={{
          
//           margin:'auto',
//           width:'30%',
//           bgcolor:"#2b2d42",
        
//           ":hover":{
//             backgroundColor:"#6c758a"
//           }
          
//         }}> Add New Movie</Button>
//     </Box>
// </form>

//     </div>
//   )
// }

// export default AddMovie


// import { Checkbox } from '@mui/material';
// import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';

// const AddMovie = () => {


//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     posterUrl: "",
//     releaseDate: "",
//   });

// const [actors,setActors]=useState([""]);
// const [actor,setActor]=useState("")

//   const handleChange = (e) => {
//     setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs,actors);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box padding={10} width={'50%'} margin='auto' display={'flex'} flexDirection="column" boxShadow={"10px 10px 20px #ccc"} mt={3}>
//           <Typography textAlign={'center'} variant='h4' fontFamily={"verdana"}>
//             Add New Movies
//           </Typography>
//           <FormLabel>Title</FormLabel>
//           <TextField
//             value={inputs.title}
//             onChange={handleChange}
//             name='title'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Description</FormLabel>
//           <TextField
//             value={inputs.description}
//             onChange={handleChange}
//             name='description'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Poster Url</FormLabel>
//           <TextField
//             value={inputs.posterUrl}
//             onChange={handleChange}
//             name='posterUrl'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Release date</FormLabel>
//           <TextField
//             type='date'
//             value={inputs.releaseDate}
//             onChange={handleChange}
//             name='releaseDate'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Actors</FormLabel>
//           <Box display={"flex"}>
//             <TextField 
//             onChange={(e)=>setActor(e.target.value)}
//             name='actors' variant='standard' margin='normal' />
//             <Button 
//             onClick={()=>{
//               setActors([...actors,actor]);
//               setActor("")
//             }}
//             sx={{ marginLeft: "10px", height: "35px" }}>Add Actors</Button>
//           </Box>
//           {/* <FormLabel>Featured</FormLabel>
//           <Checkbox /> */}
//           <Button
//             type='submit'
//             variant='contained'
//             sx={{
//               margin: 'auto',
//               width: '30%',
//               bgcolor: "#2b2d42",
//               ":hover": {
//                 backgroundColor: "#6c758a"
//               }
//             }}
//           >
//             Add New Movie
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;


// import { Checkbox } from '@mui/material';
// import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';

// const AddMovie = () => {
//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     posterUrl: "",
//     releaseDate: "",
//   });

//   const [actors, setActors] = useState([""]);
//   const [actor, setActor] = useState("");

//   const handleChange = (e) => {
//     setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(inputs, actors);
//   //   AddMovie({...inputs,actors})
//   //   .then((res)=> console.log(res))
//   //   .catch((err)=>console.log(err));
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs, actors);
//     AddMovie({...inputs,actors})  // <-- Problematic line
//       .then((res)=> console.log(res))
//       .catch((err)=>console.log(err));
//   };
  

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box padding={10} width={'50%'} margin='auto' display={'flex'} flexDirection="column" boxShadow={"10px 10px 20px #ccc"} mt={3}>
//           <Typography textAlign={'center'} variant='h4' fontFamily={"verdana"}>
//             Add New Movies
//           </Typography>
//           <FormLabel>Title</FormLabel>
//           <TextField
//             value={inputs.title}
//             onChange={handleChange}
//             name='title'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Description</FormLabel>
//           <TextField
//             value={inputs.description}
//             onChange={handleChange}
//             name='description'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Poster Url</FormLabel>
//           <TextField
//             value={inputs.posterUrl}
//             onChange={handleChange}
//             name='posterUrl'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Release date</FormLabel>
//           <TextField
//             type='date'
//             value={inputs.releaseDate}
//             onChange={handleChange}
//             name='releaseDate'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Actors</FormLabel>
//           <Box display={"flex"}>
//             <TextField
//               onChange={(e) => setActor(e.target.value)}
//               name='actors'
//               variant='standard'
//               margin='normal'
//               value={actor}
//             />
//             <Button
//               onClick={() => {
//                 setActors((prevActors) => [...prevActors, actor]);
//                 setActor("");
//               }}
//               sx={{ marginLeft: "10px", height: "35px" }}
//             >
//               Add Actors
//             </Button>
//           </Box>
//           {/* <FormLabel>Featured</FormLabel>
//           <Checkbox /> */}
//           <Button
//             type='submit'
//             variant='contained'
//             sx={{
//               margin: 'auto',
//               width: '30%',
//               bgcolor: "#2b2d42",
//               ":hover": {
//                 backgroundColor: "#6c758a"
//               }
//             }}
//           >
//             Add New Movie
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;



// import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { addmovies } from '../../api-helpers/api-helpers';

// const AddMovie = () => {
//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     posterUrl: "",
//     releaseDate: "",
//     actors: [], // Initialize actors as an empty array
//   });

//   const [actor, setActor] = useState(""); // State for individual actor input

//   const handleChange = (e) => {
//     setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//   };

//   const handleActorChange = (e) => {
//     setActor(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add the current actor to the actors array
//     setInputs((prevState) => ({ ...prevState, actors: [...prevState.actors, actor] }));

//     // Clear the actor input field
//     setActor("");
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log(inputs);
    
//     // Now, you can call your addmovies function
//     try {
//       const res = await addmovies(inputs);
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <Box padding={10} width={'50%'} margin='auto' display={'flex'} flexDirection="column" boxShadow={"10px 10px 20px #ccc"} mt={3}>
//           <Typography textAlign={'center'} variant='h4' fontFamily={"verdana"}>
//             Add New Movies
//           </Typography>
//           <FormLabel>Title</FormLabel>
//           <TextField
//             value={inputs.title}
//             onChange={handleChange}
//             name='title'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Description</FormLabel>
//           <TextField
//             value={inputs.description}
//             onChange={handleChange}
//             name='description'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Poster Url</FormLabel>
//           <TextField
//             value={inputs.posterUrl}
//             onChange={handleChange}
//             name='posterUrl'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Release date</FormLabel>
//           <TextField
//             type='date'
//             value={inputs.releaseDate}
//             onChange={handleChange}
//             name='releaseDate'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Actors</FormLabel>
//           <Box display={"flex"}>
//             <TextField
//               onChange={handleActorChange}
//               name='actors'
//               variant='standard'
//               margin='normal'
//               value={actor}
//             />
//             <Button
//               onClick={handleSubmit}
//               sx={{ marginLeft: "10px", height: "35px" }}
//             >
//               Add Actors
//             </Button>
//           </Box>
//           <Button
//             type='submit'
//             variant='contained'
//             sx={{
//               margin: 'auto',
//               width: '30%',
//               bgcolor: "#2b2d42",
//               ":hover": {
//                 backgroundColor: "#6c758a"
//               }
//             }}
//           >
//             Add New Movie
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;



// import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { addmovies } from '../../api-helpers/api-helpers';

// const AddMovie = () => {
//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     posterUrl: "",
//     releaseDate: "",
//     actors: [],
//   });

//   const [actor, setActor] = useState("");

//   const handleChange = (e) => {
//     setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//   };

//   const handleActorChange = (e) => {
//     setActor(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add the current actor to the actors array in the state
//     setInputs((prevState) => ({ ...prevState, actors: [...prevState.actors, actor] }));

//     // Clear the actor input field
//     setActor("");
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log(inputs);

//     // Now, you can call your addmovies function
//     try {
//       const res = await addmovies(inputs);
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <Box padding={10} width={'50%'} margin='auto' display={'flex'} flexDirection="column" boxShadow={"10px 10px 20px #ccc"} mt={3}>
//           <Typography textAlign={'center'} variant='h4' fontFamily={"verdana"}>
//             Add New Movies
//           </Typography>
//           <FormLabel>Title</FormLabel>
//           <TextField
//             value={inputs.title}
//             onChange={handleChange}
//             name='title'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Description</FormLabel>
//           <TextField
//             value={inputs.description}
//             onChange={handleChange}
//             name='description'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Poster Url</FormLabel>
//           <TextField
//             value={inputs.posterUrl}
//             onChange={handleChange}
//             name='posterUrl'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Release date</FormLabel>
//           <TextField
//             type='date'
//             value={inputs.releaseDate}
//             onChange={handleChange}
//             name='releaseDate'
//             variant='standard'
//             margin='normal'
//           />
//           <FormLabel>Actors</FormLabel>
//           <Box display={"flex"}>
//             <TextField
//               onChange={handleActorChange}
//               name='actors'
//               variant='standard'
//               margin='normal'
//               value={actor}
//             />
//             <Button
//               onClick={handleSubmit}
//               sx={{ marginLeft: "10px", height: "35px" }}
//             >
//               Add Actors
//             </Button>
//           </Box>
//           <Button
//             type='submit'
//             variant='contained'
//             sx={{
//               margin: 'auto',
//               width: '30%',
//               bgcolor: "#2b2d42",
//               ":hover": {
//                 backgroundColor: "#6c758a"
//               }
//             }}
//           >
//             Add New Movie
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;


import React, { useState } from 'react';
import { Box, Button, FormLabel, TextField, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { addmovies } from '../../api-helpers/api-helpers';

const AddMovie = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    releaseDate: "",
    actors: [],
  });

  const [actor, setActor] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleActorChange = (e) => {
    setActor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current actor to the actors array in the state
    setInputs((prevState) => ({ ...prevState, actors: [...prevState.actors, actor] }));

    // Clear the actor input field
    setActor("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addmovies(inputs);
      console.log(res);

      // Display an alert when a new movie is added
      setOpenAlert(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Box padding={10} width={'50%'} margin='auto' display={'flex'} flexDirection="column" boxShadow={"10px 10px 20px #ccc"} mt={3}>
          <Typography textAlign={'center'} variant='h4' fontFamily={"verdana"}>
            Add New Movies
          </Typography>
          <FormLabel>Title</FormLabel>
          <TextField
            value={inputs.title}
            onChange={handleChange}
            name='title'
            variant='standard'
            margin='normal'
          />
          <FormLabel>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            name='description'
            variant='standard'
            margin='normal'
          />
          <FormLabel>Poster Url</FormLabel>
          <TextField
            value={inputs.posterUrl}
            onChange={handleChange}
            name='posterUrl'
            variant='standard'
            margin='normal'
          />
          <FormLabel>Release date</FormLabel>
          <TextField
            type='date'
            value={inputs.releaseDate}
            onChange={handleChange}
            name='releaseDate'
            variant='standard'
            margin='normal'
          />
          <FormLabel>Actors</FormLabel>
          <Box display={"flex"}>
            <TextField
              onChange={handleActorChange}
              name='actors'
              variant='standard'
              margin='normal'
              value={actor}
            />
            <Button
              onClick={handleSubmit}
              sx={{ marginLeft: "10px", height: "35px" }}
            >
              Add Actors
            </Button>
          </Box>
          <Button
            type='submit'
            variant='contained'
            sx={{
              margin: 'auto',
              width: '30%',
              bgcolor: "#2b2d42",
              ":hover": {
                backgroundColor: "#6c758a"
              }
            }}
          >
            Add New Movie
          </Button>
        </Box>
      </form>
     
      <Snackbar
  open={openAlert}
  autoHideDuration={6000}
  onClose={handleAlertClose}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
  <MuiAlert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
    A new movie has been added!
  </MuiAlert>
</Snackbar>

    </div>
  );
};

export default AddMovie;
