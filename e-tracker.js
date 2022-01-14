var gridContainer = document.getElementById('grid-container');
var button = document.getElementById('add');
var description = document.getElementById('description');
var amount = document.getElementById('amount');
var price = document.getElementById('price');
var buttonId = 0

button.onclick = function(){

    if (description.value == ''){
        alert('Please enter a description!');
        return
    }

    if (amount.value == ''){
        alert('Please enter an amount!');
        return
    }

    if (price.value == ''){
        alert('Please enter a price!');
        return
    }

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
    button.setAttribute('onclick','deleteRow('+buttonId+')');
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

function deleteRow(button){
    var button = document.getElementById(button);
    var descriptionDiv = document.getElementById('descriptionDiv'+button.id);
    var amountDiv = document.getElementById('amountDiv'+button.id);
    var priceDiv = document.getElementById('priceDiv'+button.id);
    var buttonDiv = document.getElementById('buttonDiv'+button.id);

    gridContainer.removeChild(buttonDiv);
    gridContainer.removeChild(descriptionDiv);
    gridContainer.removeChild(amountDiv);
    gridContainer.removeChild(priceDiv);
}

