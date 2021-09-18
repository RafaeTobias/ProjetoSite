import { Switch, Route } from "react-router-dom"
import {Home, Pag1, Pag2, Pag3, Pag4, CadastroAnual, CadastroMensal} from "pages"

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/CadastroMensal" exact component={CadastroMensal} />
            <Route path="/CadastroAnual" exact component={CadastroAnual} />
            <Route path="/pag1" exact component={Pag1} />
            <Route path="/pag2" exact component={Pag2} />
            <Route path="/pag3" exact component={Pag3} />
            <Route path="/pag4" exact component={Pag4} />
        </Switch>
    );
};

export default Routes;