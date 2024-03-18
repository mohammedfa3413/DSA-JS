function fibonaciSeries(n){
    if(n<=1){
        return n;
    }else if(n>=2){
        return fibonaciSeries(n-1)+fibonaciSeries(n-2);
    }
}
let result = fibonaciSeries(6);
console.log(result);