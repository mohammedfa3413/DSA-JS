function FindElements(n,arr,x){
    for(let i=0;i<n;i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1;
}

let result = FindElements(5,[1,2,3,4,2,1],1);
console.log(result);