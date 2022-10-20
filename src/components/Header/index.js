import { ContainerHeader, InputSearchContainer } from "./style";
import logo from '../../assets/images/logo.svg'
export default function Header() {
    return (
        <ContainerHeader>
            <img src={logo} width="201"></img>

            <InputSearchContainer>
                <input type="text" placeholder="Pesquise seu nome"></input>
            </InputSearchContainer>
        </ContainerHeader>
    );
}