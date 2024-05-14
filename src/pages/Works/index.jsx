import { Link } from "react-router-dom";



function Works() {
    return (
      <div>
        <h1>Welcome on the works page. Please, select a category</h1>
        <ul>
          <li><Link to="/works/exercices">Exercices</Link></li>
          <li><Link to="/works/etudedecas">Case Study</Link></li>
          <li><Link to="/works/projetsconcrets">Concret case</Link></li>
        </ul>
      </div>
    );
  }
export default Works;