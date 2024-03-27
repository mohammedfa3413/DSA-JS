function PascalsTraingles(n){
    let mat = [];
    for (let i=0;i<n;i++){
        mat.push([]);
        for(let j=0;j<i;j++){
            let z = 1;
            if(mat[i-1] && mat[i-1][j-1] && mat[i-1][j]){
                z = mat[i-1][j-1] + mat[i-1][j];
                mat.push(z);
            }
        }
    }
    return mat;
}