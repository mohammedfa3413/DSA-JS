function SearchTarget(N,A,X){
    let l = 0 , r = N-1;
    while(l<=r){
        const mid = Math.floor((l+r)/2);
    if(A[mid]==X){
            return mid;
    }else if(X < A[mid]){
        r = mid -1;
    }else{
        l = mid +1;
    }
}
    return -1;
}