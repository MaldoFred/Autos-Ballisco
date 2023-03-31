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
         <div className="Container-Home">
<div className="Home">
<h3>Autos disponibles</h3>

</div> 
</div>

      <div>
        
        <div class="container">
          <div class="row">
            {
              autos.map((auto) => 

                  <Cards auto={auto} />
              
              )
            }
          </div>
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
export default HomePage;