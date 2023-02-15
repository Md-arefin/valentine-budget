function getInputValueById(id, priceStringId) {
    const quantity = document.getElementById(id).value;
    const quantityPriceStringId = document.getElementById(priceStringId).innerText;

    const quantityPrice = parseFloat(quantityPriceStringId)

    const itemCost = quantity * quantityPrice;
    document.getElementById(id).value = "";
    return itemCost;
}

function setTextById(id, value) {
    return document.getElementById(id).innerText = value;
}

function getValueById(id) {
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.innerText;
    const input = parseFloat(inputFieldString);
    return input;

}