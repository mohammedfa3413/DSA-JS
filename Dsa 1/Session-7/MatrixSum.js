function DiagnolSum(mat){
    let sum = 0, n=mat.length;
    for(let i=0;i<n;i++){
        sum += mat[i][i];
        if(i !=n-1-i){
            sum += mat[i][n-1-i];
        }
    } 
    return sum;
}