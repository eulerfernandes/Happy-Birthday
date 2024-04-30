import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #5C0528;   

    .video {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const ContainerEdit = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 70px;
        padding: 30px;

   
        .text {
            width: 50%;
        }

        .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        
    }

    p {
        font-size: 20px;
        font-style: italic;
        font-family: "Roboto";
        font-weight: 100;
        text-align: justify;
        margin-top: 20px;
    }

    img {
        width: 300px;
        border-radius: 22px;
    
    }
`;