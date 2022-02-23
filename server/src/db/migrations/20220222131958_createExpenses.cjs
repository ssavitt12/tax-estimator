/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("expenses", (table) => {    
    table.bigIncrements("id")
    table.decimal("mileage")
    table.decimal("communications")
    table.decimal("amenities")
    table.decimal("supplies")
    table.decimal("tolls")
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("expenses")
}
