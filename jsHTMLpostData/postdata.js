/*Syntax: */

function postToServer(e){
  e.preventDefault();  //to prevent form from submitting and refreshing the page
  
      if (myform.itemname.value =="") return false;
        itemname = myform.itemname.value;  
     /* postData = { id: form.id.value, 
      first_name: form.first_name.value, 
      last_name: form.last_name.value,  
      email: form.email.value,
      mobile: form.mobile.value, 
      }; */

      addData(itemname);
}  
     
//url: "https://varlabs.comp.nus.edu.sg/fintech/itemsapi.php",
//url: "http://127.0.0.1:8000/itemsapi.php", 

function addData(postData){// pass your data in method
     console.log(postData);
     $.ajax({
             type: "POST",
             url: "http://127.0.0.1:8000/itemsapi.php",
             data: postData,// now data come in this function
             contentType: "application/x-www-form-urlencoded; charset=UTF-8",
             crossDomain: true,
             dataType: "text", 

             success: function (data, status, jqXHR) {

                 alert("success");// write success in " "
                 alert(status);
                 document.getElementById("output").innerText = data;
             },

             error: function (jqXHR, status) {
                 // error handler
                 //console.log(jqXHR);
                 alert('fail ' + status.code);   
             }
          });

          alert("done");
    }

     


    myform.addEventListener("submit", postToServer); 