/*import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [productos, setProductos] = useState([]);

  //Consumiendo una API
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=lenceria&limit=20")
      .then(respuesta => respuesta.json())
      .then(resultado => {
        setProductos(resultado.results);
      });
  }, []);


  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {
          
          productos.map(producto => (
            <div key={producto.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={producto.thumbnail} className="img-fluid rounded-start" alt={producto.title} />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text"><b>${producto.price}</b></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fetch; */
