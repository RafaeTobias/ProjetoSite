import * as S from "./styles"
import fotosSeminovos from "assets/img/fotoSeminovos.svg"

const Principal5 = () => {
    return (
        <S.Main>
            <section>
                <h2>Concluindo o assunto e perguntando se carros 0Km valem a pena </h2>
            </section>
            <img src={fotosSeminovos} alt="Foto de indagação entre carros novos e seminovos" />
            <section>
                <h2>Perguntando o que acharam da matéria e assine para ver matéria e assine para nos ajudar</h2>
            </section>
        </S.Main>
    )
}
export default Principal5