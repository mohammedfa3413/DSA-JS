function incrementNumber(N, A) {

    for(let i =N-1; i>=0 ; i--){
        if(A[i]!==N){
            A[i]++;
            return A;
        }else{
            A[i]=0;
        }
    }

    let ans = new Array(N + 1).fill(0);
    ans[0]=1;
    return ans;
}

let result = incrementNumber(3,[9999])
console.log(result);













