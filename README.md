
# tCakes
A frontend ordering application that allows user to add view orders.

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)


## Development Setup Instructions

Ensure the server is running before running the frontend application

### API Instructions
- Enter the server directory
* Run `npm install`
- Build the server files from typescript
* `npm run build-ts`
- Execute the server
* Run `npm start`
- The server should now be running at http://localhost:4000/.


### Frontend Application Instructions
- Enter the tCakes directory
* Run `npm install`
* Run `npm start`
* Navigate to `http://localhost:3000/`
- The application should now be running at http://localhost:3000/.

### Features
[**Complete**]  1. The user is offered a choice of three cupcake components
   [**Complete**] - a base cupcake
   [**Complete**] - a frosting
   [**Complete**] - a topping

[**Complete**] 2. The user should be shown a price breakdown including:

   [**Complete**] - cupcake price based on pricing of selected cupcake components
   [**Complete**] - delivery charge of \$1.50 per order
   [**Complete**] - sales tax for the state of IL (8.75%)
   [**Complete**] - total without tax
   [**Complete**] - total with tax

[**Complete**] 3. The user should choose a delivery date more than 24 hours in the future.

[**Complete**] 4. The user should click a button to create the order by POSTing it to `localhost:4000/cupcakes/orders`.

### The Cupcake Order Management Screen

[**Complete**] Create a screen where users can monitor their existing orders.

[**Complete**] 1. The user should be displayed their orders in a table ordered by delivery
   time, soonest first, by default.

[**Complete**] 2. The user should be able to sort orders by delivery time, either ascending, or descending.

[**Complete**] 3. The user should be able to filter orders by cupcake component.