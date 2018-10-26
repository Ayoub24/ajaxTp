$(document).ready( () => {
    $(".btn").click( () => {
        let Text;        
        $.ajax({
           url: 'https://jsonplaceholder.typicode.com/posts',
           method: 'get',          
           dataType: 'json',
           success: (response) => {
               response.forEach((post, index) => {
                   Text = Text + "Post ID : " + response[index].id + '<br>' + "Post Body : " + response[index].body + '<br>';
               })               
               $("#result").html(Text);
           },
           error: (error) => {
               alert(error);  
           },           
       });        
    });
});