function tribonacciBasic(n) {
    if(n===0){
        return 0;
    }else if(n ===1 || n==2){
        return 1;
    }else{
   
   return tribonacciBasic(n-1)+tribonacciBasic(n-2)+tribonacciBasic(n-3);
    }
}