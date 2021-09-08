


a = 7;

b = 5;

c = a + b / 2;

// Ausgabe in Entwicklerkonsole des Browsers mit F12 öffnen
console.log(a);
console.log(a,b,c);








input1 = document.getElementById('input1');
button = document.getElementsByClassName("button")

for (b = 0; b < button.length; b++){
    button[
        b

    ].onclick  = function() {
        
    
        input1.value = input1.value + this.innerHTML;
    
    
    };
        
    
}



buttonEqual.onclick = function()
{
    var str = input1.value;

    if (str !=""){


        var std = str.replace("x", "*")
        var res = std.replace("÷", "/")
        input1.value = math.evaluate(res);

    }

    
}




buttonCLR.onclick = function() {

    input1.value = '';
}

button1.onclick = function() {
    

	

	input1.value = input1.value + '7';


};



