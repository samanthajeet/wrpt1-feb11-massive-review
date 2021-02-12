CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    first_name  VARCHAR(50),
    last_name VARCHAR(100)
);


INSERT INTO student (first_name, last_name)
VALUES ('Ryan', 'Harter');