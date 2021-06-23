function getFromServer(){
    $.getJSON('https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/users', function(data) {
          var text ="<ul>";
          data.forEach(function(item){    
          text = text + `<li> Account: ${item.id}, ${item.first_name} ${item.last_name}<br>
                      Email: ${item.email} </li>`
          
          });
          text += "</ul>"
          $(".mypanel").html(text);
      });
    }