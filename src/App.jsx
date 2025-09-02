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
  // creo un nuovo array che contine anche il nuovo articolo
  const [articoli, setArticoli] = useState(articoliBorsa);

  const handleSubmit = (e) => {
    // prevengo il refresh della pagina
    e.preventDefault();
    // eseguo la deep copy
    const nuovoArticoliBorsa = [...articoli, nuovoArticolo];
    setArticoli(nuovoArticoliBorsa);
  };
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
              {articoli.map((articolo, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    {articolo}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-12 mt-3">
            <form onSubmit={handleSubmit}>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Inserisci nuovo articolo"
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
