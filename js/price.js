function kitkatPrice(ItemPrice){
    const quantityField = document.getElementById("KitKat-Field");
    const quantity =  quantityField.value;
    const priceString = document.getElementById("kitkat-price").innerText;
    const price = parseFloat(priceString);
    const totalChocolatePrice = quantity * price;
    quantityField.value = "";

    const chocolatePriceField = document.getElementById("Choco");
    const chocolatePriceString = chocolatePriceField.innerText;
    const chocolatePrice = parseFloat(chocolatePriceString);
    chocolatePriceField.innerText = totalChocolatePrice;
}


function rosePrice(ItemPrice){
    const quantityField = document.getElementById("rose-Field");
    const quantity =  quantityField.value;
    const priceString = document.getElementById("rose-price").innerText;
    const price = parseFloat(priceString);
    const totalRosePrice = quantity * price;
    quantityField.value = "";

    const chocolatePriceField = document.getElementById("rose");
    const chocolatePriceString = chocolatePriceField.innerText;
    const chocolatePrice = parseFloat(chocolatePriceString);
    chocolatePriceField.innerText = totalRosePrice;
}


function dairyPrice(ItemPrice){
    const quantityField = document.getElementById("dairy-Field");
    const quantity =  quantityField.value;
    const priceString = document.getElementById("dairy-price").innerText;
    const price = parseFloat(priceString);
    const totalDairyPrice = quantity * price;
    quantityField.value = "";

    const chocolatePriceField = document.getElementById("dairy");
    const chocolatePriceString = chocolatePriceField.innerText;
    const chocolatePrice = parseFloat(chocolatePriceString);
    chocolatePriceField.innerText = totalDairyPrice;

}


