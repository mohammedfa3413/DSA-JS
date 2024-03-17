 function Mostfrequency(text){
    const map = new Map();

    for(let i=0;i<text.length;i++){
        let c = text[i];
        if(map.has(c)){
            let previous = map.get(c);
            map.set(c,previous + 1);
        }else {
            map.set(c,1);
        }
    }


    let c = ".",count = 0;

    for(const [key,value] of map){
        if(value > count){
            c = key;
            count = value;
        }else if (count == value){
            if(key < c){
                c = key;
            }
        }
    }
    return [c,count];

 }


 let result = Mostfrequency("Mohammed Faizan Ghani");
 console.log(result);