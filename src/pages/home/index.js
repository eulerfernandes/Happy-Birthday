/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Flor from '../../assets/flor_icon.png';
import { Container, ContainerLinks, ContainerItens } from './styles';

function Home() {
  return (
    <Container>

      <ContainerLinks>
        <div className="name">
          <p>Madai Freitas</p>
          <img src={Flor} alt="flor" />
        </div>

        <div className="box">
          <a>Home</a>
          <a>Depoimentos</a>
        </div>
      </ContainerLinks>

      <ContainerItens>
        <h1>FELIZ ANIVERSÁRIO!</h1>
        <h2>Que tudo de bom lhe aconteça neste dia tão marcante e especial na sua vida. Aproveite com um grande sorriso no rosto, e divirta-se muito!</h2>
        <a href="#Depoimentos"><button >Ver Depoimentos</button></a>
      </ContainerItens>

    </Container>
  )
}

export default Home;