import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import itemsRouter from './routes/items.js'

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api', itemsRouter)

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})
