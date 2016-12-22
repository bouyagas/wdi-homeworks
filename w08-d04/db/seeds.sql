BEGIN;

INSERT INTO movies (title, poster, rated, runtime) VALUES
('Forgetting Sarah Marshall', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzODgzMjAyM15BMl5BanBnXkFtZTcwMTI3NzI2MQ@@._V1_SX300.jpg', 'R', '111 min'),
('Zoolander', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_SX300.jpg', 'PG-13', '90 min'),
('Elf', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjY1NjQ3NDY5MF5BMl5BanBnXkFtZTYwODAyMTc3._V1_SX300.jpg', 'PG', '97 min');

COMMIT;
