import Knex from 'knex';

export async function up(knex: Knex){
 return knex.schema.createTable('connections', table => {
   table.increments('id').primary();

  //  criando relacionamento:
   table.integer('user_id') //chave estrangeira
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    // hora que o professor foi solicitado
    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
 });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}