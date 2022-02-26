import React from "react";
import { createBrowserHistory } from 'history';
import { useParams } from 'react-router-dom';
import {
    Modal,
    Title,
    Form,
    Label,
    Input,
    Button,
    Cancel,
    Edit,
    Overlay
} from './stylesEdit.js';



function EditModal(){

    let { id } = useParams()

    function CloseModal(id){
        const history = createBrowserHistory();
        history.push(`/tabelaDevs/${id}`);
        history.go();
    }



    return(
        <Overlay>

            <Modal>
                <Title>Editar Desenvolvedor</Title>
                <Form>
                    <Label htmlFor="">Nome:</Label>
                    <Input type="text" />
                
                    <Label htmlFor="">Avatar:</Label>
                    <Input type="text" />
                
                    <Label htmlFor="">Cargo:</Label>
                    <Input type="text" />
                
                    <Label htmlFor="">GitHub:</Label>
                    <Input type="text" />
            
                    <Label htmlFor="">Linkedin:</Label>
                    <Input type="text" />
                    
                </Form>
                <Button>
                    <Cancel onClick={CloseModal}>Cancelar</Cancel>
                    <Edit>Adicionar</Edit>
                </Button>
            </Modal>
        </Overlay>
    )
}
export default EditModal;