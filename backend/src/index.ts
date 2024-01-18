import express, { Request, Response } from 'express'
import cors from 'cors'
import { sampleProducts } from './data'

const app = express()
const PORT = 4000

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)

app.get(`/api/products`, (req: Request, res: Response) => {
  res.json(sampleProducts)
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost: ${PORT}`)
})
