import { Link } from "react-router-dom";

function Works() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto"> {/* Centrer et réduire la largeur pour les grands écrans */}
          <h1 className="text-center mb-4">Welcome on the works page. Please, select a category</h1>
          <div className="list-group">
            <Link to="/works/exercices" className="list-group-item list-group-item-action">
              Exercices
            </Link>
            <Link to="/works/etudedecas" className="list-group-item list-group-item-action">
              Case Study
            </Link>
            <Link to="/works/projetsconcrets" className="list-group-item list-group-item-action">
              Concret case
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;