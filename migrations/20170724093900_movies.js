exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('movies', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('tagline');
      table.string('rating');
      table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('movies')
}
