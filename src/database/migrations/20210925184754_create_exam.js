
exports.up = function (knex) {
  return knex.schema.createTable('exam', table => {
    table.increments('id').primary()
    table.string('medic_name').notNullable()
    table.string('exam_request').notNullable()
    table.string('hospital_medic_requesting').notNullable()
    table.string('date')
    table.text('note')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('exam')
};
