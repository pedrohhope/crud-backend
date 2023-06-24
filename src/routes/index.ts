import express from 'express'
import UserController from '../controllers/UserController'


const routes = express.Router()

routes.get('/users', async (req, res) => {
    try {
        const controller = new UserController(req, res)
        return await controller.users()
        
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
})

routes.post('/user/create', async (req, res) => {
    try {
        const controller = new UserController(req, res)
        return await controller.create()

    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
})

routes.delete('/user/:id', async (req, res) => {
    try {
        const controller = new UserController(req, res)
        return await controller.deleteUser()

    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
})

routes.put('/user/:id', async (req, res) => {
    try {
        const controller = new UserController(req, res)
        return await controller.updateUser()

    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
})



export default routes