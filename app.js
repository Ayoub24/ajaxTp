$(document).ready(function () {
    $(".btn").click(function () {
        let Text; 
        //$("#result").html("Hello <b>world</b>!");
        $.ajax({
           url: 'https://jsonplaceholder.typicode.com/posts',
           method: 'get',          
           dataType: 'json',
           success: function (response) {
               for (i = 1; i< response.length ; i ++){
                    Text = Text + "Post ID : " + response[i].id + '<br>' + "Post Body : " + response[i].body + '<br>';
               }
               $("#result").html(Text);
           },
           error: function (error) {
               alert(error);  
           },  
           
       });
     
        
    });
});