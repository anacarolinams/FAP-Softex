//Seleção de dados:
SELECT * FROM Transacoes;

// Renomeando as colunas:
SELECT IDTransacao AS ID_Transacao, Data, Valor FROM Transacoes;

// Filtragem com a cláusula (WHERE):
SELECT * FROM Transacoes WHERE Valor > 100.00;

//Ordenação com a cláusula (ORDER BY):
SELECT * FROM Transacoes ORDER BY Valor DESC;

//Funcões:
//Média de valor:
SELECT AVG(Valor) AS Media_Valor FROM Transacoes;

//Valor máximo:
SELECT MAX(Valor) AS Valor_Maximo FROM Transacoes;

//Valor mínimo:
SELECT MIN(Valor) AS Valor_Minimo FROM Transacoes;

//Total de transações:
SELECT COUNT(*) AS Total_Transacoes FROM Transacoes;

//Agrupamento com a cláusula (GROUP BY):
SELECT Produto, AVG(Valor) AS Media_Valor_por_Produto FROM Transacoes GROUP BY Produto;

//Consulta combinada:
SELECT CategoriaProduto, COUNT(*) AS Quantidade_Produtos, SUM(Quantidade) AS Quantidade_Total, SUM(Valor) AS Valor_Total, AVG(Valor) AS Media_Valor_por_Transacao
FROM Produtos
JOIN Transacoes ON Produtos.ProdutoID = Transacoes.ProdutoID
GROUP BY CategoriaProduto;
