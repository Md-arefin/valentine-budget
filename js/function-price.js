// KitKat
document.getElementById("item-btn-1").addEventListener("click", function(){
    const item1Price = getInputValueById("KitKat-Field", "kitkat-price");
    setTextById("Choco", item1Price);
    getTotal();
})

// Rose
document.getElementById("item-btn-2").addEventListener("click", function(){
    const item2Price = getInputValueById("rose-Field", "rose-price");
    setTextById("rose", item2Price);
    getTotal();
})

// dairy
document.getElementById("item-btn-3").addEventListener("click", function(){
    const item3Price = getInputValueById("dairy-Field", "dairy-price");
    setTextById("dairy", item3Price);
    getTotal();
})

function getTotal (){

    const chocolateTotal = getValueById("Choco");

    const roseTotal = getValueById("rose");

    const dairyTotal = getValueById("dairy");

    const totalSum = chocolateTotal + roseTotal + dairyTotal;

    setTextById("total", totalSum);

}