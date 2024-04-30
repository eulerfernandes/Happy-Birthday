/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import img from '../../assets/img 1.png'
import img1 from '../../assets/img 2.png'
import img2 from '../../assets/img 3.png'
import { ContainerEdit, Container } from "./styles";
import Caroussel from '../../components/caroussel/carrousselConfig';
import Video from '../video';

function Second() {
    return (
        <Container id="Depoimentos">
            <ContainerEdit>

                <div className="text">
                    <p>Feliz aniversário!
                        É com um enorme prazer que venho lhe dar os meus parabéns. Quero lhe desejar grandes bênçãos na sua vida e que Deus venha iluminar você cada dia mais e mais. Que todos os seus sonhos se realizem e que você continue sendo essa pessoa maravilhosa.</p><br/>
                    <p>Que a sua jornada continue repleta de aventuras emocionantes e que o seu coração continue transbordando felicidade no dia de hoje. Feliz aniversário! </p><br/>
                    <p>Madai, à medida que você celebra mais um ano de vida, quero lembrar o quão incrível você é e o quanto significa para todos nós. Seu coração generoso, sua mente brilhante e seu espírito corajoso são verdadeiramente inspiradores. Que este dia seja apenas o começo de um ano cheio de realizações, amor e momentos inesquecíveis.</p><br/>
                    <p>"Feliz aniversário, Madai! Que este dia seja o começo de um novo capítulo emocionante em sua jornada. Que você seja abençoada com amor, saúde e felicidade em abundância. Que cada momento seja um lembrete do quanto você é amada e valorizada por todos ao seu redor. Que você continue sendo a pessoa incrível que é, e que este ano traga ainda mais motivos para sorrir e celebrar. Parabéns!"</p><br/>
                    <p>Tenho muito orgulho de você, nunca deixe de ser essa pessoa maravilhosa que inspira a todos com seus ensinamentos e vivências incríveis! Feliz aniversário, saiba que a sua evolução é notável e constante. Você conquistará o mundo!</p><br/>
                    <p>As melhores e mais lindas frases e mensagens de aniversário para você enviar pelo WhatsApp. Mensagens de amor, amizade, evangélicas, com Deus e muito mais para desejar parabéns de uma forma muito especial!</p><br/>
                </div>

                <div className="box">
                    <img src={img}></img>
                    <img src={img1}></img>
                    <img src={img2}></img>
                </div>

            </ContainerEdit>
            <Caroussel />

            <div className="video">
            <Video />
            </div>
        </Container>
    )
}


export default Second;
