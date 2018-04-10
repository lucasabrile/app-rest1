/*var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var telefoneInput = document.getElementById('telefoneInput');
var mensagemInput = document.getElementById('mensagemInput');

var addButton = document.getElementById('addButton');

addButton.addEventListener('click', function(e){
    e.preventDefault();
    create(nameInput.value, emailInput.value, telefoneInput.value, mensagemInput.value);
    
})
function create(name, email, tel, msm){
    var data = {nome: name, email: email, telefone: tel, msm: mensagem};
    alert(data);
    return firebase.database().ref().child('Clientes').push(data);
}
*/



var nameInput = document.getElementById('nameInput');
var emailInput = document.getElementById('emailInput');
var telefoneInput = document.getElementById('telefoneInput');
var mensagemInput = document.getElementById('mensagemInput');

var addButton = document.getElementById('addButton');

addButton.addEventListener('click', function(e){
    e.preventDefault();
    create(nameInput.value, emailInput.value, telefoneInput.value, mensagemInput.value);
    
})
function create(name, email, tel, msm){
    var data = {nome: name, email: email, telefone: tel, msm: mensagem};
    alert(data);
    return firebase.database().ref().child('Clientes').push(data);
}