import * as S from "./styles"
import logo from "assets/img/Group 1.svg"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <S.Header>
            <section>
                <picture>
                    <img id="menu" src={logo} alt="menu"/>
                </picture>
                <h1>
                    <Link className="centralize" to="/">Falar DE CARRO</Link>
                </h1>
            </section>
            <nav>
                <ul>
                    <li>
                        <Link  to="/CadastroMensal" className="left">Assinatura Mensal</Link>
                    </li>
                    <li >
                        <Link to="/CadastroAnual" className="right">Assinatura Anual</Link>
                    </li>
                </ul>
            </nav>
        </S.Header>
    )
}

export default Header