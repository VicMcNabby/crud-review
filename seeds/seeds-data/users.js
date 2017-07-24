const bcrypt = require('bcrypt')

module.exports = [{
    name: 'Matthew',
    email: 'Matthew@gmail.com',
    password: bcrypt.hashSync('password', 8)
  },
  {
    name: 'Kendra',
    email: 'Kendra@gmail.com',
    password: bcrypt.hashSync('ilovemovies', 8)
  }
];
