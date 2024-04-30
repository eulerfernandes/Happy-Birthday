import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 50px;
    gap: 100px;
`;

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;

    .name {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    img {
        width: 50px;
        transition: transform 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
        transform: scale(1.05);
        }
    }

    .box {
        display: flex;
        gap: 20px;
    }

    a {
        font-size: 28px;
        cursor: pointer;

        &:hover {
        opacity: 0.8;
        }
    }
    
    p {
        font-size: 36px;
        font-weight: 800;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
        transform: scale(1.05);
        }
    }
`;

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        margin-top: 50px;
        font-size: 70px;
        font-weight: 1000;
    }

    h2 {
        margin-top: 30px;
        font-size: 16px;
        font-style: italic;
        font-family: "Roboto";
        font-weight: 100;
    }

    button {
        margin-top: 60px;
        background-color: red;
        font-size: 16px;
        color: white;
        border: none;
        border-radius: 25px;
        width: 260px;
        height: 40px;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

