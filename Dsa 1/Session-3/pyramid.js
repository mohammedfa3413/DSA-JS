function pyramid(n){
    let arry = [];
    for(let i=1; i<=n ;i++){
        let str = "";
        for(let j=1 ; j<=i ; j++){
            str += "* ";
        }
        arry.push(str.trim());
    }
    return arry;

}








