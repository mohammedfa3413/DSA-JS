function InterSectionOfTwoArrays(n,num1,m,num2){
    const map = new Map();
    for (let ele of num1){
        const fre = map.get(ele)||0;
        map.set(ele,fre+1);
    }
    let result = [];
    for(const element of num2){
        const fre = map.get(element)||0;
        if(fre > 0){
            result.push(element);
            map.set(element,fre-1);
        }
    }
    result.sort((a,b)=> a-b );
    return result;

    
}

