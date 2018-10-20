DROP DATABASE IF EXISTS biblioteca_test;

CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE IF NOT EXISTS libros (
  id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  isbn VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO libros (titulo, isbn) VALUES
  ('Martín Fierro', '843760186X'),
  ('El matadero; La cautiva', '9788437606170'),
  ('Ismaelillo; Versos libres; Versos sencillos', '8437603676'),
  ('Comentarios reales', '8437614163'),
  ('¡Qué quilombo! Diccionario de argot argentino-español', '9788484438403');
