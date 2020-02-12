const PRODUCT_KEY = "products";

getProductsFromLocalStorage=()=>{
    let products=[];

    if(localStorage.getItem(PRODUCT_KEY)){
        products=JSON.parse(localStorage.getItem(PRODUCT_KEY));
    }
    return products;

}
addItemFormSubmit = ()=>{
    let products =getProductsFromLocalStorage();

    let itemNameTextBox =document.querySelector("#inm");
    let itemPriceTextBox = document.querySelector("#price");
    let itemQuantityTextBox=document.querySelector("#qty");

    let product={
        name:itemNameTextBox.value,
        price:parseFloat(itemPriceTextBox.value),
        quantity:parseInt(itemQuantityTextBox.value)
    };
    products.push(product);
    localStorage.setItem(PRODUCT_KEY,JSON.stringify(products));

}
loadItems=()=>{
    let products=getProductsFromLocalStorage();
    let tableBody=document.querySelector("#prdData");

    for(let product of products){
        let prdRow=createProductRow(product);
        tableBody.append(prdRow);
    }
}
createProductRow =(product)=>{

    let nameCol=document.createElement("td");
    nameCol.textContent=product.name;

    let priceCol=document.createElement("td");
    priceCol.textContent=product.price;

    let qtyCol=document.createElement("td");
    qtyCol.textContent=product.quantity;

    let prdRow=document.createElement("tr");
    prdRow.append(nameCol);
    
    prdRow.append(qtyCol);
    prdRow.append(priceCol);

    return prdRow;

}