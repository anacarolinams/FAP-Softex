# Exercício 1 - Banco de Dados

Você foi contratado para projetar um sistema de gerenciamento de uma biblioteca. Ela precisa de um sistema para rastrear os seus livros, autores, usuários, empréstimos e as suas devoluções. 

Com base nisso, crie um Modelo Entidade-Relacionamento (MER) usando o BrModelo e identifique as entidades, os seus atributos e os seus relacionamentos. Alguns exemplos de entidades podem ser: Livro, Autor, Usuário, Empréstimo, Devolução etc. Crie os relacionamentos apropriados, como "Usuário faz Empréstimo" ou "Livro é escrito por Autor". Converta o MER em um Modelo Lógico, especificando os tipos de dados dos atributos e criando chaves primárias e estrangeiras. 

Após isso, utilizando o MySQL Workbench, crie um Modelo Relacional com base no Modelo Lógico que você gerou no passo anterior. Elabore tabelas no banco de dados para representar as entidades e os relacionamentos, definindo os campos e suas restrições. 
Ao terminar, envie o MER criado no BrModelo e o Modelo Relacional criado no MySQL Workbench.

# Answer

CREATE DATABASE exercicio_db;
USE exercicio_db;
CREATE TABLE IF NOT EXISTS db_livro (
id_livro INT AUTO_INCREMENT PRIMARY KEY,
autor_livro VARCHAR(50) NOT NULL, 
nome_livro VARCHAR(100) NOT NULL,
publi_livro DATE NOT NULL
);

SHOW TABLES;

CREATE TABLE IF NOT EXISTS db_autor (
id_autor INT AUTO_INCREMENT PRIMARY KEY,
nome_autor VARCHAR(50) NOT NULL, 
pais_autor VARCHAR(100) NOT NULL,
nascim_autor DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS db_usuario (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
nome_usuario VARCHAR(50) NOT NULL, 
cpf_usuario INT NOT NULL,
tel_usuario INT NOT NULL
);

CREATE TABLE IF NOT EXISTS db_emprestimo (
id_emprestimo INT AUTO_INCREMENT PRIMARY KEY,
quant_livro INT NOT NULL, 
id_livro INT NOT NULL,
data_emprestimo DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS db_devolucao (
id_devolucao INT AUTO_INCREMENT PRIMARY KEY,
data_devolucao DATE NOT NULL, 
id_livro INT NOT NULL,
id_usuario INT NOT NULL
);



## Imagens

![App Screenshot](https://lh3.googleusercontent.com/pw/ABLVV87DeMsNrPoP8QAozcojmh1McET5f44N0QK0EJjQI4sv6wm0Mt-m7Besi21BTHpLe6LYgoxtdO2m-KbknzvSo8a8i7nV-hhYJMquCwY_6ZQQk9IFtAgQMGhLkFqCP8iWR8t-1RmFbbE28LlQ_pMU0Pha=w1356-h958-s-no-gm?authuser=0)
![App Screenshot](https://lh3.googleusercontent.com/pw/ABLVV85F_5M4PHBwndiziB69SVXj1EwFmN5yv3UQmwD5RRNW-du-7zSSexbG4Luln8cenOzwYGcZVhe5syp5FyrfrUfq5j-ZMpqzZue1acSVrG_Wy5TB67Nm5f8Yp02-XbBTRI5_PsRSfdg4m9lYQcpKVcx2=w1356-h958-s-no-gm?authuser=0)
![App Screenshot](https://lh3.googleusercontent.com/pw/ABLVV84l-IA5uEnyu5L4FUIHrwSfL0OntVnQ_Yd06zLDOL6KutMEWA8CDAr7iZGKFGI_JqIxxDBQ3cqBS09nQTLdAHtP7gR1sMmaMI32kS5jgPxE7aXBTiUmWB7B5WmIhpOMCNVHMhB3lJ3wCsEGkT3dmI66=w852-h456-s-no-gm?authuser=0)