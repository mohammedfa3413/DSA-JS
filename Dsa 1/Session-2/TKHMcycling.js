function cyclicRotation(n,k,arr){
    k = k%n;
    let rotate = arr.slice(n-k).concat(arr.slice(0,n-k));
    return rotate;
    
}