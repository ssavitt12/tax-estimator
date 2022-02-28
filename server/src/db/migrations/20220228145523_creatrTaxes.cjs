/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("taxes", (table) => {    
    table.bigIncrements("id")
    table.decimal("mileage").notNullable()
    table.decimal("communications").notNullable()
    table.decimal("amenities").notNullable()
    table.decimal("supplies").notNullable()
    table.decimal("tolls").notNullable()
    table.decimal("uber").notNullable()
    table.decimal("lyft").notNullable()
    table.decimal("ubereats").notNullable()
    table.decimal("doordash").notNullable()
    table.decimal("grubhub").notNullable()
    table.decimal("instacart").notNullable()
    table.decimal("other").notNullable()
    table.string("userFilingStatus").notNullable()
    table.string("userHomeState").notNullable()
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("taxes")
}
