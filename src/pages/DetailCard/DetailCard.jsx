import "./DetailCard.css";

function DetailCard() {
  return (
    
          
      <div>
     <div>
     <header>
    <h1>aqui va el modelo</h1>
</header>
		
      
<div class="container">
<div class="row">
<div class="col s3 m3"><img src="https://source.unsplash.com/800x600/?beach" alt="" class="materialboxed responsive-img"></img></div>  
<div class="col s3 m3"><img src="https://source.unsplash.com/800x600/?sand" alt="" class="materialboxed responsive-img"></img></div>
<div class="col s3 m3"><img src="https://source.unsplash.com/800x600/?boat" alt="" class="materialboxed responsive-img"></img></div>
  <div class="col s3 m3"><img src="https://source.unsplash.com/800x600/?cruise" alt="" class="materialboxed responsive-img"></img></div>

  </div>
</div>
			


       </div>
       <div class="position-relative bg-primary overflow-hidden">
      <div class="container position-relative zi-2 content-space-3 content-space-md-5">
            <h1 class="text-white">Ficha técnica</h1>
            <p class="text-white">aqui va la ficha tecnica </p>
          <div class="d-grid d-sm-flex justify-content-center gap-2">
                </div>
            </div>


            
              </div>
              <section class="demo-intro blue darken-3">
  <div class="container light-blue accent-2">
    <h1 >Descripción </h1>
    <p> aqui va la Descripción</p>
  </div>
</section>



<h2 class="subtitle">
</h2>
<div class="flex-container">
    <div class="row"> 
        <div class="flex-item col1">
			<p >¡¡Llama ya, que no te lo ganen!!</p>
		</div>
        <div class="flex-item col2">
			  <button type="submit" class="btn btn-primary">Agregar a favoritos</button>

		</div>
    </div>
</div>

  </div>



    
  );
}

export default DetailCard;