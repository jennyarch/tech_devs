import styled from 'styled-components';


export const Cabecalho = styled.header`
    padding:50px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    background:#1D1D1D;
    height: 100px;
`;
export const Icons = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    gap:10px;
`;
export const ListIcons = styled.img`
    width:25px;
    height:25px;
`;
export const LogoAndTitle = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
    justify-content:center;

`
export const Title = styled.h1`
    font-size:25px;
    font-weight:500;
    font-family:'Maven Pro', sans serif;
    color:#FFFFFF;
`;
export const LogoMain = styled.img`
    width:25px;
    height:25px;
`;