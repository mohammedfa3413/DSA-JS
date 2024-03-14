//FindQadrant
function FindQaudrant(x,y){
    if(x>0 && y>0){
        return "1";
    }else if(x<0 && y>0){
        return "2";
    }else if(x<0 && y<0){
        return "3";
    }else if(x>0 && y<0){
        return "4";
    }
}

let ans = FindQaudrant(-2,3);
console.log(ans);