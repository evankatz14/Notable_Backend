
exports.up = function(knex) {
    return knex.schema.createTable('physicians', function(tbl){   
        tbl.increments('id').primary();    
        tbl.string("name",  255).notNullable()    
   })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('physicians');
};
