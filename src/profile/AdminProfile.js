// import React, { Fragment, useEffect, useState } from 'react'
// import { getUserBooking } from '../api-helpers/api-helpers'
// import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';





// export const AdminProfile = () => {
//     const [bookings, setBookings] = useState()
//     useEffect(() => {
//         getUserBooking()
//         .then(res => setBookings(res))
//             .catch((err) => console.log(err))

//     }, [])
//     console.log(bookings);
//     return (
//         <Box width={"100%"} display="flex">
//             {bookings && bookings.length > 0 && (
//                 <Fragment>
//                     <Box flexDirection={'column'} justifyContent="center" alignItems={'center'} width={"30%"} padding={2}>
//                         <AccountCircleIcon sx={{ fontSize: "10rem", textAlign: 'center', ml: 2 }} />
//                         <Typography mt={1} padding={1} width={"auto"} textAlign={'center'} border={'1px solid #ccc'} borderRadius={6}>
//                             Name:{bookings[0].user.name}
//                         </Typography>
//                         <Typography padding={1} width={"auto"} textAlign={'center'} border={'1px solid #ccc'} borderRadius={6}>
//                             Email:{bookings[0].user.email}
//                         </Typography>
//                     </Box>
//                     <Box width={"70%"} display="flex" flexDirection={'column'}>
//                         <Typography variant='h3' fontFamily={"verdana"} textAlign="center" padding={2} > Booking Details</Typography>
//                         <Box margin={"auto"} display="flex" flexDirection={"column"} width="80%">
//                             <List>
//                                 {bookings.map((Booking, index) => (
//                                     <ListItem sx={{ bgcolor: "#00d386", color: "white", textAlign: "center", margin: 1, }}>
//                                         <ListItemText sx={{ margin: 1, width: "auto", textAlign: 'left' }}>
//                                             Movie:{Booking.movie.title}
//                                         </ListItemText>
//                                         <ListItemText sx={{ margin: 1, width: "auto", textAlign: 'left' }}>
//                                             Seat Number:{Booking.seatNumber}
//                                         </ListItemText>
//                                         <ListItemText sx={{ margin: 1, width: "auto", textAlign: 'left' }}>
//                                             Date:{ new Date(Booking.date).toLocaleString()}
//                                         </ListItemText>
//                                     </ListItem>
//                                 ))}
//                             </List>
//                         </Box>
//                     </Box>
//                 </Fragment>
//             )}
//         </Box>
//     )
// }
