import React from 'react';
import image1 from '../../images/image1.jpeg'; // Assurez-vous que le chemin est correct
import image2 from '../../images/image2.jpeg'; // Assurez-vous que le chemin est correct

function Card({ title, image, text }) {
  return (
    <div className="col-md-4 mb-4">
    <div className="card h-100"> {/* Ajustez la largeur comme nécessaire */}
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  </div>
  );
}

function Projetsconcrets({ showHeader }) {
  const projects = [
    {
      title: "My grandparent bridge club website",
      image: image1,
      text: "Un site web que j'ai créé pour le club de bridge de mes grands-parents."
    },
    {
      title: "My friend bakery",
      image: image2,
      text: "Un projet de site web pour la boulangerie d'un ami."
    },
    {
      title: "Projet personnel",
      text: "Un projet personnel que j'ai développé pour approfondir mes connaissances en React."
    }
  ];

  return (
    <div className="container">
    <div className="row">
    {showHeader && (
          <>
      <h3>Liste des travaux :</h3>
      <p>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
      </>
      )}
      {projects.map((project, index) => (
        <Card key={index} title={project.title} image={project.image} text={project.text} />
      ))}
    </div>
    </div>
  );
}

export default Projetsconcrets;