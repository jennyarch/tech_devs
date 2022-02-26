import styled from "styled-components";

export const Overlay = styled.div`
    background-color: rgba(52, 51, 51, 0.7);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    width: 450px;
    height: 600px;
    margin: 0 auto;
    background: rgba(52, 51, 51, 0.95);
    border-radius: 10px;
    gap: 10px;
`;
export const Title = styled.h1`
    font-family: 'Maven Pro',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    color: #FFFFFF;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 8px;
`;
export const Label = styled.label`
    font-family: 'Maven Pro',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
`
export const Input = styled.input`
    width: 310px;
    height: 30px;
    border: none;
    background: #FFFFFF;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;
export const Button = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
`;

export const Cancel = styled.button`
    width: 125px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 55px;
    border: none;
    cursor: pointer;
    &:hover{
        background: #d1cfcf;
    }
`;
export const Add = styled.button`
    width: 125px;
    height: 40px;
    background: #27AE60;
    border-radius: 55px;
    border: none;
    cursor: pointer;
    &:hover{
        background: #208d4d;
    }
`;