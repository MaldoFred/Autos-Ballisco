import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div>
      
  <nav class="nav-extended  grey lighten-5 grey-text text-darken-4 ">
    <div class="nav-wrapper">
      
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
    
      <li><Link to={"/home"}><h9>HOME</h9></Link></li>
        <li><Link to={"/ProfileSeller"}><h9>PERFIL</h9></Link></li>
        <li><Link to={"/form"}><h9>VENDE TU VEHÍCULO</h9></Link></li>
        <li><Link to={"/logout"}><h9>CERRAR SESSIÓN</h9></Link></li>

      </ul>
    
      <ul >
        
        <li class="tab "><a href="#test1"><h9>AUTOS</h9></a></li>
        <li>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <i class="large material-icons">directions_car</i>
        </li>
        <li class="tab"><a href="#test2"><h9>CAMIONETAS</h9></a></li>
        <li>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <i class="large material-icons">airport_shuttle</i>
        </li>
        <li class="tab"><a href="#test3"><h9>MOTOS</h9></a></li>
        <li>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <i class="large material-icons">motorcycle</i>
        </li>
        <li>
          <a href="sass.html"><i class="material-icons">search</i></a>
        </li>


      </ul>
    </div>
</nav>

  
  
    </div>
    
  );
}

export default Navbar;
