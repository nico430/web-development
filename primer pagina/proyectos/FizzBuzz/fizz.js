/*programa que distingue multiplos de un numero
si el numero es divisible por 3 escribir Fizz
si el número es divisible por 5 escribir Buzz
si el número es divisible por ambos escribir FizzBuzz
*/

multiplos(1,100,3,5);


function multiplos(inicial,final,multiplo1,multiplo2){
    var inicial;
    var final;
    var multiplo1
    for(var i = inicial; i <= final; i++){
        if(i % multiplo1 == 0 &&  i % multiplo2 == 0){
            document.write(i + " --FizzBuzz");
        }
        else if( ! i % multiplo1 == 0 &&  i % multiplo2 == 0){
            document.write(i + " --Buzz");
        }
        else if(i % multiplo1 == 0 && ! i % multiplo2 == 0){
            document.write(i + " --Fizz");
        }
        else{
            document.write(i);
        }
        document.write("<br />");
    }

}
