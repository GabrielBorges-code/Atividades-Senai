/* 
Crie 4 tabelas no Banco contendo.

👉1 - Chave Primária (dependência interna)
👉2 - 5 Atributos internos Cada

Atentem-se para os tipos de dados usados
Inclua - Varchar, int, date,

Pode ser feito em um bloco de notas mesmo ou usando extensão .sql 
*/

show databases;
create database test;
use escola;

-- criando tabelas

create table Aluno(
	idAluno int primary key not null auto_increment,
    nome varchar (50),
    cpf int(11),
    numero int(14),
    cidade varchar(45),
    estado varchar(45)
);

create table Professor(
	idProfessor int primary key not null auto_increment,
    nome varchar (50),
    cpf int(11),
    numero int(14),
    cidade varchar(45),
    estado varchar(45)
);

create table Curso(
	idCurso  int primary key not null auto_increment,
    nome varchar(50),
	fk_idProfessor int
);

create table CursoAluno(
	Curso_fk_idCurso int not null,
    Aluno_fk_idAluno int not null,
    dataIngresso date not null
);

select * from CursoAluno;

desc cursoAluno;

-- chaves estrangeiras gerada automaticamente pelo MySql

ALTER TABLE `escola`.`curso` 
ADD INDEX `fk_idProfessor_idx` (`fk_idProfessor` ASC);
;

ALTER TABLE `escola`.`curso` 
ADD CONSTRAINT `fk_idProfessor`
  FOREIGN KEY (`fk_idProfessor`)
  REFERENCES `escola`.`professor` (`idProfessor`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `escola`.`cursoaluno` 
ADD INDEX `Curso_fk_idCurso_idx` (`Curso_fk_idCurso` ASC);
;

ALTER TABLE `escola`.`cursoaluno` 
ADD CONSTRAINT `Curso_fk_idCurso`
  FOREIGN KEY (`Curso_fk_idCurso`)
  REFERENCES `escola`.`curso` (`idCurso`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
ALTER TABLE `escola`.`cursoaluno` 
ADD INDEX `Aluno_fk_idAluno_idx` (`Aluno_fk_idAluno` ASC);
;

ALTER TABLE `escola`.`cursoaluno` 
ADD CONSTRAINT `Aluno_fk_idAluno`
  FOREIGN KEY (`Aluno_fk_idAluno`)
  REFERENCES `escola`.`aluno` (`idAluno`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;