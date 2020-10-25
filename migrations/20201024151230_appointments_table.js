
exports.up = function(knex) {
    return knex.schema.createTable('appointments', function(tbl){   
        tbl.increments('id').primary();   
        tbl.integer('physician_id').unsigned().notNullable().references('id').inTable('physicians') 
        tbl.string("name",  255).notNullable()    
        tbl.string("time", 255);
        tbl.string("kind", 255);    
   })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('appointments');
};
