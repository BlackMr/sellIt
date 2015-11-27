


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



//Constructor object
var Product = function(Name,cathegory,desc) {
	this.Name=Name;
	this.cathegory = cathegory;
	this.desc = desc;

};
//WILL be created automated with form elements.Just examples
var createProduct = new Product("kaan",categories[0],"nice Product");
var createProduct2 = new Product("kaan1",categories[1],"nice one too");
	productList.push(createProduct);
	productList.push(createProduct2);
	
	console.log("created Product"+ createProduct.Name + " " +createProduct.cathegory);
	console.log(productList);




	//For view of Products that we have 
var existingProducts = document.getElementById('existingProductsList');
for(var i=0;i<productList.length;i++){
var listItem = document.createElement('li');
	listItem.appendChild(document.createTextNode(productList[i].Name));
	existingProducts.appendChild(listItem);
}

//add new product to your inventory
var addProduct = function(){
	var newProduct = new Product("ahmet",categories[2],"not bad");
	var productLi = document.createElement('li');
	
	productLi.appendChild(document.createTextNode(newProduct.Name));
	existingProducts.appendChild(productLi);

};	
	
