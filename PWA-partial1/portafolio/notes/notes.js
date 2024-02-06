
var prism = function(l,w,h){
    return l * w ** h;
}


console.log(prism(34,76,12));


var prismo = function(l) {
    return function(w) {
    return function(h) {
    return l * w * h;
    }
}
}

console.log(prismo(56)(12)(68));
     

var foo = (function(){
    console.log('I am the life')
})();


json = {
    atrr : foo
} 

const bar = (function(){
    return 56;
});

console.log(bar);


var namesum = function sum(a,b){
    return a + b;
}

console.log(namesum(67,77));

console.log(sum(67,77));






var say = function(times){
    if(times > 0){
        console.log("Hello " + times);
        say(times - 1);
    }
}

say(10); 


var say = function say(times){
    if(times > 0){
        say = undefined;
        console.log("Hello " + times);
        say(times - 1);
    }
}

var saysay = say;
say = "Oops!";
saysay(10); 



function person(p,...msg){
    msg.forEach( arg => {
        console.log(p +" say: " + arg);
        
    });
}


obj = {
    username: "Bar",
    status: true
}
person("foo","hello","world","js","REACT",obj.username,obj);






const fetch = require('node-fetch');

var url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log('ID => ' + element.id + " title => " + element.title);
        })
    })
    .catch(error => console.error('Error:', error));



    