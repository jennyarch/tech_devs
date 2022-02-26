import React from "react";
import { useState } from "react";
import ElementModal from '../AddModal/addModal';
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';

import { Image } from '@skynexui/components';
import LinhaImagem from '../../assets/img/linha.png';
import IconGit from '../../assets/img/icone github.png';
import IconLink from '../../assets/img/icone linkedin.png';
import Ruan from  '../../assets/img/ruan.png';
import Mateus from  '../../assets/img/mateus.png';
import {
    Container,
    ContainerBtn,
    ButtonAdd,
    TabelaDevs,
    CardDevs,
    CardContainer,
    CardBtn,
    Nome,
    Cargo,
    Links,
    BtnVerMais,
    BtnEditar,
    BtnDelete,
    Seta
} from './styles'



function DevsBody() {

    const [username, setUserName] = useState('jennyarch');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalEditVisible, setIsModalEditVisible] = useState(false);
    const [ isModalDeleteVisible, setIsModalDeleteVisible ] = useState(false);
   

    return (
        <Container>
            <ContainerBtn>
                <ButtonAdd onClick={() => setIsModalVisible(true)}>Adicionar Desenvolvedor</ButtonAdd>
                {isModalVisible ? <ElementModal/> : null}
            </ContainerBtn>
            <TabelaDevs>
                <Seta>{'<'}</Seta>
                <CardDevs>
                    <CardContainer>
                        <Image
                            styleSheet={{
                                width: '175px',
                                height: '175px',
                                borderRadius: '50%',
                                marginBottom: '16px',
                                border: '3px solid #27AE60',
                                
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <img src={LinhaImagem}/>
                        <Nome>Jennyfer C Santos</Nome>
                        <Cargo>Desenvolvedora Front-End</Cargo>
                        <Links>
                            <li><a href="https://github.com/jennyarch"><img src={IconGit} alt=""/></a></li>
                            <li><a href="https://www.linkedin.com/in/jennyfer-c-santos/"><img src={IconLink} alt=""/></a></li>
                            <li><BtnVerMais>Ver mais</BtnVerMais></li>
                        </Links>

                    </CardContainer>
                    <CardBtn>
                        <BtnEditar onClick={() => setIsModalEditVisible(true)}>Editar</BtnEditar>
                        {isModalEditVisible ? <EditModal /> : null}
                        <BtnDelete onClick={() => setIsModalDeleteVisible(true)}>Deletar</BtnDelete>
                        {isModalDeleteVisible ? <DeleteModal/> : null}
                    </CardBtn>
                </CardDevs>

                <CardDevs>
                    <CardContainer>
                        <Image
                            styleSheet={{
                                width: '175px',
                                height: '175px',
                                borderRadius: '50%',
                                marginBottom: '16px',
                                border: '3px solid #27AE60',
                                
                            }}
                            src={Ruan}
                        />
                        <img src={LinhaImagem} alt={'Linha Imagem'}/>
                        <Nome>Juan Cruz Blandi</Nome>
                        <Cargo>Desenvolvedora Front-End</Cargo>
                        <Links>
                            <li><a href="https://github.com/"><img src={IconGit} alt=""/></a></li>
                            <li><a href="https://www.linkedin.com/"><img src={IconLink} alt=""/></a></li>
                            <li><BtnVerMais>Ver mais</BtnVerMais></li>
                        </Links>

                    </CardContainer>
                    <CardBtn>
                        <BtnEditar onClick={() => setIsModalEditVisible(true)}>Editar</BtnEditar>
                        {isModalEditVisible ? <EditModal/> : null}
                        <BtnDelete onClick={() => setIsModalDeleteVisible(true)}>Deletar</BtnDelete>
                        {isModalDeleteVisible ? <DeleteModal /> : null}
                    </CardBtn>
                </CardDevs>

                <CardDevs>
                    <CardContainer>
                        <Image
                            styleSheet={{
                                width: '175px',
                                height: '175px',
                                borderRadius: '50%',
                                marginBottom: '16px',
                                border: '3px solid #27AE60',
                                
                            }}
                            src={Mateus}
                        />
                        <img src={LinhaImagem} alt="Linha Divisoria"/>
                        <Nome>Mateus santos</Nome>
                        <Cargo>Desenvolvedor Back-End</Cargo>
                        <Links>
                            <li><a href="https://github.com/"><img src={IconGit} alt="Link GitHub"/></a></li>
                            <li><a href="https://www.linkedin.com/"><img src={IconLink} alt="Link Linkedin"/></a></li>
                            <li><BtnVerMais>Ver mais</BtnVerMais></li>
                        </Links>

                    </CardContainer>
                    <CardBtn>
                        <BtnEditar onClick={() => setIsModalEditVisible(true)}>Editar</BtnEditar>
                        {isModalEditVisible ? <EditModal /> : null}
                        <BtnDelete onClick={() => setIsModalDeleteVisible(true)}>Deletar</BtnDelete>
                        {isModalDeleteVisible ? <DeleteModal /> : null}
                    </CardBtn>
                </CardDevs>
                <Seta>{'>'}</Seta>
            </TabelaDevs>
        </Container>
    )
}
export default DevsBody;