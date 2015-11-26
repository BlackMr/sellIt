console.log("Thats OK");

var	categories = ["liveKits", "petProducts","forHumans"];

// var productProperties = {
// 	id 	  : productId,
// 	name  : productName,
// 	price : productPrice,
// 	size  : productSize,
// 	color : productColor,
// 	category : productCategory,

// };

//WILL also list products based on their cathegories
//
var productList = [];




var Product = function(pName,pId) {
	this.pname=pName;
	this.pid = pId;

};

var createProduct = new Product("kaan","13");

//function addProductList() {
	productList.push(createProduct);
console.log("productList12345" + productList);	
//};









var fPlayers = [];

var fPlayer = {
	id : 1,
	name: "Kaan",
	surname: "Karabey",
	age: 13,
	position: "dmc",
};

console.log(fPlayer.name);

fPlayers.push(fPlayer);

console.log(fPlayers);

