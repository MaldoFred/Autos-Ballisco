import "./CardsProfile.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";


const CardsProfile = (props) => {
  const { urlBackend } = useContext(AuthContext);
  console.log("estoy en componente cards", props)
  const urlDelete = urlBackend + "/delete-auto/" + props.auto._id;
  const urlEdit = "/formEdit/" + props.auto._id;
  const navigate = useNavigate();

  return (


    <div>
      <div class="col s3 m3">    <div class="card">
        <img src={props.auto.imagen} class="card-img-top" alt="card image" />


        <div class="card-marca"><h5>{props.auto.marca} <br /> {props.auto.modelo} </h5></div>
        <div class="card-body">
          <p class="card-anio"> {props.auto.anio} </p>
          <p class="card-precio">Precio:{props.auto.precio}</p>
          <button onClick={() => {
            fetch(urlDelete, {
              method: "delete"
            })
              .then((response) => {
                navigate("/ProfileSeller");

                return response.json();
              })
              .then((data) => {
                console.log(data);
                navigate("/ProfileSeller");

              })

              .catch(err => console.log("el error", err));
          }} className="btn-floating btn-small  waves-light red"> <i class="material-icons">delete_forever</i> Borrar</button >

          <a href={urlEdit} className="btn-floating btn-small waves-effect waves-light blue"> <i class="material-icons">edit</i>Editar</a>




        </div>

      </div>
      </div>
    </div>


  );
};

export default CardsProfile;
