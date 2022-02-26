import styled from "styled-components";

export const Container = styled.section`
    display:flex;
    flex-direction: row;
    justify-content: center;
    height:calc(100vh - 100px);
    background:#1D1D1D;
`;

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    margin-left: 20px;
    align-items: baseline;

`;
export const Title = styled.h1`
    font-size:45px;
    font-weight: 700;
    font-family: 'Overpass', sans-serif;
    font-style: normal;
    color:#D2D2D2;
    width: 500px;
`;
export const Paragraph = styled.p`
    font-size:22px;
    font-weight: 400;
    font-style: normal;
    font-family: 'Overpass', sans-serif;
    color:#A9A9A9;
    width: 550px;
    margin-bottom: 50px;
`;
export const Button = styled.button`
    width: 240px;
    height: 58px;
    background-color: #27AE60;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 55px;
    border: none;
    color:#FFFFFF;
    font-family: 'Overpass', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color:#6FCF97;
    }
`;
export const Linha = styled.hr`
    border: 0;
    width: 100px;
    height: 2px;
    background-image: linear-gradient(to right, transparent, #27AE60, transparent);
    margin-top:20px;
    
`;
export const Divisor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin-left: 50px;
`;
export const ImagemPersona = styled.img`
    width: 600px;
    height: 500px;
`;