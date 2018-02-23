
var button = document.getElementById('counter');

 button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.open('GET','http://goyalmunish85.imad.hasura-app.io/counter',true);
    
    request.send(null);
}