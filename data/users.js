import bcrypt from 'bcryptjs';


const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },

  {
    name: 'Vishal Kumar',
    email: 'vishal@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  
  {
    name: 'Ishika',
    email: 'ishika@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users