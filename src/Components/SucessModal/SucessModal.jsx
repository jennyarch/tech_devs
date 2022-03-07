import Sucesso from "../../assets/img/sucesso.png";
import {
    Overlay,
    Modal,
    Title,
    Image,
} from "./style";


function Sucess (){
    return (
        <Overlay>
            <Modal>
                <Title>Cadastrado com Sucesso!</Title>
                <Image src={Sucesso}></Image>
            </Modal>
        </Overlay>
    )
}
export default Sucess;