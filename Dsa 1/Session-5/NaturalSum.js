function NaturalSum(n){

    if(n==0){
        return 0;
    }


    return n + NaturalSum(n-1);
}


let result = NaturalSum(15);
console.log(result);