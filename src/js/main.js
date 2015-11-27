


console.log("Thats OK");

var	categories = ["liveKits", "petProducts","forHumans"];

var categ = {
	categName: {
		liveKits: ["goodOne","badOne"],
		petProducts: [],
		forHumans: []
	}
};



//WILL also list products based on their cathegories
//
var productList = [];



//Constructor object
var Product = function(Name,cathegory,desc) {
	this.Name=Name;
	this.cathegory = cathegory;
	this.desc = desc;



	var whichCateg = Object.keys(categ.categName).length;	
	 function addToCateg () {

		for(var i=0;i<whichCateg;i++){
			if(cathegory == Object.getOwnPropertyNames(categ.categName)[i])
				{console.log("this is working BUT");
					console.log("cathegory " + cathegory);
					// BUT CANT AUTOMATED////////
					Object.keys(categ.categName.forHumans.push(Name));	
				}
		}
	

	
	}
	addToCateg();
};

//WILL be created automated with form elements.Just examples
var createProduct = new Product("Sihirli Balık",categories[0],"nice Product");
var createProduct2 = new Product("Yaşayan Fosil",categories[1],"nice one too");
	productList.push(createProduct);
	productList.push(createProduct2);
	
	console.log("created Product"+ createProduct.Name + " " +createProduct.cathegory);
	console.log(productList);


	console.log("NEW TRY : " + Object.keys(categ.categName).length);
	console.log(Object.getOwnPropertyNames(categ.categName)[0]);

	//For view of Products that we have 
var existingProducts = document.getElementById('existingProductsList');
for(var i=0;i<productList.length;i++){
var listItem = document.createElement('li');
	listItem.appendChild(document.createTextNode(productList[i].Name));
	existingProducts.appendChild(listItem);
}
var productName = document.getElementById('productNameField');
//add new product to your inventory
var addProduct = function(){
	var getCategOptions= document.getElementById('cathegoryOption');
	var chosenCathegory = getCategOptions.options[getCategOptions.selectedIndex].text;
	console.log("chosenCathegory" + chosenCathegory);
	var newProduct = new Product(productName.value,chosenCathegory,"not bad");

	var productLi = document.createElement('li');
	
	productLi.appendChild(document.createTextNode(newProduct.Name));
	existingProducts.appendChild(productLi);

	console.log(categ.categName.liveKits);
	console.log(categ.categName.petProducts);
	console.log(categ.categName.forHumans);
};	
	
