function SortingArray(arr){
    for(let i=0;i<arr.length;i++){
        arr.sort();
        return arr;
    }      
}

let sorted = SortingArray(['ball','cat','apple']);
console.log(sorted);