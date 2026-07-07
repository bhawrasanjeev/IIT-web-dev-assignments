let search = document.getElementById("search");
let productList = document.getElementById("productList");

const products = [
    "Laptop",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Headphones",
    "Speaker",
    "Mobile",
    "Tablet",
    "Camera",
    "Printer"
];

function display(items) {

    productList.innerHTML = "";

    if(items.length === 0){

        let li = document.createElement("li");
        li.innerText = "No products found.";
        productList.appendChild(li);

        return;
    }

    items.forEach((product)=>{

        let li = document.createElement("li");
        li.innerText = product;

        productList.appendChild(li);

    });

}

display(products);

search.addEventListener("input", ()=>{

    let searchValue = search.value.toLowerCase().trim();

    let filteredProducts = products.filter((product)=>{

        return product.toLowerCase().includes(searchValue);

    });

    display(filteredProducts);

});