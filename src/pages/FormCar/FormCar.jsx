import "./FormCar.css";

function insertCar(ev) {
  ev.preventDefault();
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
function FormCar() {
  return (


    <div>
      <form onSubmit={insertCar}>
        <div>
          <h1>  ¡Publica tu vehículo ahora!</h1>

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
                        <label class="active" for="kilometraje">Kolometraje</label>
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
                        <input id="precio" type="text" placeholder="$$$"
                        ></input>
                        <label class="active" for="precio">precio</label>
                      </div>
                      <div class="input-field col s3">
                        <input id="phone" type="tel" placeholder="123-45-678"
                          class="validate"></input>
                        <label class="active" for="phone">Contacto</label>
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
                          <div class="btn">
                            <span>Subir fotos</span>
                            <input type="file" multiple></input>
                          </div>
                          <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder=" Subir Imágenes"></input>
                          </div>
                        </div>
                      </div>
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
              <button class="btn waves-effect waves-light" type="submit" name="action">Guardar
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