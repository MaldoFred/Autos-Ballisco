import "./App.css";
import { Route, Routes } from "react-router-dom"; 
import 'antd/dist/reset.css';
import 'materialize-css/dist/css/materialize.min.css';

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DetailCard from "./pages/DetailCard/DetailCard";
import FormCar from "./pages/FormCar/FormCar";
import ProfileSeller from "./pages/ProfileSeller/ProfileSeller";
import FormEdit from "./pages/FormEdit/FormEdit";


import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailCard />} />
        <Route path="form" element={<FormCar/>}/>
        <Route path="profileSeller" element={<ProfileSeller/>}/>
        <Route path="/formEdit/:id" element={<FormEdit/>}/>


        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
      
    </div>
  );
}

export default App;
