import React from 'react';

function Card({ title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
}

function EtudeDeCas() {
  const projects = ["Nike, the new website", "Paypal, how their data are stored"];

  return (
    <div>
      {projects.map((project, index) => (
        <Card key={index} title={project} />
      ))}
    </div>
  );
}

export default EtudeDeCas;