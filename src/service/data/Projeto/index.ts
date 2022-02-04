import { IProjectData } from "interface/project.interface";
import api from "../api";

class ProjetoData {
    index() {
        return api.get<IProjectData[]>("/pags")
    }
}

export default new ProjetoData()
