/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";


import { Container, ContainerLinks, ContainerItens } from './styles';

function Home() {
  return (
    <Container>

      <ContainerLinks>
        <div>
          <p>Nome da Pessoa</p>
        </div>

        <div className="box">
          <a>Home</a>
          <a>Depoimentos</a>
        </div>
      </ContainerLinks>

      <ContainerItens>
        <h1>TEXTO AQUI</h1>
        <p>Loren</p>
        <button>Ver Depoimentos</button>
      </ContainerItens>

    </Container>
  )
}

export default Home;