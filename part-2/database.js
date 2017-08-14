const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hotel_db';
const db = pgp(connectionString);

const query = {
  getAll(){
    return db.any('SELECT Guest_Name from guests')
  },
  getAllRooms(){
    return db.any('SELECT roomnumber from rooms')
  }
  


}
module.exports = query;