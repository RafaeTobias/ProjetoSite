import * as S from "./styles" 
import { Link } from "react-router-dom"
import foto2 from "assets/img/foto2.svg"

const Principal2 = () => {
    return (
        <S.Main>
            <section>
                <h2>Explicando assunto a fundo</h2>
            </section>
            <picture>
                <img src={foto2} alt="Foto crítica sobre o valor dos carros."/>
            </picture>
            <section>
                <h2>Finalizando assunto para iniciar comparações.</h2>
            </section>
            <Link to="/pag2" className="button"><button>Ler mais</button></Link>
        </S.Main>
    )
}

export default Principal2