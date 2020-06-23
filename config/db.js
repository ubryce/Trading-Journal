const mongoose = require('mongoose')

// async cus when working with mongoose we use promises
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(err)
        process.exit(1)
    }
}

module.exports =  connectDB