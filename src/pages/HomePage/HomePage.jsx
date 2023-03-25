import "./HomePage.css";
import Cards from "../../components/Cards/Cards";
import { useState, useEffect } from "react";



const listAutos = function () {
  console.log("estoy en la funsion")

}



function HomePage() {
  const [autos, setAutos] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5005/api/get-auto-disponibles", {
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
        <h1>Tianguis de autos Ballisco</h1>
        <div class="container">
          <div class="row">
            {
              autos.map((auto) => 

                  <Cards auto={auto} />
              
              )
            }
          </div>
        </div>
        <section class="ontainer blue darken-3">
  <div class="container blue darken-3">
    <p class="left-align light">Es uno de los tianguis de autos más grandes del país, el cual ocupa cerca de dos kilómetros de la Carretera Federal Lechería-Texcoco a la altura de la colonia Santa Cruz Venta de Carpio; por esta razón también se le conoce como el tianguis de Venta de Carpio. Aquí, igual que en este tipo de lugares, dueños y compradores buscan trato directo para la compra-venta de los vehículos, sin intermediarios.</p>
  </div>
</section>

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
export default HomePage;