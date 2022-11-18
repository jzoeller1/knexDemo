/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Figaro', pet_type_id: 2, food_type_id: 1},
    {id: 2, name: 'Ollie', pet_type_id: 3, food_type_id: 1},
    {id: 3, name: 'Rosie', pet_type_id: 3, food_type_id: 1},
    {id: 4, name: 'Cleo', pet_type_id: 4, food_type_id: 2},
  ]);
};
