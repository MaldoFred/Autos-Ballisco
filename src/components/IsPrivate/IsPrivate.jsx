import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) {
    return <Loading />;
  }
console.log("este es el valor de isLoggedIn",isLoggedIn);
  if (!isLoggedIn) {
    // If the user is not logged in navigate to the login page ❌
    console.log("no estoy logeado");
    return <Navigate to="/login" />;
  }
  // If the user is logged in, allow to see the page ✅
  return children;
}

export default IsPrivate;
