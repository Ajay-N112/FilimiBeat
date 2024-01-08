import axios from "axios";

export const getAllMovies = async () => {
  try {
    const res = await axios.get("/movie");
    // console.log(res);

    if (res.status === 200) {
      const data = res.data;
      return data;
    } else {
      console.error("Unexpected response status:", res.status);

    }
  } catch (error) {
    console.error("Error fetching data:", error.message);

  }
};


export const sendUserAuthRequest = async (data, signup) => {
  const res = await axios
    .post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password
    }).catch((err) => console.log(err));


  if (res.status !== 200 && res.status !== 201) {
    console.log("erorr");
  }
  const resData = await res.data
  return resData
}





export const sendAdminLoginAuthRequest = async (data) => {
  const res = await axios.post("/admin/login", {
    email: data.email,
    password: data.password,
  }).catch(err => console.log(err))

  if (res.status !== 200) {
    return console.log("unexpected error");
  }

  const resData = await res.data;
  return resData;

};


export const getMovieDetails = async (id) => {
  const res = await axios.get(`/movie/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("unexpected error");
  }

  const resData = await res.data;
  return resData;
};




export const newBooking = async (data) => {
  console.log(data);
  const res = await axios
    .post("/booking", {
      movie: data.movie,
      seatNumber: data.inputs.seatNumber,
      date: data.inputs.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));



  if (res.status !== 201) {
    return console.log("unexpected Error");

  }
  const resData = await res.data;
  return resData;
};









// export const getUserBooking = async ()=>{
//   const  Id =localStorage.getItem("userId");
//   const res =await axios
//   .get(`/user/bookings/${Id}`)
//   .catch((err)=>console.log(err))

// if(res.status !==200){
//   return console.log("unexpected Error")
// }
// const resData = await res.data;
// return resData;
// };

export const getUserBooking = async () => {
  try {
    const userId = localStorage.getItem("userId");
    const res = await axios.get(`/user/bookings/${userId}`);
    console.log('getUserBooking Response:', res);
    return res.data;
  } catch (error) {
    console.error('Error in getUserBooking:', error);
    throw error;
  }
};







// export const addmovies= async(data)=>{
//   const res =await axios.post("/movie",{
//     title:data.title,
//     description:data.description,
//     releaseDate:data.releaseDate,
//     posterUrl:data.posterUrl,
//     actors:data.actors,
//     admin:localStorage.getItem("adminId"),

//   },{
//     headers:{
//       Authorization:`Bearer ${localStorage.getItem("token")}`
//     }
//   })
//   .catch((err)=>console.log(err));

// if(res.status !==200){
//   return console.log("unexpected error occoured");
// }
// const resData = await res.data;
// return resData

// }




export const addmovies = async (data) => {
  try {
    const res = await axios.post("/movie", {
      title: data.title,
      description: data.description,
      releaseDate: data.releaseDate,
      posterUrl: data.posterUrl,
      actors: data.actors,
      admin: localStorage.getItem("adminId"),
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    if (res.status >= 200 && res.status < 300) {
      const resData = await res.data;
      return resData;
    } else {
      throw new Error(`Unexpected error occurred: ${res.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for the calling code to handle if necessary
  }
};



// export const getAdminById = async()=>{
//   const adminId =localStorage.getItem("adminId")
//   const res = await axios .get(`/admin/${adminId}`).catch((err)=>console.log(err))

//  if (res.status!==200){
//   return console.log("unexpected error Occoured");
//  }

// const resData = await res.data;
// return resData;

// }


// 