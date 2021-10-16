import * as S from "./styles" 
import { Link } from "react-router-dom"
import logo from "assets/img/Group 1.svg"

const Login = () => {
    return ( 
        <S.Main>
            <section>
                <picture>
                    <img id="menu" src={logo} alt="menu"/>
                </picture>
                <h1>
                    <Link className="centralize" to="/">Falar DE CARRO</Link>
                </h1>
            </section>
            <fieldset className="abaixaLogin">
                <legend className="dados">Área de Login</legend>
                <label>E-mail:</label>
                <input type="email" name="email" required/>
                <label>Senha:</label>
                <input type="password" name="senha" required/>
                <Link to="/Home" className="button"><button>Enviar</button></Link>
                <button type="reset">Limpar</button>
            </fieldset>
            <Link id="abaixaBotao" to="/Home"><button>Voltar para página inicial</button></Link>
        </S.Main>
    )
}

export default Login 