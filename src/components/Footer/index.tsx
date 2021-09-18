import * as S from "./styles"
import logo from "assets/img/Group 1.svg"
import { Link } from "react-router-dom"
import fotoWpp from "assets/img/fotoWpp.svg"
import fotoIG from "assets/img/fotoIG.svg"
import fotoToyota from "assets/img/fotoToyota.svg"
import fotoFiat from "assets/img/fotoFiat.svg"
import fotoRenault from "assets/img/fotoRenault.svg"
import fotoVolks1 from "assets/img/fotoVolks1.svg"

const Footer = () => {
    return (
        <S.Footer>
            <section>
                <picture>
                    <a href="https://www.whatsapp.com/" target="_blank">
                        <img src={fotoWpp} alt="Foto whatsapp" />
                    </a>
                </picture>
                <picture className="instagram">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={fotoIG} alt="Foto instagram" />
                    </a>
                </picture>
            </section>
            <div>
                <h3>
                    <b>Colaboradores: </b>
                </h3>
                <picture>
                    <img src={fotoToyota} alt="Foto Toyota" />
                    <img src={fotoFiat} alt="Foto Fiat" />
                    <img src={fotoRenault} alt="Foto Renault" />
                    <img src={fotoVolks1} alt="Foto Volkwagen" />
                </picture>
            </div>
        </S.Footer>
    )
}

export default Footer