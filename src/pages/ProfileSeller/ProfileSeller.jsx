import "./ProfileSeller.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import CardsProfile from "../../components/CardsProfile/CardsProfile";
import { useState, useEffect } from "react";



const listAutos = function () {
  console.log("estoy en la funsion")

}



function ProfileSeller() {
  const [autos, setAutos] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() => {
    const {urlBackend} = useContext(AuthContext);
    let endPoint = urlBackend + "/get-auto-disponibles";
    fetch(endPoint, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAutos(data);
        setRecuperado(true);
      })

      .catch(err => console.log("el error", err));
  }, [])

  if (recuperado == true) {
    return (
      <div>
          <div className="Container-ProfileSeller">
<div className="ProfileSeller">
<h5>Tus publicaciones</h5>
</div> 
</div>
        <div class="container">
          <div class="row">
            {
              autos.map((auto) => 

                  <CardsProfile auto={auto} />
              
              )
            }
          </div>
        </div>
       
<footer style={{ textAlign: 'center' }}>Tianguis de autos Ballisco</footer>

      </div>

    )

  } else {
    return (
      <div>
        cargando...
      </div>
    )
  }
}
export default ProfileSeller;
