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
    /*
    const mis_articulos = articulos.map(articulo => 
        <Articulo titulo = {articulo.titulo} contenido={articulo.contenido}  fecha={articulo.fecha}  categoria={articulo.categoria} />
    )
    */
  return (
      <div class="album py-5 bg-body-tertiary">
        <div class="container">

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Ficha titulo="ficha1" contenido="hola" tiempo="1"/>
              <Ficha titulo="ficha2" contenido="hola"  tiempo="2"/>
              <Ficha titulo="ficha3" contenido="hola"  tiempo="3"/>
              <Ficha titulo="ficha4" contenido="hola"  tiempo="4"/>
              <Ficha titulo="ficha5" contenido="hola"  tiempo="5"/>
              <Ficha titulo="ficha6" contenido="hola"  tiempo="6"/>
              <Ficha titulo="ficha7" contenido="hola"  tiempo="7"/>
              <Ficha titulo="ficha8" contenido="hola"  tiempo="8"/>
              <Ficha titulo="ficha9" contenido="hola"  tiempo="9"/>
              <Ficha titulo="ficha10" contenido="hola"  tiempo="10"/>
              <Ficha titulo="ficha11" contenido="hola"  tiempo="11"/>
                <Ficha titulo="ficha12" contenido="hola"  tiempo="12"/>
          </div>
        </div>
      </div>

  );
}

export default Fichas;