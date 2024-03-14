function MagicSquare(n,matrix){
    let sum = 0;
    for(let i=0;i<n;i++){
        sum += matrix[0][i];
    }
    let d1 = 0 , d2 = 0;
    for(let i =0;i<n;i++){
        let row = 0, col = 0;
        for(let j=0;j<n;j++){
            row += matrix[i][j];
            col += matrix[j][i];
            if(i == j){
                d1 += matrix[i][j];
            }else if( i + j == n-1){
                d2 += matrix[i][j];
            }
        }
        if(row!=sum || col!=sum ){
            return false;
        }
    }
    if(d1 != sum || d2 !== sum){
        return false;
    }else{
        return true;
    }
    
}

let array = [[4,9,2],[3,5,7],[8,1,6]];
console.log(array)
let magic = MagicSquare(3,array);
console.log(magic);

