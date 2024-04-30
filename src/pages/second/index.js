/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import img from '../../assets/img 1.png'
import img1 from '../../assets/img 2.png'
import img2 from '../../assets/img 3.png'
import img3 from '../../assets/photoMadai.jpeg'
import { ContainerEdit, Container } from "./styles";
import Video from '../video';

function Second() {
    return (
        <Container id="texto">
            <ContainerEdit>

                <div className="text">
                    <p>Querida Madai!</p>
                    <p>Em meio às voltas que a vida nos dá, há momentos que se destacam, momentos que nos tocam profundamente e nos lembram da preciosidade de quem está ao nosso lado. Seu aniversário é um desses momentos. É um momento de celebração não apenas por mais um ano que se completa em sua jornada, mas também por toda a luz, amor e inspiração que você espalha ao nosso redor.</p>
                    <p>Ao longo do tempo, você se tornou muito mais do que uma amiga, você se tornou um pilar em nossas vidas, alguém em quem podemos confiar, alguém que está sempre lá para nos apoiar nos momentos difíceis e para compartilhar as alegrias nos momentos felizes. Sua presença é um presente inestimável que valorizamos profundamente.</p>
                    <p>Madai, você é como um jardim em plena florada, irradiando beleza, bondade e esperança. Sua gentileza e compaixão tocam os corações daqueles que têm a sorte de conhecê-la, e sua determinação e força inspiram-nos a enfrentar desafios com coragem e resiliência.</p>
                    <p>À medida que você completa mais um ano de vida, desejo que este novo capítulo seja repleto de momentos inesquecíveis, de sorrisos que iluminam seu rosto e de abraços calorosos que aquecem seu coração. Que você continue a seguir seus sonhos com fervor e a viver cada dia com gratidão e alegria.</p>
                    <p>À medida que olhamos para trás, refletindo sobre os anos que passaram, somos lembrados não apenas dos momentos memoráveis que compartilhamos, mas também do impacto profundo que sua presença teve em nossas vidas. Você é aquela pessoa cujo sorriso ilumina os dias mais sombrios, cujas palavras confortam as almas cansadas e cujo abraço traz paz ao coração.</p>
                    <p>À medida que você completa mais um ano de vida, quero desejar-lhe toda a felicidade, saúde e sucesso que este mundo pode oferecer. Que cada dia seja uma nova oportunidade de crescimento e realização, uma chance de viver plenamente e de abraçar tudo o que a vida tem a oferecer.</p>
                    <p>Que você continue a trilhar seu caminho com confiança e determinação, sempre seguindo seus sonhos e nunca perdendo de vista o que realmente importa. E que, ao longo do caminho, você sempre encontre amor, apoio e amizade em cada passo da jornada.</p>
                    <p>Feliz aniversário, querida Madai! Que este dia seja o início de um ano repleto de bênçãos e momentos inesquecíveis. Saiba que você é amada, valorizada e admirada além das palavras, hoje e para sempre.</p>
                    <p>Com todo o carinho do mundo,</p>
                    <p>LUCIANA.</p>
                </div>

                <div className="box">
                    <img src={img}></img>
                    <img src={img1}></img>
                    <img src={img2}></img>
                    <img src={img3}></img>
                </div>

            </ContainerEdit>
            <div className="video">
            <Video />
            </div>
        </Container>
    )
}


export default Second;
