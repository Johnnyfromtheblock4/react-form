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

import { useState } from "react";

function App() {
  return (
    <>
      <h1 className="text-center my-4">Articoli Borsa da Calcio</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h4>Lista Articoli</h4>
          </div>
          <div className="col-12">
            <ul className="list-unstyled">
              {articoliBorsa.map((articolo, index) => {
                return <li key={index}>{articolo}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
