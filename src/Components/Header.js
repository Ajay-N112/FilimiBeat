// import React, { useEffect, useState } from 'react';
// import { AppBar, Autocomplete, Box, Tabs, TextField, Toolbar,Tab } from '@mui/material';
// import MovieIcon from '@mui/icons-material/MovieFilter';
// import { getAllMovies } from '../api-helpers/api-helpers';
// import { Link } from 'react-router-dom';
// // import { Tab } from '@mui/icons-material';


// const dummyArray = ["cidmoosa", "kayamkulam kochu unni", "pokiriraja"];

// const Header = () => {
//     const [value,setValue]=useState(0);
//     const [movies, setMovies] =useState([])
//     useEffect(()=>{ 
//         getAllMovies()
//         .then((data)=>setMovies(data))
//         .catch((err)=>console.log(err));
//     },[])

//   return (
//     <AppBar position='sticky' sx={{bgcolor:"#2b2d42"}}>
//       <Toolbar>
//         <Box width={'20%'}>
//           <MovieIcon />
//         </Box>
//         <Box width={'30%'} margin={'auto'}>
//           <Autocomplete
//             id="free-solo-demo"
//             freeSolo
//             options={movies && movies.map((option)=>option.title)}
//             renderInput={(params) => (
//               <TextField sx={{input:{ color:"white"}} } variant='standard' {...params} label="Search Across Movies" />
//             )}
//           />
//         </Box>
//         <Box display={'flex'}>
//         <Tabs textColor='inherit' indicatorColor='secondary' value={value}onChange={(e,val)=>setValue(val)}>

//       <Tab LinkComponent={Link} to="/admin" label="Admin"> </Tab>
// {
//   !isAdminLoggedin && !userLoggedIn &&(
// <>
// <Tab LinkComponent={Link} to="/movies"label="Movies" />
//       <Tab LinkComponent={Link} to="/auth" label="Auth" />

// </>

//   )
// }



//     </Tabs>  
//           </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;



// import React, { useEffect, useState } from 'react';
// import { AppBar, Autocomplete, Box, Tabs, TextField, Toolbar, Tab, IconButton } from '@mui/material';
// import MovieIcon from '@mui/icons-material/MovieFilter';
// import { getAllMovies } from '../api-helpers/api-helpers';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {adminActions} from '../store'
// import {userActions} from '../store'


// const Header = () => {
//   const navigate = useNavigate()
// // const [selectedMovie,setselectedmovie]=useState() 
//   const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn)
//   const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn)
// const dispatch = useDispatch();

//   const [value, setValue] = useState(0);
//   const [movies, setMovies] = useState([]);
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   // const [AdminLoggedIn, setAdminLoggedIn] = useState(true);

//   useEffect(() => {
//     // Fetch movies and update state
//     getAllMovies()
//       .then((data) => setMovies(data))
//       .catch((err) => console.log(err));

    
//     setUserLoggedIn();
//   }, []);


// const logout = (isAdmin) =>{
// dispatch(isAdmin?adminActions.logout():userActions.logout())
// }

// const handleChange = (e,val)=>{

// const movie =movies.find((m)=>m.title === val);
// if(!isUserLoggedIn){
// navigate(`/booking/${movie._id}`)
// }
// }

//   return (
//     <AppBar position='sticky' sx={{ bgcolor: "#2b2d42" }}>
//       <Toolbar>
//         <Box width={'20%'}>
//           <IconButton LinkComponent={Link} to="/">

//           <MovieIcon />
//           </IconButton>
          
//         </Box>
//         <Box width={'30%'} margin={'auto'}>
//           <Autocomplete
//           onChange={handleChange}
//             id="free-solo-demo"
//             freeSolo
//             options={movies && movies.map((option) => option.title)}
//             renderInput={(params) => (
//               <TextField sx={{ input: { color: "white" } }} variant='standard' {...params} label="Search Across Movies" />
//             )}
//           />
//         </Box>
//         <Box display={'flex'}>
//           <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)}>


//             <Tab LinkComponent={Link} to="/movies" label="Movies" />
//             {!isAdminLoggedIn && !isUserLoggedIn && (
//               <>
//                 <Tab LinkComponent={Link} to="/auth" label="Auth" />
//                 <Tab LinkComponent={Link} to="/admin" label="Admin" />
//               </>

//             )}

//             {
//               isUserLoggedIn && (
//                 <>
//                   <Tab LinkComponent={Link} to="/user" label="Profile" />
//                   <Tab onClick={()=>logout(false)} LinkComponent={Link} to="/" label="Logout" />
//                 </>
//               )}

//             {
//               isAdminLoggedIn && (
//                 <>
//                   <Tab LinkComponent={Link} to="/add" label="Add Movie" />
//                   {/* <Tab LinkComponent={Link} to="/user-admin" label="Profile" /> */}
//                   <Tab  onClick={()=>logout(true)}  LinkComponent={Link} to="/" label="Logout" />

//                 </>
//               )}

//           </Tabs>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;



import React, { useEffect, useState } from 'react';
import { AppBar, Autocomplete, Box, Tabs, TextField, Toolbar, Tab, IconButton } from '@mui/material';
import MovieIcon from '@mui/icons-material/MovieFilter';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions } from '../store';
import { userActions } from '../store';

const Header = () => {
  const navigate = useNavigate();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const [value, setValue] = useState(null); // Use null instead of 0 for an unselected state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies and update state
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
  };

  const handleChange = (e, val) => {
    const movie = movies.find((m) => m.title === val);
    if (!isUserLoggedIn && movie) {
      navigate(`/booking/${movie._id}`);
    }
  };

  return (
    <AppBar position='sticky' sx={{ bgcolor: '#2b2d42' }}>
      <Toolbar>
        <Box width={'20%'}>
          <IconButton component={Link} to='/'>
            <MovieIcon />
          </IconButton>
        </Box>
        <Box width={'30%'} margin={'auto'}>
          <Autocomplete
            value={value}
            onChange={(e, val) => setValue(val)}
            id='free-solo-demo'
            freeSolo
            options={movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField sx={{ input: { color: 'white' } }} variant='standard' {...params} label='Search Across Movies' />
            )}
          />
        </Box>
        <Box display={'flex'}>
          <Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)}>
            <Tab component={Link} to='/movies' label='Movies' />
            {!isAdminLoggedIn && !isUserLoggedIn && (
              <>
                <Tab component={Link} to='/auth' label='Auth' />
                <Tab component={Link} to='/admin' label='Admin' />
              </>
            )}
            {isUserLoggedIn && (
              <>
                <Tab component={Link} to='/user' label='Booking Details' />
                <Tab onClick={() => logout(false)} component={Link} to='/' label='Logout' />
              </>
            )}
            {isAdminLoggedIn && (
              <>
                <Tab component={Link} to='/add' label='Add Movie' />
                <Tab onClick={() => logout(true)} component={Link} to='/' label='Logout' />
              </>
            )}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
