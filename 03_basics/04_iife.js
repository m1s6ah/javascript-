/// iife

(function chai(){
    //named IIFE 
    console.log(`DB CONNECTED`);

})();
//unnamed iife
((name)   => {
    console.log(`DB CONNECTED TWO ${name}`);

    
})('hitesh');