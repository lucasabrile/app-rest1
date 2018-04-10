var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_cardapio"]', function (e) {
    firebase.database().ref('Pedidos').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersListpe").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-20">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Email +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Telefone +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Endereco +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Mensagem +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersListpe").append(listHtml);
    
            
        })
    })
    
});


function apagarrr(){
    
    var apagarrr = document.getElementById('excluirrr').value;

    apagardb(apagarrr);
}

function apagardb(apaga){

    return firebase.database().ref().child('Pedidos').child(apaga).remove();
}
  
