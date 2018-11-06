var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Ji394su3!",
    database: "bamazon_DB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });

// Display all of available items.
function displayInventory() {
	connection.query('SELECT * FROM products', function(err, res){
		if (err) throw err;
        console.log('=============================What would you like to buy?==============================');
        
        for(var i = 0; i<res.length;i++){
            console.log("ID: " + res[i].item_id + " | " + 
                        "Product: " + res[i].product_name + " | " + 
                        "Department: " + res[i].department_name + " | " + 
                        "Price: " + res[i].price + " | " + 
                        "QTY: " + res[i].stock_quantity);
            console.log('======================================================================================');            
          };
          buyItem();
        });
};

// Prompt for whaich item user would like to buy and how many of the item.
function buyItem() {
    inquirer
      .prompt([
          {
            name: 'itemId',
            type: 'input',
            message: 'Which item would you like to buy? (Please put in the Item ID)',
            validate: function(value) {
                if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                  return true;
                }
                return 'Please put in valid Item ID.';
              }
          },
          {
            name: 'quantity',
            type: 'input',
            message: 'How many would you like to buy?',
            validate: function(value) {
                if (isNaN(value) === false && parseInt(value) > 0) {
                  return true;
                }
                return "Please enter valid quantity.";
              }
          }
      ]).then(function(answer){
          var query = 'SELECT * FROM products WHERE item_id = ?';
            connection.query(query, [answer.itemId], function(err, res){
            
            // Checking if have enough inventory.
            if(answer.quantity > res[0].stock_quantity){
            console.log('Insufficient Quantity');
            console.log('This order has been cancelled');
            console.log('');
            newOrder();
            }
            else{
                totalPrice = res[0].price * answer.quantity;
                console.log('Your Total is $' + totalPrice);
                console.log('Thank you for your order and enjoy!');
                console.log('');

                //update products table
                connection.query('UPDATE products SET ? Where ?', [{
                    stock_quantity: res[0].stock_quantity - answer.quantity
                },{
                    item_id: answer.itemId
                }], function(err, res){});
                newOrder();
            }
        })
    
    }, function(err, res){})
};

//Allows the user to place a new order or end the connection
function newOrder(){
	inquirer.prompt([{
		type: 'confirm',
		name: 'choice',
		message: 'Would you like to place another order?'
	}]).then(function(answer){
		if(answer.choice){
			buyItem();
		}
		else{
			console.log('Thank you for shopping at Bamazon!');
			connection.end();
		}
	})
};

displayInventory();