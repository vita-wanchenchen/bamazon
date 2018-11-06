/*Seeds for SQL table*/
USE bamazon_DB

/*Populate 10 different products*/
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("toy mouse", "pet", 3.5, 150), 
       ("shampoo", "personal care", 4.5, 250),
       ("bluetooth headset", "electronics", 25, 50),
       ("24\" monitor", "electronics", 220.75, 15),
       ("handbag", "appeal", 18, 100),
       ("body lotion", "personal care", 5, 5),
       ("polo shirt", "appeal", 7.5, 300),
       ("milky bone", "pet", 10, 25),
       ("mug", "dishes", 3, 1200),
       ("round plate", "dishes", 4.5, 1);
