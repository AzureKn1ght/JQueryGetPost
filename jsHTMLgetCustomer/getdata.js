function getFromServer() {
  // Callback function can be separate
  $.getJSON(
    "https://9851c3b1-a2c1-44cf-bd7a-4bb482dd0be0.mock.pstmn.io/users",
    function (data) {
      //data = JSON.parse(data); //optional, browser dependent
      var text = "<ul>"; //open list
      data.forEach(function (item) {
        text += `<li> Account: ${item.id}, ${item.first_name} ${item.last_name}<br>
                      Email: ${item.email} </li>`; //incrementally append list items
      });
      text += "</ul>"; //close list
      $(".mypanel").html(text); //put all item text into html (jQuery)
    }
  );
}
