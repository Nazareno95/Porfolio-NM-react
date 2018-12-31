import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronF = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Quien soy</h1>
          <p className="lead" align="center">
          Soy estudiante de Analista de Sistemas, con un perfil Fullstack. A través de un 
          curso de Udemy me interioricé con React.js para hacer desarrollo Full Stack y así generó interés en mí para desarollar
          páginas web interactivas y con un diseño de última generación utilizando los paquetes más actuales usados por 
          las grandes empresas del mundo IT.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronF;