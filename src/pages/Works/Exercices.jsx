import React from 'react';

function Card({ title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
}

function Exercice() {
  const projects = ["Video Game informations", "The notepad", "React Router"];

  return (
    <div>
      {projects.map((project, index) => (
        <Card key={index} title={project} />
      ))}
    </div>
  );
}

export default Exercice;