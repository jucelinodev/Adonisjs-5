import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected $tableName = 'products'

  public async up() {
    this.schema.createTable(this.$tableName, table => {
      table.increments('id').primary()
      table.string('name', 20).notNullable()
      table.string('description', 240).notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.$tableName)
  }
}
