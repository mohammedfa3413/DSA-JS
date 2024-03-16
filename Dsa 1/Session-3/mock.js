function FizzBuzz(n){
    let arr = [];
    for (let i=0 ; i<n ; i++){
        if(n % 3 ==0){
            arr.push('Fizz');
        }else if(n % 5 == 0){
            arr.push('Buzz');
        }else if (n % 3 ==0 || n % 5 == 0){
            arr.push('FizzBuzz');
        }else{
            arr.push(i);
        }
    }
    return arr;
}








