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
    Add,
    Overlay
} from './stylesAdd.js';



function AddDev(){

    let { id } = useParams()

    function CloseModal(id){
        const history = createBrowserHistory();
        history.push(`/tabelaDevs/${id}`);
        history.go();
    }



    return(
        <Overlay>

            <Modal>
                <Title>Adicionar Desenvolvedor</Title>
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
                    <Add>Adicionar</Add>
                </Button>
            </Modal>
        </Overlay>
    )
}
export default AddDev;