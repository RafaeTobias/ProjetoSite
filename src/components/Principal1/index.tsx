import * as S from "./styles" 
import { Link } from "react-router-dom"
import foto1 from "assets/img/foto1.svg"

const Principal1 = () => {
    return (
        <S.Main>
            <section>
                <h2>Introdução sobre o assunto abordado</h2>
            </section>
            <picture>
                <img src={foto1} alt="Foto crítica sobre o valor dos carros."/>
            </picture>
            <section>
                <h2>Desenvolvimento do assunto</h2>
            </section>
            <Link to="/pag1" className="button"><button>Ler mais</button></Link>
        </S.Main>
    )
}

export default Principal1