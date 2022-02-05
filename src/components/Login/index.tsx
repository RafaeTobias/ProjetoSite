import * as S from "./styles"
import { Link } from "react-router-dom"
import logo from "assets/img/Group 1.svg"
import { useAuth } from "hooks/auth";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";

const Login = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { register, handleSubmit } = useForm();

    const { signIn } = useAuth();
    const history = useHistory();

    const handleLogin = useCallback(
        async (data) => {
            try {
                setIsLoading(true);
                await signIn(data);
                history.push("/");
            } catch (error) {
                const err = error as AxiosError;
                const msg = err.response?.data.errors.map((i: any) => i.message)
            }
        },
        [signIn, history]
    );

    return (
        <>
            <S.Main>
                <section>
                    <picture>
                        <img id="menu" src={logo} alt="menu" />
                    </picture>
                    <h1>
                        <Link className="centralize" to="/">Falar DE CARRO</Link>
                    </h1>
                </section>
                <form method="POST" onSubmit={handleSubmit(handleLogin)} className="abaixaLogin">
                    <legend className="dados">Área de Login</legend>
                    <label>E-mail:</label>
                    <input type="email" placeholder="e-mail" required {...register("email")} />

                    <label>Senha:</label>
                    <input type="password" name="senha" required />
                    <Link to="/Home" className="button"><button>Enviar</button></Link>
                    <button type="reset">Limpar</button>
                </form>
                <Link id="abaixaBotao" to="/Home"><button>Voltar para página inicial</button></Link>
            </S.Main>
        </>
    );
};
export default Login 