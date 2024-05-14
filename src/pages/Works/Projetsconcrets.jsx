import React from 'react';

function Card({ title }) {
    return (
      <div className="card">
        <h2>{title}</h2>
      </div>
    );
  }
  

function Projetsconcrets() {
    const projects = ["My grandparent bridge club website", "My friend bakery"];

    return (
      <div>
        {projects.map((project, index) => (
          <Card key={index} title={project} />
        ))}
      </div>
    );
  }

export default Projetsconcrets;