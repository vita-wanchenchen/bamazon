/*Seeds for SQL table*/
USE bamazon_DB

/*Populate 10 different products*/
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Toy Mouse", "Pet", 3.5, 150), 
       ("Shampoo", "Personal Care", 4.5, 250),
       ("Bluetooth Headset", "Electronics", 25, 50),
       ("24\" Monitor", "Electronics", 220.75, 15),
       ("Handbag", "Appeal", 18, 100),
       ("Body Lotion", "Personal Care", 5, 5),
       ("Polo Shirt", "Appeal", 7.5, 300),
       ("Milky Bone", "Pet", 10, 25),
       ("Mug", "Dishes", 3, 1200),
       ("Round Plate", "Dishes", 4.5, 1);
