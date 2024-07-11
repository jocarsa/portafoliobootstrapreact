import React, { useState, useEffect } from 'react';
import './fichas.css';
import Ficha from './Ficha/Ficha';
function Fichas() {
    const [fichas, setFichas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(response => response.json())
            .then(function(data){
                setFichas(data)
            console.log(data)
                })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    const mis_fichas = fichas.map(ficha => 
        <Ficha titulo = {ficha.titulo} contenido={ficha.contenido}  tiempo={ficha.tiempo}   />
    )
    
  return (
      <div class="album py-5 bg-body-tertiary">
        <div class="container">

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {mis_fichas}  
          </div>
        </div>
      </div>

  );
}

export default Fichas;