// import React, { useEffect, useState } from 'react'
// import { getUserBooking } from '../api-helpers/api-helpers'

// const Profile = () => {
//     const [bookings,setBookings]=useState()

// useEffect(()=>{
// getUserBooking()
// .then(res=>setBookings(res.bookings))
// .catch(err=>console.log(err))
// },[])
// console.log(bookings);
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile

import React, { Fragment, useEffect, useState } from 'react';
import { getUserBooking } from '../api-helpers/api-helpers';
import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserBooking();
        if (res && res.data && res.data.bookings) {
          setBookings(res.data.bookings);
        } else {
          console.log("Invalid response format:", res);
        }
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  console.log(bookings);

  return (
    <Box width={"100%"} display="flex">
      {bookings && bookings.length > 0 && (
        <Fragment>
          <Box flexDirection={'column'} justifyContent="center" alignItems={'center'} width={"30%"}>
            <AccountCircleIcon sx={{ fontSize: "10rem" }} />
            <Typography padding={1} width={"auto"} textAlign={'center'} border={'1px solid #ccc'} borderRadius={6}>
              Name:{bookings[0].user.name}
            </Typography>
          </Box>
          <Box width={"70%"}></Box>
        </Fragment>
      )}
    </Box>
  );
      }

export default Profile;
