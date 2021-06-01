const connect = "http://localhost:3010/search/";
    
    function getajax()
    {   
      console.log("GET");
      $.ajax({
        type: "GET",
        url: connect,
        success: function(msg){
          $('#GetHere').empty();
          console.log(msg);
          for(let i =0; i < msg.data[0].length; i++){
            $('#GetHere').prepend('<img src="' + msg.data[0][i].image +'" />');
            $('#GetHere').prepend('<p>' + msg.data[0][i].name +'</p>');
            $('#GetHere').prepend('<br>');
          }
        }
      });
    }
    
    function postajax()
    {
     // document.getElementById('idGET').value = document.getElementById('idPOST').value;
      var id = parseInt(document.getElementById('idPOST').value);
      $.ajax({
        type: "POST",
        url: connect,
        
        data: "id="+ id +"&name=" + document.getElementById('namePOST').value + "&image=" + document.getElementById('imagePOST').value,
        success: function(msg){
          console.log(msg);
          if(msg == "id already exists")
          {
            alert("Id уже занято. Введите другое");
          }
          else
          {
            getajax();
        }
        }
      });
    }