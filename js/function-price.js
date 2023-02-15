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

// total

function getTotal (){

    const chocolateTotal = getValueById("Choco");
    const roseTotal = getValueById("rose");
    const dairyTotal = getValueById("dairy");
    const totalSum = chocolateTotal + roseTotal + dairyTotal;
    setTextById("total", totalSum);
}

// promo-code-apply

document.getElementById("btn-promo-code").addEventListener("click", function(){
    const promoCode = valueById("promo-code-field");
    if(promoCode === 101){
        const total = getValueById("total");
        const sum = total - parseInt(total) * 0.1;
        setTextById("all-total", sum);
    }
    else{
        alert("Wrong promo code")
    }
})