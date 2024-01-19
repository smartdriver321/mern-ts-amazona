import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { productRouter } from './routers/productRouter'
import { seedRouter } from './routers/seedRouter'

const app = express()
const PORT = 4000

dotenv.config()
mongoose.set('strictQuery', true)

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/tsmernamazonadb'

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)

app.use('/api/products', productRouter)
app.use('/api/seed', seedRouter)

app.listen(PORT, async () => {
  await mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(() => {
      console.log('MongoDB Error')
    })
  console.log(`Server started at http://localhost: ${PORT}`)
})
