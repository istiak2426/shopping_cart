const addToCartButtons = document.querySelectorAll('.cart');

const cartProduct =  document.querySelector(".cartProduct");


console.log(addToCartButtons);


addToCartButtons.forEach((btn) =>
{
	let addingBtn = btn;
	console.log(addingBtn);
	addingBtn.addEventListener("click", newtoCart)
})


function newtoCart(e){
	
	 let button = e.target;
	 let price = button.previousElementSibling.innerText;
	 let itemName = button.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
	
	 
	 let notMorethanOne = cartProduct.querySelectorAll(".cartProductItem")
	
	 for (not of notMorethanOne){
		 if (not.innerText == itemName){
			 alert("item already added");
			 return
		 }
	 }
	
	let cartProductItem = document.createElement("div")
	cartProductItem.classList.add("cartProductItem")
	cartProductItem.append(document.createTextNode(itemName))

	 

	 

	 let cartProductPrice = document.createElement("div")
	 cartProductPrice.classList.add("cartProductPrice")
	 cartProductPrice.append(document.createTextNode(`Price:${price}`))

	 let cartProductDelete = document.createElement("button")
	 cartProductDelete.classList.add("cartProductDelete")
	 cartProductDelete.append(document.createTextNode("Remove"))

	 let cartItem = document.createElement("div")
	 cartItem.classList.add("cartItem")

	 cartItem.append(cartProductItem)
	 cartItem.append(cartProductPrice)
	 cartItem.append(cartProductDelete)

	 cartProduct.append(cartItem);

	let deleteFromCart = cartProduct.querySelectorAll(".cartProductDelete")
	const pop=  deleteFromCart;
	
	pop.forEach((item) => {
		let deleteButton= item;
		deleteButton.addEventListener("click", deleteFromCartFunc )
	})

	
}

function deleteFromCartFunc(e){

	let buttonToremove = e.target;
	
	let ooo= buttonToremove.parentNode;
	ooo.remove();
}



