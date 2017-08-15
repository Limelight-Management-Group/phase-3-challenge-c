const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hotel_db';
const db = pgp(connectionString);

const query = {
  getAll(){
    return db.any('SELECT name from guests')
  },
  getAllRooms(){
    return db.any('SELECT room_number from rooms')
  },
getAllBookedRooms(guest_id){
    return db.any(`
      SELECT bookings.check_in, bookings.check_out, bookings.room_id, bookings.guest_id, guests.name, rooms.capacity
      FROM guests
      JOIN bookings
      ON guests.id = bookings.guest_id
      Join rooms 
      ON rooms.id = bookings.room_id
      WHERE guest_id = $1
    `,[guest_id])
  }
/*

As a hotel manager I can see 
which rooms have been booked 
by which guests, 
along with their check-in 
and check out dates

*/

}
module.exports = query;