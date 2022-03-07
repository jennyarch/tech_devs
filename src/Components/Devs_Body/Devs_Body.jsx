import React from "react";
import { useState, useRef } from "react";
import ElementModal from '../AddModal/addModal';
import Axios from 'axios';
import { useEffect } from "react";
import Card from "../../Components/Cards/Card";


import {
    Container,
    ContainerBtn,
    ButtonAdd,
    TabelaDevs,
    SetaRight,
    SetaLeft,
    CarrouselDevs
} from './styles'



function DevsBody() {

    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [listDevs, setListDevs] = useState();
    const carousel = useRef(null);
    
   
    console.log(listDevs);
    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            setListDevs(response.data);
        });
    }, []);

    function handleLeftClick(e){
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.SetaLeft -= carousel.offsetWidth;
    }
    function handleRigthClick(e){
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.SetaRight += carousel.offsetWidth;
    }

    return (
        <Container>
            <ContainerBtn>
                <ButtonAdd onClick={() => setIsModalVisible(true)}>Adicionar Desenvolvedor</ButtonAdd>
                {isModalVisible ? <ElementModal/> : null}
            </ContainerBtn>
            <TabelaDevs>
                <SetaLeft onClick={handleLeftClick}>{'<'}</SetaLeft>
                <CarrouselDevs ref={carousel}>
                    {typeof listDevs !== "undefined" && listDevs.slice(0,4).map((value) => {
                        return(
                            <>
                                <Card/>{/* o meu box de Devs que vai renderizar na tela */}
                            </> 
                                )   
                        })}
                    
                </CarrouselDevs>
                <SetaRight onClick={handleRigthClick}>{'>'}</SetaRight>
            </TabelaDevs>
        </Container>
    )
}
export default DevsBody;