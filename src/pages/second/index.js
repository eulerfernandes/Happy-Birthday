import React from "react";
import img from '../../assets/img 1.png'
import img1 from '../../assets/img 2.png'
import img2 from '../../assets/img 3.png'
import { ContainerEdit, Container } from "./styles";

function Second() {
    return (
        <Container>
        <div> 
            <img src={img}></img>
            <img src={img1}></img>
            <img src={img2}></img>
        </div>
        </Container>
    )
}


export default Second;
