
exports.up = function(knex) {
    return knex.schema
    .createTable('users', (tbl_col)=>{
        tbl_col.increments();

        tbl_col.varchar("name", 128)
        .notNullable()

        tbl_col.integer("age")

        tbl_col.varchar("city", 128)

    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
  
};
