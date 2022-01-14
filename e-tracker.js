var gridContainer = document.getElementById('grid-container');
var button = document.getElementById('add');
var description = document.getElementById('description');
var amount = document.getElementById('amount');
var price = document.getElementById('price');

button.onclick = function(){

    var descriptionDiv = document.createElement('div');
    var descriptionText = document.createElement('p');
    var amountDiv = document.createElement('div');
    var amountText = document.createElement('p');
    var priceDiv = document.createElement('div');
    var priceText = document.createElement('p');
    var buttonDiv = document.createElement('div');
    var button = document.createElement('button');


    descriptionText.innerHTML = description.value;
    descriptionDiv.appendChild(descriptionText);
    gridContainer.appendChild(descriptionDiv);

    amountText.innerHTML = amount.value;
    amountDiv.appendChild(amountText);
    gridContainer.appendChild(amountDiv);

    priceText.innerHTML = price.value;
    priceDiv.appendChild(priceText);
    gridContainer.appendChild(priceDiv);

    button.innerHTML = 'delete'
    buttonDiv.appendChild(button);
    gridContainer.appendChild(buttonDiv);


    description.value = '';
    amount.value = '';
    price.value = '';
};
