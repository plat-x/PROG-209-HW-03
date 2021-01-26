let customerArray = [];

document.getElementById("customerForm").addEventListener('submit', formSubmitEvent);

function formSubmitEvent(){
	let customerInfo = {
		customerLastName: document.getElementById('customerLastNameInput').value,
		city: document.getElementById('cityInput').value,
		paymentPreference: document.getElementById('paymentPreferenceInput').value
	}
	customerArray.push(customerInfo);
	displayCustomerInfo();
}

function displayCustomerInfo(){
	document.getElementById('myUl').innerHTML = "";
	for (let i = 0; i < customerArray.length; i++){
		let myLi = document.createElement('li');
		document.getElementById('myUl').appendChild(myLi);
		myLi.innerHTML = customerArray[i].customerLastName + ' ' + customerArray[i].city + ' ' + customerArray[i].paymentPreference;
	}
}