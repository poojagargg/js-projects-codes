//create code
var item='shoes';
var qty=2;
var price=2000;
const cart=require('./models/user');
const object= new cart(item, qty, price);
const cartoperations=require('./helpers/cartoperations');
console.log("creating a cart: ");
let msg=cartoperations.create(object);
console.log(msg);

//read code
console.log('reading the data present in cart: ');
cartoperations.read();

//update code
const cartObject=new cart('belts', 3, 1000);
console.log("updating data in cart: ");
msg=cartoperations.update(cartObject);
cartoperations.read();
console.log(msg);

//delete code
const deleteObject=new cart('shoes', 2, 1000);
console.log('deleting some data from cart: ');
msg=cartoperations.delete(deleteObject);
cartoperations.read();
console.log(msg);
