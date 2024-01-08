// import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
// import { Link } from 'react-router-dom';



// const AuthForm = ({onSubmit,isAdmin}) => {
//   const [inputs, setInputs] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [isSignup, setIsSignup] = useState(false);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//    onSubmit({inputs,signup: isAdmin?false:isSignup});
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: 'auto', padding: 1 }}>
//       <IconButton LinkComponent={Link} to='/'>
//       <CloseIcon />
//     </IconButton>
//       </Box>
//       <Typography style={{ marginTop: '20px' }} variant='h4' textAlign={'center'}>
//         {isSignup ? 'SIGN UP' : 'LOGIN'}
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box
//           display={'flex'}
//           justifyContent={'center'}
//           flexDirection="column"
//           width={400}
//           margin="auto"
//           alignContent={'center'}
//           padding={5}
//         >
//           {!isAdmin && isSignup && (
//             <>
//               <FormLabel sx={{ mt: 1, mb: 1 }}>Name</FormLabel>
//               <TextField
//                 value={inputs.name}
//                 onChange={handleChange}
//                 variant='standard'
//                 type={'text'}
//                 name='name'
//               />
//             </>
//           )}

//           <FormLabel sx={{ mt: 1, mb: 1 }}>Email</FormLabel>
//           <TextField
//             value={inputs.email}
//             onChange={handleChange}
//             variant='standard'
//             type='email'
//             name='email'
//           />

//           <FormLabel sx={{ mt: 1, mb: 1 }}>Password</FormLabel>
//           <TextField
//             value={inputs.password}
//             onChange={handleChange}
//             variant='standard'
//             type='password'
//             name='password'
//           />
//           <Button style={{ marginTop: '30px' }} type="submit" variant="contained" color="primary">
//             {isSignup ? 'SIGN UP' : 'LOGIN'}
//           </Button>
//           {!isAdmin &&(
//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             style={{ marginTop: '30px' }}
//             fullWidth
//             variant=""
//             color="primary"
//           >
//             SWITCH TO {isSignup ? 'Login' : 'SIGN UP'}
//           </Button>
// )}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


import { Box, Button, Dialog, FormLabel, IconButton, Snackbar, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const AuthForm = ({ onSubmit, isAdmin }) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isSignup, setIsSignup] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inputs, signup: isAdmin ? false : isSignup });
    setOpenAlert(true); // Display login success alert
  };

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: 'auto', padding: 1 }}>
        <IconButton LinkComponent={Link} to='/'>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography style={{ marginTop: '20px' }} variant='h4' textAlign={'center'}>
        {isSignup ? 'SIGN UP' : 'LOGIN'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection="column"
          width={400}
          margin="auto"
          alignContent={'center'}
          padding={5}
        >
          {!isAdmin && isSignup && (
            <>
              <FormLabel sx={{ mt: 1, mb: 1 }}>Name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                variant='standard'
                type={'text'}
                name='name'
              />
            </>
          )}

          <FormLabel sx={{ mt: 1, mb: 1 }}>Email</FormLabel>
          <TextField
            value={inputs.email}
            onChange={handleChange}
            variant='standard'
            type='email'
            name='email'
          />

          <FormLabel sx={{ mt: 1, mb: 1 }}>Password</FormLabel>
          <TextField
            value={inputs.password}
            onChange={handleChange}
            variant='standard'
            type='password'
            name='password'
          />
          <Button style={{ marginTop: '30px' }} type="submit" variant="contained" color="primary">
            {isSignup ? 'SIGN UP' : 'LOGIN'}
          </Button>
          {!isAdmin && (
            <Button
              onClick={() => setIsSignup(!isSignup)}
              style={{ marginTop: '30px' }}
              fullWidth
              variant=""
              color="primary"
            >
              SWITCH TO {isSignup ? 'Login' : 'SIGN UP'}
            </Button>
          )}
          <Snackbar
            open={openAlert}
            autoHideDuration={10000}
            onClose={handleAlertClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
              Login successful!
            </Alert>
          </Snackbar>
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
