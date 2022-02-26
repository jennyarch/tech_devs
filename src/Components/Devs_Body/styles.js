import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
    background:#1D1D1D;
`;
export const ContainerBtn = styled.div`
display: flex;
    flex-direction: row-reverse;
    margin-right: 100px;
`
export const ButtonAdd = styled.button`
width:200px;
    height: 40px;
    background-color: #27AE60;
    border-radius: 55px;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;

    font-family: 'Maven Pro', sans-serif;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    color:#FFFFFF;

    &:hover {
        background-color: #176e3b;
    }

`;
export const TabelaDevs = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
`;
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
export const Seta = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.5);
    box-sizing: border-box;
    border-radius: 50%;
    width: 70px;
    height: 70px;

    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: rgba(249, 249, 249, 0.5);
`;