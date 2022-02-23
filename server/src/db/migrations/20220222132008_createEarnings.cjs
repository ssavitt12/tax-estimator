/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("earnings", (table) => {
    table.bigIncrements("id")
    table.decimal("uber")
    table.decimal("lyft")
    table.decimal("ubereats")
    table.decimal("doordash")
    table.decimal("grubhub")
    table.decimal("instacart")
    table.decimal("other")
    table.bigInteger("userId").notNullable().index().unsigned().references("users.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("earnings")
}
