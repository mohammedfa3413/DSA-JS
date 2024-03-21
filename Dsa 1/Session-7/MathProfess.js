function professor(n,v,B){
    let Bset = new Set(B);
    let arr = [];
    for(let i = 0;i < n;i++){
        let name = v[i];
        let nameSet = new Set(name);
    }
    let count = 0;
    for(const key of nameSet){
        if(Bset.has(key)){
            count++;
            arr.push(count);
        }
    }
    return arr;
}