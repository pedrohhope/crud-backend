import { Request, Response } from "express";
import UserModel from "../models/user";

export default class UserController {
    constructor(
        private readonly req: Request,
        private readonly res: Response
    ) {}


    create = async () => {
        const response = await UserModel.create(this.req.body)
        if(response){
            return this.res.status(200).json({
                message: 'Usuario Criado', response
            })
        } else{
            return this.res.status(422).json({
                message: 'Não foi possível criar o usuario'
            })
        }
    } 

    users = async () => {
        const response = await UserModel.users()

        if(response){
            return this.res.status(200).json({
                message: 'Usuarios:', response
            })
        } else{
            return this.res.status(422).json({
                message: 'Não existe Usuarios'
            })
        }
    }

    deleteUser = async () => {
        const response = await UserModel.deleteByID(Number(this.req.params.id))

        if(response){
            return this.res.status(200).json({
                message: 'Usuario deletado'
            })
        } else {
            return this.res.status(422).json({
                message: 'Não foi possivel deletar o usuario'
            })
        }
    }

    updateUser = async () => {
        const response = await UserModel.updateByID(Number(this.req.params.id), this.req.body)

        if(response){
            return this.res.status(200).json({
                message: 'Usuario atualizado'
            })
        }
        else{
            return this.res.status(422).json({
                message: 'Não foi possivel atualizar o usuario'
            })
        }

    }
}