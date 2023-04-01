import "./DetailCard.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function DetailCard() {
  const [detail, setDetail] = useState([]);
  const [recuperado, setRecuperado] = useState(false);
  const params = useParams();
  const urlDetail = "http://localhost:5005/api/get-auto/" + params.id;
  console.log(params.id)

  useEffect(() => {
    fetch(urlDetail, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
        setRecuperado(true);
      })

      .catch(err => console.log("el error", err));
  }, [])
  if (recuperado == true) {
    return (
      <div>
        <div>
        <div className="Container-ProfileSeller">
          <div className="ProfileSeller">
            <h5>"{detail.marca} {detail.modelo}"</h5>
          </div>
        </div>

          <div class="container">
            <div class="row">
              <div class="col s3 m3"><img src={detail.imagen} alt="" class="materialboxed responsive-img"></img></div>
              
            </div>
          </div>
          
        </div>



        <div class="container">
        <h2 class="line-divider "><span class="span-line-divider ">Ficha técnica</span></h2>

          <div class="mx card ">

            <div class="row">
              <div class="input-field col s3">
                <p >Tipo de vehículo:</p>
                <b>{detail.tipo}</b>
              </div>
              <div class="input-field col s3">
                <p >Marca:</p>
                <b>{detail.marca}</b>
              </div>
              <div class="input-field col s3">
                <p >Modelo:</p>
                <b>{detail.modelo}</b>
              </div>
              <div class="input-field col s3">
                <p >Año:</p>
                <b>{detail.anio}</b>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s3">
                <p >Color:</p>
                <b>{detail.color}</b>
              </div>
              <div class="input-field col s3">
                <p >Kilometraje:</p>
                <b>{detail.kilometraje}</b>
              </div>
              <div class="input-field col s3">
                <p >Tipo de factura:</p>
                <b>{detail.factura}</b>
              </div>
              <div class="row">
                <div class="input-field col s3">
                  <p >Numero de propiuetarios:</p>
                  <b>{detail.npropietarios}</b>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s3">
                <p >Precio:</p>
                <b>{detail.precio}</b>
              </div>
              <div class="input-field col s3">
                <p >Contacto:</p>
                <b>{detail.contacto}</b>
              </div>
              <div class="input-field col s3">
                <p >Placa:</p>
                <b>{detail.placa}</b>
              </div>
              <div class="row">
                <div class="input-field col s3">
                  <p >NIV:</p>
                  <b>{detail.niv}</b>
                </div>
              </div>
            </div>
            
          </div>






        </div>



        <div class="container">
        <h2 class="line-divider "><span class="span-line-divider ">Descripción</span></h2>

          <div class="mx-card">
          <p> {detail.descripcion}</p>
          </div>
        </div>



      

        <div className="Container-ProfileSeller">
          <div className="ProfileSeller">
          <p >¡¡Llama ya, que no te lo ganen!!</p>
              <b>{detail.contacto}</b>
              
          </div>
        </div>

        
        <footer style={{ textAlign: 'center' }}>Tianguis de autos Ballisco</footer>

      </div >
    )
  } else {
    return (
      <h1>cargando</h1>
    )
  }

}

export default DetailCard;