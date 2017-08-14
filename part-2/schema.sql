DROP DATABASE IF EXISTS hotel_db;
CREATE DATABASE hotel_db;

\c hotel_db

CREATE TABLE IF NOT EXISTS guests(
  id SERIAL PRIMARY KEY,
  Guest_Name  VARCHAR(140),
  Email VARCHAR(140)
);

CREATE TABLE IF NOT EXISTS rooms(
  id SERIAL PRIMARY KEY,
  RoomNumber VARCHAR(140),
  Capacity VARCHAR(140),
  Available boolean DEFAULT true
);  


CREATE TABLE IF NOT EXISTS bookings(
  id SERIAL PRIMARY KEY,
  room_id VARCHAR,
  guest_id INTEGER,
  check_in DATE,
  check_out DATE
)

