//Criação do banco de dados BlogDB
CREATE DATABASE IF NOT EXISTS BlogDB;
USE BlogDB;

//Tabela Autor
CREATE TABLE IF NOT EXISTS Autor (
    AutorID INT AUTO_INCREMENT PRIMARY KEY,
    NomeAutor VARCHAR(100),
    Email VARCHAR(100)
);

//Tabela Post
CREATE TABLE IF NOT EXISTS Post (
    PostID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100),
    Conteudo TEXT,
    DataPublicacao DATE,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);

//Tabela Comentario
CREATE TABLE IF NOT EXISTS Comentario (
    ComentarioID INT AUTO_INCREMENT PRIMARY KEY,
    TextoComentario TEXT,
    DataComentario DATE,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
);

//Chave estrangeira AutorID na tabela Post
ALTER TABLE Post ADD CONSTRAINT FK_AutorID FOREIGN KEY (AutorID) REFERENCES Autor(AutorID);

//Chaves estrangeiras AutorID e PostID na tabela Comentario
ALTER TABLE Comentario ADD CONSTRAINT FK_AutorID_C FOREIGN KEY (AutorID) REFERENCES Autor(AutorID);
ALTER TABLE Comentario ADD CONSTRAINT FK_PostID FOREIGN KEY (PostID) REFERENCES Post(PostID);