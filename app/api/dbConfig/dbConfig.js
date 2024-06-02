import React from 'react'
import mongoose from 'mongoose'
export const dbConfig =async () => {
    try {
        const {connection} = await mongoose.connect('mongodb://localhost:27017/express-react')
        console.log(connection.host)
    } catch (error) {
        console.log(error.message)
        
    }
}

export default dbConfig
