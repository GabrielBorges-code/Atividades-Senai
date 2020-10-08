/*
    O TRABALHO É BASEADO NO PROJETO PASSADO    
*/
/* 🎯Escolha um desses modelos de negócio para criar uma base de dados(Escola,restaurante,academia,concessionária,Oficina,Lanchonete,Lava-Jato)

👉Crie uma base de dados 
👉Crie 4 tabelas
👉Crie no mínimo 5 linhas para cada tabela
👉Faça 5  linhas de carga (insert)em cada tabela
(para cada tabela é preciso ter obrigatoriamente)
*Um tipo varchar
*Um tipo date
*Um tipo int
*Uma dependência interna(Chave primária)

📌Retorne os dados de todas as tabelas
📌Retorne as duas colunas de cada tabela
📌Edita uma coluna de cada tabela (update) Crie uma situação de necessidade de edição 
📌Exclua uma coluna de cada tabela (delete) Crie uma situação de necessidade de exclusão */

select * from aluno, curso, professor, cursoaluno, notaAluno;
desc aluno;
select * from aluno;
alter table curso add dataDeSaida date after nome;

create table notaAluno (
	nota int (2),
    situação varchar (10),
    Curso_fk_idCurso int not null,
    Aluno_fk_idAluno int not null,
    Professor_fk_idAluno int not null
);

insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Valentina','3907968502','68125498154','Taguatinga','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Helena','9966992702','3458759815','Guara','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Valentina','1935974003','6986269982','Gama','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Manuel','469679232','68575187','Sao Sebastiao','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Julio ','217957001','65929565','Santa Maria','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Valentina','5470159199','6825498154','Taguatinga','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Lucas','1711011152','6401405131','Ceilândia','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Francisco','2964992150','3946811173','Sobradinho II','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Bruno','1127867604','1166800123','Cruzeiro','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Bianca','2282019150','4776634123','Bandeirante','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Isabela','0088152117','4816116100','Vicente Pires','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Leticia','7445016185','3743468540','Águas Claras','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Antonio','6531576154','9879589105','Samambaia','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Sonia','9989560191','5244772125',' Candangolândia','DF');
insert into aluno (nome, cpf, numeroTelefone, cidade, estado) values ('Sebastiao','9199346115','2805314198','Santa Maria','DF');

select * from aluno;

alter table professor drop  column cpf, drop column numeroTelefone; 
alter table professor add cpf bigint(11) after nome, add numeroTelefone BIGINT(11) after cpf; 

desc professor;

alter table aluno drop  column cpf, drop column numeroTelefone; 
alter table aluno add cpf bigint(11) after nome, add numeroTelefone BIGINT(11) after cpf; 

insert into professor (nome, cpf, numeroTelefone, cidade, estado) values ('Sônia','15495012089','77820365005','Taguatinga','DF');
insert into professor (nome, cpf, numeroTelefone, cidade, estado) values ('Josefa','06065980064','76674323098','Ceilândia','DF');
insert into professor (nome, cpf, numeroTelefone, cidade, estado) values ('Antônio','2964992150','3946811173','Sobradinho II','DF');
insert into professor (nome, cpf, numeroTelefone, cidade, estado) values ('Marlene','48171522068','88405275088','Cruzeiro','DF');
insert into professor (nome, cpf, numeroTelefone, cidade, estado) values ('Geraldo','61474796010','03726603042','Bandeirante','DF');
insert into professor (nome, cpf, numeroTelefone, cidade, estado) values ('Isabela','0088152117','58914391078','Vicente Pires','DF');
insert into professor (nome, cpf, numeroTelefone, cidade, estado) values ('Mário','41192775007','31772978000','Águas Claras','DF');
insert into professor (nome, cpf, numeroTelefone, cidade, estado) values ('Antonio','90435309056','92631162021','Samambaia','DF');

select * from professor;

insert into curso (nome, dataDeEntrada, dataDeSaida ) values ('Algoritimos', '2020-05-01', '2020-08-30');
insert into curso (nome, dataDeEntrada, dataDeSaida ) values ('MySql', '2020-08-01', '2020-12-30');
insert into curso (nome, dataDeEntrada, dataDeSaida ) values ('HTML + CSS', '2020-01-01', '2020-02-30');
insert into curso (nome, dataDeEntrada, dataDeSaida ) values ('Java', '2020-03-01', '2020-07-30');
insert into curso (nome, dataDeEntrada, dataDeSaida ) values ('Sistemas Operacionais', '2020-07-01', '2020-08-30');
insert into curso (nome, dataDeEntrada, dataDeSaida ) values ('Python', '2020-03-01', '2020-05-30');

desc cursoaluno;
desc curso;
desc aluno;
desc professor;
desc notaaluno;

select * from curso;
select * from aluno;
select * from professor;
select * from cursoaluno;

## alter table cursoaluno drop column fk_dataDeEntrada, drop column fk_dataDeSaida;

update cursoaluno set curso = '6' where idAluno = '1';


select idCurso, nome from curso;
select nome, cpf from aluno;
select nome, cidade from professor;

select * from curso;
select nome, cpf from aluno;
select nome, cidade from professor;
select * from cursoaluno;

alter table cursoaluno drop column fk_dataDeEntrada, drop column fk_dataDeSaida;
alter table curso drop column  dataDeEntrada, drop column  dataDeSaida;
alter table aluno drop column numeroTelefone, drop column cidade;
alter table aluno drop column cpf, drop column estado;