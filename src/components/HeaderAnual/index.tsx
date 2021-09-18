import { Link } from "react-router-dom"
import * as S from "./styles" 

const HeaderAnual = () => {
    return (
        <S.Header>
            <h2> 
                <Link to="/">Assinatura Anual</Link>
            </h2>
            <p>R$ 23,90</p>
        </S.Header>
    )
}

export default HeaderAnual