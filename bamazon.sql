DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE  bamazon;

CREATE table products(
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("giant stuffed dragon", "games", 45, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("plastic gloves", "cleaning suplies", 5, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee mug", "kitchen", 15, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AA Battery", "homegoods", 10, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("milk", "kitchen", 5,1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog rainboots", "fashion", 75, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("potted herbs", "home and garden", 30, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("culottes", "fashion", 90,46);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yoga mat", "zen", 80, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("face wash", "toiletries", 10, 5);


SELECT * FROM products;