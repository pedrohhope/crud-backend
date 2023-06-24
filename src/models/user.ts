import dbConnection from "./connection";
import md5 from 'md5'

interface CreateUserData {
    username: string;
    password: string;
}

export default class UserModel {
    static async create(data: CreateUserData) {

        const userQuery = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *'
        const values = [data.username, md5(data.password)]

        const res = await dbConnection.query(userQuery, values)

        return res.rows[0]

    }
    static async users() {
        const usersSelect = 'SELECT * FROM users'

        const res = await dbConnection.query(usersSelect)

        return res.rows
    }
    static async deleteByID(id: number) {
        const userDelete = 'DELETE FROM users WHERE id = $1'

        const res = await dbConnection.query(userDelete, [id])

        return res.rows
    }
    static async updateByID(id: number, data: CreateUserData) {
        const userUptade = 'UPDATE users SET username =  $1,password = $2 WHERE id = $3'

        const res = await dbConnection.query(userUptade, [data.username, md5(data.password), id])

        return res.rowCount > 0
    }
}