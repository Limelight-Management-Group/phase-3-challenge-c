
CREATE TABLE IF NOT EXISTS guests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(140) NOT NULL,
  email VARCHAR(140) NOT NULL
);

CREATE TABLE IF NOT EXISTS rooms(
  id SERIAL PRIMARY KEY,
  room_number VARCHAR(140) NOT NULL,
  capacity VARCHAR(140) NOT NULL,
  available boolean DEFAULT true 
);  


CREATE TABLE IF NOT EXISTS bookings(
  id SERIAL PRIMARY KEY,
  room_id INTEGER NOT NULL,
  guest_id INTEGER NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL
  -- ,
  -- FOREIGN KEY (room_id) REFERENCES rooms(id),
  -- FOREIGN KEY (guest_id) REFERENCES guests(id)
)

