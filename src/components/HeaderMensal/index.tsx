import { Link } from "react-router-dom"
import * as S from "./styles" 

const HeaderMensal = () => {
    return (
        <S.Header>
            <Link to="/">
                <h2>Assinatura Mensal</h2>
            </Link>
            <p>R$ 23,90</p>
        </S.Header>
    )
}

export default HeaderMensal