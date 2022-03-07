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
export const CarrouselDevs = styled.div`
    display: flex;
    gap:20px;
    overflow-x: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
        display: none;
    };
`;


export const SetaLeft = styled.a`
    border: 3px solid rgba(249, 249, 249, 0.5);
    box-sizing: border-box;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    cursor: pointer;

    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: rgba(249, 249, 249, 0.5);
`;
export const SetaRight = styled.a`
    border: 3px solid rgba(249, 249, 249, 0.5);
    box-sizing: border-box;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    cursor: pointer;


    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: rgba(249, 249, 249, 0.5);
`;