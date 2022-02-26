import React from "react";
import { createBrowserHistory } from 'history';
import { useParams } from 'react-router-dom';

import {
    Overlay,
    Modal,
    Title,
    Paragraph,
    Buttons,
    BtnCancel,
    BtnDelete

} from './stylesDelete';

function DeleteDev(){

    let { id } = useParams()
    

    function CloseModal(id){
        const history = createBrowserHistory();
        history.push(`/tabelaDevs/${id}`);
        history.go();
    }

    return (
        <Overlay>
            <Modal>
                <Title>Deletar Desenvolvedor</Title>
                <Paragraph>Tem certeza que deseja deletar este desenvolvedor?</Paragraph>
                <Buttons>
                    <BtnCancel onClick={CloseModal}>Cancela</BtnCancel>
                    <BtnDelete>Deleta</BtnDelete>
                </Buttons>
            </Modal>
        </Overlay>
    )
}
export default DeleteDev;