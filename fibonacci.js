fibo = 1, 
fibo2 = 1, 
resultado=0; 
 
for(i = 0; i < 10; i++) { 
    fibo = fibo + fibo2; 
    fibo2 = fibo - fibo2; 
    console.log(resultado+= ' | ' + fibo); 
    } 