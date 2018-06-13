# Amazon-Customer
Node.js and MySQL app

# About
Amazon-Customer is a node.js app that intereacts directly with a mysql database. this app works with the inquier npm to to interact with the user and mysql to keep track of the products inventory. 


First the user is presented with a list of the full inventory:
![list of products](/images/1.png)

Next the user selects which product they want based on the item_id, and how much of that item they want:
![inquirer prompt: Which product and how many?](/images/2.png)

If there is enough of their desired item in inventory, then they are presented with this greeting and the dollar amount of their purchase:
![purchase successful](/images/3.png)

If there is not enough of the itme they want, then they will be unable to purchase the product and will be greeted with this message:
![purchase unsuccessful](/images/4.png)
