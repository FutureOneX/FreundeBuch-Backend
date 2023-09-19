import express from 'express'
import cors from 'cors'

const PORT = 9999

const app = express()

app.use(cors())
app.use(express.json())

const friends = []

app.post('/api/friends', (req,res) => {
  const Friend = req.body
  friends.push(Friend);
  res.end()
})

app.get('/api/friends', (_, res) => {
  res.json(friends)
})

app.listen(PORT, () => console.log("meddl leude", PORT))