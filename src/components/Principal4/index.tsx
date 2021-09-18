import * as S from "./styles"
import foto_ford from "assets/img/fotoFord.svg"
import foto_Volks from "assets/img/fotoVolks.svg"
import { Link } from "react-router-dom"

const Principal4 = () => {
    return (
        <S.Main>
            <h2>Valores Lançamentos</h2>
                <div>
                    <picture>
                        <section>
                            <img src={foto_Volks} alt="Foto Volkwagen"/>
                            <h3>R$ XXXXX,XX</h3>
                            <h3>R$ XXXXX,XX</h3>
                            <h3>R$ XXXXX,XX</h3>
                        </section>
                    </picture>
                    <section className="vs">
                        <h3>VS</h3>
                        <h3>VS</h3>
                        <h3>VS</h3>
                    </section>   
                    <picture>
                        <section>
                        <img className="ford" src={foto_ford} alt="Foto Ford"/>
                            <h3>R$ XXXXX,XX</h3>
                            <h3>R$ XXXXX,XX</h3>
                            <h3>R$ XXXXX,XX</h3>
                        </section>
                    </picture>
                </div>
                <Link to="/pag4" className="button"><button>Ler mais</button></Link>
        </S.Main>
    )
}

export default Principal4