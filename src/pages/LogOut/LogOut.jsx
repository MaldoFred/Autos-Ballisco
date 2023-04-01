import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";


function LogOut(){
    const navigate = useNavigate();

const { logOutUser } = useContext(AuthContext);

logOutUser();

navigate("/home");


}

export default LogOut;