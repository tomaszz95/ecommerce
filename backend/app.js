require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors')
const connectDB = require('./db/connect')

const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const ordersUserRouter = require('./routes/ordersUserRoutes')
const orderRouter = require('./routes/orderRoutes')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(cookieParser(process.env.JWT_SECRET))
app.use(helmet())
app.use(mongoSanitize())
app.use(cors())

app.use(express.json())

app.use(express.static('./public'))

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/reviews', reviewRouter)
app.use('/api/orders/user', ordersUserRouter)
app.use('/api/orders', orderRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL)
		app.listen(port, console.log(`Server is listening on port ${port}...`))
	} catch (err) {
		console.log(err)
	}
}

start()
