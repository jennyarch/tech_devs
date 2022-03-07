import React from 'react';
import { useState } from 'react';
import { Image } from '@skynexui/components';
import LinhaImagem from '../../assets/img/linha.png';
import IconGit from '../../assets/img/icone github.png';
import IconLink from '../../assets/img/icone linkedin.png';
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import {
    CardDevs,
    CardContainer,
    CardBtn,
    Nome,
    Cargo,
    Links,
    BtnVerMais,
    BtnEditar,
    BtnDelete,
} from './styles';


function Card() {

    const [username, setUserName] = useState('jennyarch');
    const [isModalEditVisible, setIsModalEditVisible] = useState(false);
    const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);



    return(
        <>
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
            </>
    )
}
export default Card;