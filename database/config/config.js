require('dotenv').config();
const fs = require('fs');

module.exports =
{
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: fs.readFileSync('ca.pem').toString(),
        
      },
    },
  },
  "test": {
    "url": process.env.TEST_DATABASE_URL,
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "dialect": "postgres"
  }
} 

