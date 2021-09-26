const env = process.env.NODE_ENV || 'development'
const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration[env])

module.exports = connection