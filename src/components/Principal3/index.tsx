import * as S from "./styles"
import foto_ford from "assets/img/fotoFord.svg"
import foto_Volks from "assets/img/fotoVolks.svg"
import { Link } from "react-router-dom"

const Principal3 = () => {
    return (
        <S.Main>
            <h2>Comparações</h2>
                <div>
                    <picture>
                        <section>
                            <img src={foto_Volks} alt="Foto Volkwagen"/>
                            <h3>Foto de carro 1</h3>
                            <h3>Foto de carro 2</h3>
                            <h3>Foto de carro 3</h3>
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
                            <h3>Foto de carro 1</h3>
                            <h3>Foto de carro 2</h3>
                            <h3>Foto de carro 3</h3>
                        </section>
                    </picture>
                </div>
                <Link to="/pag3" className="button"><button>Ler mais</button></Link>
        </S.Main>
    )
}

export default Principal3
