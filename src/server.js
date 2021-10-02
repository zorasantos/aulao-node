const express = require('express')
const app = express()

const db = require('./database/connection')

const port = '3000'

app.use(express.json())

/**
 * POST
 * GET
 * PUT
 * DELETE
 */

app.post('/create', async (req, res) => {
  const { medic_name, exam_request, hospital_medic_requesting, date, note } = req.body // Capturando os dodos vindos da requisição
  await db('exam').insert({
    medic_name, exam_request, hospital_medic_requesting, date, note
  })  // Inserindo no banco de dados na tabela exam os dodos capturados na requisição
  return res.status(200).send({ msg: 'Exame cadastrado com sucesso' }) // Retorna uma mensagem de sucesso
})

//async/await é um método para resolver uma promisse

app.get('/list_exams', async (req, res) => {
  const exams = await db('exam').select('*')
  return res.json(exams)
})

app.put('/update/:id', async (req, res) => {
  const data = req.body
  const { id } = req.params

  await db('exam').where({ id }).update(data)

  return res.status(200).send({ msg: 'Exame atualizado com sucesso!' })

})

app.delete('/remove/:id', async (req, res) => {
  const { id } = req.params

  await db('exam').where({ id }).first().delete()

  return res.status(200).send({ msg: `Exame de id: ${id}, excluído com sucesso!` })

})

app.listen(port, () => {
  console.log(`Project running in port ${port}`)
})