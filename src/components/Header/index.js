import { ContainerHeader } from "./style";
import logo from '../../assets/images/logo.svg'
export default function Header() {
    return (
        <ContainerHeader>
            <img src={logo} width="201"></img>
        </ContainerHeader>
    );
}