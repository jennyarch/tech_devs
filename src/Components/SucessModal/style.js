import styled from "styled-components";


export const Overlay = styled.div`
    background-color: rgba(52, 51, 51, 0.3);
    border-radius: 10px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content:center;
    align-items: center;
`;
export const Modal = styled.div`
    background-color: #343333;
    width: 463px;
    height:200px;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
`;
export const Title = styled.h1`
    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    color: #FFFFFF;
    margin-bottom:15px;
`;
export const Image = styled.img`
    width: 80px;
    height: 80px;

`;