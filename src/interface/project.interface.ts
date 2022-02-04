import { ReactNode } from "react";

export interface IProject {
    children: ReactNode
}

export interface IProjectData {
  id:number
  user_id:number
  num_pag:number
  inserir_texto:string
  inserir_imagem:string
}

