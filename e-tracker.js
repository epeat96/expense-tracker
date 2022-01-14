var gridContainer = document.getElementById('grid-container');
var button = document.getElementById('add');
var description = document.getElementById('description');
var amount = document.getElementById('amount');
var price = document.getElementById('price');
var buttonId = 0

button.onclick = function(){

    var descriptionDiv = document.createElement('div');
    var descriptionText = document.createElement('p');
    var amountDiv = document.createElement('div');
    var amountText = document.createElement('p');
    var priceDiv = document.createElement('div');
    var priceText = document.createElement('p');
    var buttonDiv = document.createElement('div');
    var button = document.createElement('button');

    buttonId = buttonId + 1;
    button.setAttribute('id',buttonId);
    descriptionText.innerHTML = description.value;
    descriptionDiv.appendChild(descriptionText);
    descriptionDiv.setAttribute('id','descriptionDiv'+buttonId);
    gridContainer.appendChild(descriptionDiv);

    amountText.innerHTML = amount.value;
    amountDiv.appendChild(amountText);
    amountDiv.setAttribute('id','amountDiv'+buttonId);
    gridContainer.appendChild(amountDiv);

    priceText.innerHTML = price.value;
    priceDiv.appendChild(priceText);
    priceDiv.setAttribute('id','priceDiv'+buttonId);
    gridContainer.appendChild(priceDiv);

    button.innerHTML = 'delete'
    buttonDiv.appendChild(button);
    buttonDiv.setAttribute('id','buttonDiv'+buttonId);
    gridContainer.appendChild(buttonDiv);


    description.value = '';
    amount.value = '';
    price.value = '';
};
