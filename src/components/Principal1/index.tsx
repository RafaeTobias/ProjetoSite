import * as S from "./styles"
import { Link } from "react-router-dom"
import foto1 from "assets/img/foto1.svg"
import { useEffect, useState } from "react";
import { IProjectData } from "interface/project.interface";
import { apiProjeto } from "service/data";


const Principal1 = () => {
    const [projects, setProjects] = useState<IProjectData[]>();

    useEffect(() => {
        async function fetchData() {
            const response = await apiProjeto.index();
            setProjects(response.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <S.Main>
                {projects && projects.map((item) => (
                    <section>
                        <h2>{item.inserir_texto}</h2>
                    </section>
                ))}
                <picture>
                    <img src={foto1} alt="Foto crítica sobre o valor dos carros." />
                </picture>
                <section>
                    <h2>Desenvolvimento do assunto</h2>
                </section>
                <Link to="/pag1" className="button"><button>Ler mais</button></Link>
            </S.Main>
        </>
    )
}
export default Principal1