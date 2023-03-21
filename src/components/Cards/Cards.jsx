import "./Cards.css";

const Cards = () => {
  return (
    <div className="csr-container">
      
      <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src=""/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Modelo<i class="material-icons right">more_vert</i></span>
      <ul>item1</ul>
      <ul>item2</ul>
      <ul>item3</ul>


      <p><a href="#">Ver mas</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
            
    </div>
  );
};

export default Cards;
