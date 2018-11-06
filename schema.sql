/*Delete the Database if it existed already*/
DROP DATABASE IF EXISTS bamazon_DB;
/* Create Database bamazon_DB*/
CREATE database bamazon_DB;

USE bamazon_DB;

/*Create table with item id, product name, department name price, stock quantity*/
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,4) NOT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);