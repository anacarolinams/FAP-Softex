//Inserção de produtos (INSERT)
INSERT INTO Produtos (NomeProduto, Preco, QuantidadeEstoque)
VALUES 
    ('Smartphone', 799.99, 20),
    ('Tablet', 349.99, 10),
    ('Fone de Ouvido', 49.99, 50);

//Atualização de estoque e de preço (UPDATE)
UPDATE Produtos
SET QuantidadeEstoque = 25, Preco = 849.99
WHERE NomeProduto = 'Smartphone';

//Venda dos produtos (UPDATE - *DELETE não se aplica a finalidade do exercício*)

//Atualiza o estoque do Tablet após a venda de 5 unidades
UPDATE Produtos
SET QuantidadeEstoque = QuantidadeEstoque - 5
WHERE NomeProduto = 'Tablet';

//Atualiza o estoque do Fone de Ouvido após a venda de 10 unidades
UPDATE Produtos
SET QuantidadeEstoque = QuantidadeEstoque - 10
WHERE NomeProduto = 'Fone de Ouvido';