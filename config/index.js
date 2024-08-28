require('dotenv').config();

module.exports = {
    MyPort: process.env.PORT,
    MyDatabase: process.env.DATABASE_URL
}