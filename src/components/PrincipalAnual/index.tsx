import * as S from "./styles"

const PrincipalMensal = () => {
    return (
        <S.Main>
            <form method="POST" action="">
                <fieldset>
                    <legend className="dados">Dados pessoais</legend>
                    <label>Nome Completo: </label>
                    <input type="text" name="name" required/>
                    <label>CPF: </label>
                    <input type="text" name="CPF" required/>
                    <label>CEP: </label>
                    <input type="number" name="CEP" required/>
                    <label>Endereço: </label>
                    <input type="text" name="endereco" required/>
                    <label>Complemento: </label>
                    <input type="number" name="complemento" required/>
                    <label>Cidade: </label>
                    <input type="text" name="cidade" required/>
                    <label>Celular: </label>
                    <input type="number" name="telefone" required/>
                    <button type="submit">Enviar</button>
                    <button type="reset">Limpar</button>
                </fieldset>
            </form>
            <br/>
            <br/>
            <form method="POST" action="">
                <fieldset>
                    <legend className="dados">Criar login</legend>
                    <label>E-mail</label>
                    <input type="email" name="email" required/>
                    <label>Confirme o Email</label>
                    <input type="email" name="confirmaEmail" required/>
                    <label>Senha</label>
                    <input type="password" name="senha" required/>
                    <label>Confirme a senha</label>
                    <input type="password" name="confirmaSenha" required/>
                    <button type="submit">Enviar</button>
                    <button type="reset">Limpar</button>
                </fieldset>
            </form>
        </S.Main>
    )
}

export default PrincipalMensal
