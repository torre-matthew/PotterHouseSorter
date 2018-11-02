drop database if exists phs_db;
create database phs_db;
use phs_db;

create table house-sortings (
    id int not null auto_increment,
    name varchar(50) not null,
    house varchar(50) null,
    sorted boolean default false,
    deleted boolean default false,
    primary key (id)
);