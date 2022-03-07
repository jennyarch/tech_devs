import React, { useEffect } from "react";
import { createBrowserHistory } from 'history';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Card from "../Cards/Card";
import SucessModal from "../SucessModal/SucessModal";
import Axios from 'axios';
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

    const [values, setValues] = useState();
    
    
    const handleChangeValues = (value) => {
        
        setValues(prevValues => ({
            ...prevValues,
            [value.target.name]:value.target.value,
        }));
    };
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            name: values.name,
            avatar: values.avatar,
            cargo: values.cargo,
            github: values.github,
            linkedin: values.linkedin,
        }).then((response) => {
            console.log(response); 
        });
    }

    



    return(
        <Overlay>

            <Modal>
                <Title>Adicionar Desenvolvedor</Title>
                <Form>
                    <Label htmlFor="">Nome:</Label>
                    <Input 
                    type="text"
                    name="name"
                    onChange={handleChangeValues}
                     />
                
                    <Label htmlFor="">Avatar:</Label>
                    <Input 
                    type="text"
                    name="avatar"
                    onChange={handleChangeValues} 
                    />
                
                    <Label htmlFor="">Cargo:</Label>
                    <Input 
                    type="text" 
                    name="cargo"
                    onChange={handleChangeValues}
                    />
                
                    <Label htmlFor="">GitHub:</Label>
                    <Input 
                    type="text"
                    name="github" 
                    onChange={handleChangeValues}
                    />
            
                    <Label htmlFor="">Linkedin:</Label>
                    <Input 
                    type="text"
                    name="linkedin"
                    onChange={handleChangeValues} 
                    />
                    
                </Form>
                <Button>
                    <Cancel onClick={CloseModal}>Cancelar</Cancel>
                    <Add onClick={() => handleClickButton()}>Adicionar</Add>
                </Button>
            </Modal>
            
        </Overlay>
    )
}
export default AddDev;