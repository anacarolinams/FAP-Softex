//Inserção de dados
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Marcos Aurélio', 'Brasileiro');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('José Vinícius', 'Espanhol');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Matt Vine', 'Francês');

INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('A Vida', 2015, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Caminos Perdidos', 2013, 2);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('A Terra', 2017, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Ce La Vie', 2021, 3);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('El Tiempo', 2015, 2);

//Consultas:

//Simples:
SELECT * FROM Autores;
SELECT * FROM Livros;

//INNER JOIN:
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID;

//LEFT JOIN:
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

//Filtro por nacionalidade:
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Espanhol';

//Consulta agregada:
SELECT Autores.Nome AS Autor, COUNT(Livros.LivroID) AS QuantidadeLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;