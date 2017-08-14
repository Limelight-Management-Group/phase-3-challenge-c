-- guests, rooms, bookings
\copy guests(Guest_Name, Email) FROM './guests.csv' DELIMITER ',' CSV HEADER;
INSERT INTO guests (Guest_Name, Email)
    VALUES ('John Doe', 'John@doe.com');
INSERT INTO guests (Guest_Name, Email)
    VALUES ('Jon Dough', 'john@dough.com');
INSERT INTO guests (Guest_Name, Email)
    VALUES ('Jane Doe', 'jane@jane.com');
INSERT INTO guests (Guest_Name, Email)
    VALUES ('Jain Dough', 'Jain@dough.com');
INSERT INTO guests (Guest_Name, Email)
    VALUES ('person family', 'random@email.com');

INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (101, 1, true);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (102,1, true);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (201, 1, true);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (202,1, true);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (301, 1, false);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (302, 1, false);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (303, 1, false);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (401, 1, true);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (402, 1, true);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (501, 1, true);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (502, 1, true);
INSERT INTO rooms (RoomNumber, Capacity, Available)
    VALUES (503, 1, false);


--     id,room_id,guest_id,check_in,check_out
-- 1,6,10,2018-06-03,2018-06-12

INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (1, '1a', 1, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (2, '1b', 2, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (3, '2a', 3, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (4, '2b', 4, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (5, '3a', 5, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (6, '3b', 1, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (7, '3c', 2, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (8, '4a', 3, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (9, '4b', 4, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (10, '5a', 5, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (16, '5b', 1, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (17, '5c', 2, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (11, '5d', 3, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (12, '6a', 4, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (13, '6b', 5, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (14, '6c', 1, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (15, '6d', 2, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (18, '6e', 3, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (19, '7a', 4, '2018-06-03', '2018-06-12');
INSERT INTO bookings (id, room_id, guest_id, check_in, check_out)
    VALUES (20, '7b', 5, '2018-06-03', '2018-06-12');


