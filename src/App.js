import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { Home } from "@mui/icons-material";
import HomePage from "./Components/HomePage";
import Admin from "./Components/admin/Admin";
import Movies from "./Components/movies/Movies";
import Auth from "./Components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";
import Booking from "./Components/Bookings/Booking";
import Profile from "./profile/Profile";
import { UserProfile } from "./profile/UserProfile"
import AddMovie from "./Components/movies/AddMovie";
import { AdminProfile } from "./profile/AdminProfile";
import Footer from "./profile/Footer";
// import AdminProfile from "./profile/AdminProfile";

function App() {

const dispatch = useDispatch();

  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn)
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn)
console.log("isAdminLoggedIn",isAdminLoggedIn);
console.log("isUserLoggedIn",isUserLoggedIn);

useEffect(()=>{
  if (localStorage.getItem("userId")){
dispatch(userActions.login())
  }else if(localStorage.getItem("adminId")){
dispatch(adminActions.login())
  }
},[])


  return (
    <div>
      <Header/>
      <section>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path="/movies" element={<Movies></Movies>}/>
          <Route path="/admin" element={<Admin></Admin>}/>
          <Route path="/auth" element={<Auth></Auth>}/>
          <Route path="/user" element={<UserProfile></UserProfile>}/>
          <Route path="/add" element={<AddMovie></AddMovie>}/>
          <Route path="/user-admin" element={<AdminProfile></AdminProfile>}/>
          <Route path="/booking/:id" element={<Booking></Booking>}/>

        </Routes>
<Footer></Footer>
      </section>

    </div>
  );
}

export default App;
