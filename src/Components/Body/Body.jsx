import React from "react";
import Persona from '../../assets/img/Programador main.svg';
import { createBrowserHistory } from 'history';
import { useParams } from "react-router-dom";

import {
    Container,
    ContainerLeft,
    ContainerRight,
    Title,
    Paragraph,
    Button,
    Linha,
    Divisor,
    ImagemPersona
} from './styles';





function Body(){

    let { id } = useParams()

    function pageTelaDevs(id){
        const history = createBrowserHistory();
        history.push(`/tabelaDevs/${id}`);
        history.go();
    }


    return(
        <Container>
            <ContainerLeft>
                <Title>O maior banco de devs do Brasil</Title>
                
                <Paragraph>
                   Não importa se front ou back end,  fazer networking
                   é muito importante. Faça parte da maior
                   comunidade de desenvolvedores brasileiros.
                </Paragraph>
                <Divisor>
                    <Button onClick={pageTelaDevs}>Entre agora</Button>
                    <Linha />
                </Divisor>
            </ContainerLeft>
            <ContainerRight>
                <ImagemPersona src={Persona} />
            </ContainerRight>
        </Container>
    )
}
export default Body;