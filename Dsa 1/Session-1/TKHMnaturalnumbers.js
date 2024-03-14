function NanturalNumbers(N){
    let result = 0
    for(let i=0 ; i<N ; i++){
        result =  (N*(N+1))/2
        return result;
    }
}
let result = NanturalNumbers(896);
console.log(result);


//2nd 
// function naturalSum(n) {
//     return n*(n+1)/2
// }
// let sum = naturalSum(152)
// console.log(sum);