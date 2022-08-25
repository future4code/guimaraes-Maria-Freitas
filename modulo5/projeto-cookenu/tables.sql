
CREATE TABLE signup(
    nome VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    senha VARCHAR(64) NOT NULL,
    accesso_token VARCHAR (64) NOT NULL

);

CREATE TABLE login(
    email VARCHAR(64) NOT NULL,
    senha VARCHAR(64) NOT NULL,
    accesso_token VARCHAR (64) NOT NULL
   
);

CREATE TABLE perfil (
    id VARCHAR (64) NOT NULL,
    nome VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);

CREATE TABLE usuario (
    id VARCHAR (64) NOT NULL,
    nome VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);

CREATE TABLE criar_receita (
    titulo VARCHAR (64) NOT NULL,
    descricao VARCHAR (64) NOT NULL

);


CREATE TABLE pegar_receita (
    id VARCHAR (64) NOT NULL,
    titulo VARCHAR (64) NOT NULL,
    descricao VARCHAR (64) NOT NULL,
    criacao VARCHAR (64) NOT NULL
);
