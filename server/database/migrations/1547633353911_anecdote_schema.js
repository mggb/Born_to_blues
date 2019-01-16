"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AnecdoteSchema extends Schema {
  up() {
    this.create("anecdotes", table => {
      table.increments();
      table.string("name");
      table.text("description");
    });
  }

  down() {
    this.drop("anecdotes");
  }
}

module.exports = AnecdoteSchema;
