
exports.seed = function(knex) {
  return knex('users').insert([
    {name: 'jojo',age:29, city: "charlsetown"},
    {name: 'rex',age:39, city: "belpre"},
    {name: 'fodai',age:19, city: "clampt"},
    {name: 'beanz',age:42, city: "downbottom"},
    {name: 'code',age:27, city: "me"},
    
  ]);
};


