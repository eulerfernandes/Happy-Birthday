/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";


import { Container, ContainerLinks, ContainerItens } from './styles';

function Home() {
  return (
    <Container>

      <ContainerLinks>
        <div>
          <p>Madai Freitas</p>
        </div>

        <div className="box">
          <a>Home</a>
          <a>Depoimentos</a>
        </div>
      </ContainerLinks>

      <ContainerItens>
        <h1>TEXTO AQUI</h1>
        <p>Feliz aniversário! Que tudo de bom lhe aconteça neste dia tão marcante e especial na sua vida. Aproveite com um grande sorriso no rosto, e divirta-se muito!</p>
        <button>Ver Depoimentos</button>
      </ContainerItens>

    </Container>
  )
}

export default Home;