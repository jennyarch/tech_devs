import styled from "styled-components";


export const CardDevs = styled.div`
    width: 300px;
    height: 480px;
`;
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #F9F9F9;
    background: rgba(249, 249, 249, 0.14);
    border-radius: 10px;
    width: 300px;
    height: 400px;
    margin-bottom: 30px;
`;
export const CardBtn = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    gap: 10px;
    
`;
export const Nome = styled.h1`
    font-size: 25px;
    font-style: normal;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    color: #FFFFFF;
`;
export const Cargo = styled.p`
    color: #FFFFFF;
    font-size: 15px;
    font-style: normal;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    margin-top: -20px;
`;
export const Links = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
`;
export const BtnVerMais = styled.button`
    width: 150px;
    height: 50px;
    background-color: #27AE60;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 55px;
    border:none;
    cursor: pointer;
    &:hover{
        background-color: #176e3b;
    }

    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;

`;
export const BtnEditar = styled.button`
    width: 125px;
    height: 40px;
    background-color: #DBB801;
    border-radius: 55px;
    border:none;
    cursor: pointer;
    &:hover{
        background-color: #b19402;
    }

    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
`;
export const BtnDelete = styled.button`
    width: 125px;
    height: 40px;
    background-color: #F42626;
    border-radius: 55px;
    border:none;
    cursor: pointer;
    &:hover{
        background-color: #ac1919;
    }

    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
`;