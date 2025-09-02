import { useState } from "react";

const articoliBorsa = [
  "Calzettoni",
  "Scarpe",
  "Pantaloncini",
  "Maglietta",
  "Accappatoio",
  "Shampoo",
  "Mutande",
  "Calze",
];

function App() {
  const [nuovoArticolo, setNuovoArticolo] = useState("");
  return (
    <>
      <h1 className="text-center my-4">Articoli Borsa da Calcio</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h4>Lista Articoli</h4>
          </div>
          <div className="col-12">
            <ul className="list-unstyled list-group">
              {articoliBorsa.map((articolo, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    {articolo}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-12 mt-3">
            <form>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Inserisci articolo"
                  value={nuovoArticolo}
                  onChange={(e) => setNuovoArticolo(e.target.value)}
                />
                <button className="btn btn-primary">INSERISCI</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
