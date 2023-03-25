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
      
  <nav class="nav-extended  blue darken-3 grey-text text-darken-4 ">
    <div class="nav-wrapper">
      
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
    
    
        <li><Link to={"/signup"}>INICIAR SESSIÓN</Link></li>
        <li><Link to={"/form"}>VENDE TU VEHÍCULO</Link></li>
        <li><Link to={"/login"}>CERRAR SESSIÓN</Link></li>

      </ul>
    </div>
    
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        
        <li class="tab"><a href="#test1">AUTOS</a></li>
        <li>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <i class="large material-icons">directions_car</i>
        </li>
        <li class="tab"><a href="#test2">CAMIONETAS</a></li>
        <li>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <i class="large material-icons">airport_shuttle</i>
        </li>
        <li class="tab"><a href="#test3">MOTOS</a></li>
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

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">INICIAR SESSIÓN</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>

  
    </div>
    /*<nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button>Profile</button>
            { <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> }
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button> VENDE TU VEHCULO</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>*/
  );
}

export default Navbar;
