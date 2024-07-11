import './fichas.css';
import Ficha from './Ficha/Ficha';
function Fichas() {
  return (
      <div class="album py-5 bg-body-tertiary">
        <div class="container">

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Ficha />
              <Ficha />
              <Ficha />
              <Ficha />
              <Ficha />
              <Ficha />
              <Ficha />
              <Ficha />
              <Ficha />
              <Ficha />
              <Ficha />
          </div>
        </div>
      </div>

  );
}

export default Fichas;