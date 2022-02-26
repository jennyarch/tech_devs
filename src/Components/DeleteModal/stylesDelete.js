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
    height:250px;
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
export const Paragraph = styled.p`
    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
    margin-bottom: 20px;
`;
export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
    align-items: center;


`;
export const BtnCancel = styled.button`
    width: 125px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 55px;
    border: none;
    cursor: pointer;
    &:hover{
        background: #d1cfcf;
    }

    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
`;
export const BtnDelete = styled.button`
    width: 125px;
    height: 40px;
    background: #F42626;
    border-radius: 55px;
    border: none;
    cursor: pointer;
    &:hover{
        background: #ac1919;
    }

    font-family: 'Maven Pro', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
`;