import "./Cards.css";

const Cards = (props) => {
  console.log("estoy en componente cards",props)
  const url = "/detail/"+props.auto._id;
  return (


<div>
<div class="col s3 m3">    <div class="card">
      <img src="image.jpg" class="card-img-top" alt="card image" />
      

      <div class="card-marca"><h5>{props.auto.marca} <br /> {props.auto.modelo} </h5></div>
      <div class="card-body">
        <p class="card-anio"> {props.auto.anio} </p>
        <p class="card-precio">Precio:{props.auto.precio}</p>
        <a href={url} className="btn btn-outline-secondary">Ver</a>



      </div>
    
  </div>
 </div>
    </div>
  

  );
};

export default Cards;
