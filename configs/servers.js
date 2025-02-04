import express from 'express'
import { dbConnection } from './mongo.js'





const conectarDB = async () => {
    try {
        await dbConnection()
    } catch (err) {
        console.log(`Database conection failed: ${err}`)
    }
}

export const initServer = () => {
    const app = express()
    try {
        conectarDB()
        app.listen(process.env.PORT)
        console.log(`Server running on part: ${process.env.PORT}`)
    } catch (err) {
        console.log(`Server init failed: ${err}`)
    }
}