import "./FormCar.css";
import { useState, useEffect } from "react";

function FormCar() {
  const [images, setImages] = useState();

  const insertCar = async (ev) => {
    ev.preventDefault();
    console.log(images);
    /*const dataImg = new FormData();
    dataImg.append("file", images);
    dataImg.append("upload_preset", "images");

    const responseCloud = await fetch(
      "https://api.cloudinary.com/v1_1/divoqhcny/Autos-ballisco/upload",
      {
        method: "POST",
        body: dataImg
      }

    )

    let urlCloud = await responseCloud.json().secure_url;
    console.log(urlCloud)*/

    let dataCar = {};
    dataCar.tipo = document.getElementById("tipo_de_vehiculo").value;
    dataCar.marca = document.getElementById("marca").value;
    dataCar.modelo = document.getElementById("modelo").value;
    dataCar.anio = document.getElementById("anio").value;
    dataCar.color = document.getElementById("color").value;
    dataCar.kilometraje = document.getElementById("kilometraje").value;
    dataCar.factura = document.getElementById("factura").value;
    dataCar.npropietarios = document.getElementById("propietarios").value;
    dataCar.precio = document.getElementById("precio").value;
    dataCar.contacto = document.getElementById("phone").value;
    dataCar.placa = document.getElementById("placa").value;
    dataCar.niv = document.getElementById("niv").value;
    dataCar.descripcion = document.getElementById("descripcion").value;
    dataCar.disponible = true;
dataCar.imagen=images;

    fetch("http://localhost:5005/api/add-auto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataCar)
    })
      .then(data => console.log("mi respuesta: ", data))
      .catch(err => console.log("el error", err));

    console.log(dataCar);
  }

  const uploadIg = async (event) => {
    let archivoImg = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(archivoImg);
    reader.onload = await function () {
      let urlBase64 = reader.result;
      let imgPreview = document.getElementById("preview-img");
      /*setImages(archivoImg);*/
      setImages(urlBase64);

      imgPreview.setAttribute("src", urlBase64);
    }
    console.log("estoy dentro de la fun", images);
  }
  return (


    <div>
      <form onSubmit={insertCar}>
        <div>
          <div className="Container-Form">
            <div className="Form">
              <h4>¡Publica tu vehículo ahora!</h4>

            </div>
          </div>
        </div>

        <div class="container">
          <div class="mx-card">



            <div class="row">
              <div class="col s12">
                <div class="row">
                  <div class="input-field col s3">
                    <input id="tipo_de_vehiculo" type="text" placeholder=" " class="validate"></input>
                    <label class="active" for="tipo_de_vehicculo">Tipo de vehículo</label>
                  </div>
                  <div class="input-field col s3">
                    <input id="marca" type="text" class="validate"></input>
                    <label class="active" for="marca">Marca</label>
                  </div>
                  <div class="input-field col s3">
                    <input id="modelo" type="text" class="validate"></input>
                    <label class="active" for="modelo">Modelo</label>
                  </div>
                  <div class="input-field col s3">
                    <input id="anio" type="text" class="validate"></input>
                    <label class="active" for="anio">Año</label>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <div class="row">
                      <div class="input-field col s3">
                        <input id="color" type="text" class="validate"></input>
                        <label class="active" for="color">Color</label>
                      </div>
                      <div class="input-field col s3">
                        <input id="kilometraje" type="text" class="validate"></input>
                        <label class="active" for="kilometraje">Kilometraje</label>
                      </div>
                      <div class="input-field col s3">
                        <input id="factura" type="text" class="validate"></input>
                        <label class="active" for="factura">Tipo de factura</label>
                      </div>
                      <div class="input-field col s3">
                        <input id="propietarios" type="text" class="validate"></input>
                        <label class="active" for="propietarios">Numero de propietarios anteriores</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s3">
                        <input id="precio" type="text" placeholder="$"
                        ></input>
                        <label class="active" for="precio"> </label>
                      </div>
                      <div class="input-field col s3">
                        <input id="phone" type="tel" placeholder="☎ "
                          class="validate"></input>
                        <label class="active" for="phone">  Contacto</label>
                      </div>
                      <div class="input-field col s3">
                        <input id="placa" type="text" class="validate"></input>
                        <label class="active" for="placa">Placa</label>
                      </div>
                      <div class="input-field col s3">
                        <input id="niv" type="text" class="validate"></input>
                        <label class="active" for="niv">NIV</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="input-field col s12">
                        <div class="file-field input-field">
                          <div style={{ backgroundColor: "#90caf9", }} class="btn">
                            <span >Subir fotos</span>
                            <input type="file" onChange={uploadIg}></input>
                          </div>
                          <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder=" Subir Imágenes"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <img src="" alt="" id="preview-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <textarea id="descripcion" type="text" class="materialize-textarea" data-length="120"></textarea>
                  <label class="active" for="descripcion">Descripción</label>
                </div>
              </div>
              <button style={{ backgroundColor: "#90caf9", }} class="btn waves-effect waves-light" type="submit" name="action">Guardar
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>


  );
}

export default FormCar;