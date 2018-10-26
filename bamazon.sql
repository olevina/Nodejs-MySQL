DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2),
  stock_quantity INT,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone XS", "electronics", 1001.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "electronics", 900.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("earrings", "jewelery", 3280.40, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pen", "office supplies", 1.50, 3457);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("picture", "random", 10.50, 873);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pencil", "office supplies", 1.35, 1050);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rug", "furniture", 30.45, 357);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coldpay", "music", 15.50, 160);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("couch", "furniture", 850.60, 230);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("true romance", "movie", 49.50, 378);



ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '229535Jkz'