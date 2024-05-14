import React from 'react';
import portraitImage from '../../images/photoprofil.jpg'; // Assurez-vous que le chemin est correct

function About() {
  return (
    <div className="about-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  <div className="row w-100">
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img src={portraitImage} alt="Portrait" className="img-fluid" style={{ maxWidth: '300px' }} />
    </div>
    <div className="col-md-4 text-center text-md-start">
      <h1>À propos de moi</h1>
      <p>Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
    </div>
  </div>
</div>
  );
}

export default About;