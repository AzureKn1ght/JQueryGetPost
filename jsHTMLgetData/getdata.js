//syntax: $.getJSON(url, [data],[callback]);
//AJAX library

function getFromServer(){
  $.getJSON('https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/accounts', function(data) {
        var text ="";
        data.forEach(function(item){    
        text = text + `<p> Account ID: ${item.id}<br>
                    Account Type: ${item.account}<br>
                    Balance: ${item.balance} </p>`
        
        });
        $(".mypanel").html(text);
    });
  }


   