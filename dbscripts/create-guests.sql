CREATE TABLE IF NOT EXISTS invitados (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO invitados (nombre) VALUES
  ('Jorge'),
  ('Pepe'),
  ('Alberto'),
  ('Rodolfo'),
  ('Diego');
