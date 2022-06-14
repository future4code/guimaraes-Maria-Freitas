<!-- ## Exercício 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
## Exercício A)
## FLOAT: Valores não inteiros
## NOT NULL: indica que o valor dessa coluna não pode ser nulo
## PRIMARY KEY: Chave única da tabela
## VARCHAR: string com o máximo de caracteres, (255)

##Exercício B)
SHOW DATABASES 
## Me retornou duas linhas com meu usuário e informação.

##Exercício B)
SHOW TABLES
## Me retornou uma linha com Actor - nome da tabela criada.

##Exercício C)
DESCRIBE Actor
## Retornou a tabela criada com: id,name, salário...

##Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

##Exercício A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
12000000,
"1963-08-23",
"male"
);
##Exercício B)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Xuxuzinha",
 30000,
"1962-09-17",
"male"
);
## Precisei colocar a "gender", pois na criação da tabela temos VARCHAR(6) NOT NULL - essa coluna não pode ficar em branco
##Você tem um erro em sua sintaxe SQL; verifique o manual 
##que corresponde à versão do seu servidor MySQL para a sintaxe correta para usar 
##perto de 'id, name, salarial, birth_date, gender)

#Exercício C)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
## Acrescentei a data de nascimento e o genero sexual - NOT NULL

#Exercício D)
INSERT INTO Actor (id,name,salary, birth_date, gender)
VALUES(
 "004",
  "Marcos",
  400000,
  "1949-04-18", 
  "male"
);
## Acrescentei no nome, pois na criação da tabela, temos que colocar o nome - NOT NULL

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  71933333,
  1979-03-26, 
  "female"
); -->