const express = require('express')
const app = express()

const db = require('./database/connection')

const port = '3000'

app.use(express.json())

app.post('/create', async (req, res) => {
  const { medic_name, exam_request, hospital_medic_requesting, date, note } = req.body
  await db('exam').insert({
    medic_name, exam_request, hospital_medic_requesting, date, note
  })
  return res.status(200).send({ msg: 'Exame cadastrado com sucesso' })
})

app.listen(port, () => {
  console.log(`Project running in port ${port}`)
})