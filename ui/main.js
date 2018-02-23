
var button = document.getElementById('counter');

 button.onclick = function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.Done)
        {
            
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            
        }
    }
    request.open('GET','http://goyalmunish85.imad.hasura-app.io/counter',true);
    
    request.send(null);
}