function SecreatAgent(s){
    let words = s.split(" ");
    for(let i=0 ; i<words.length;i++){
        if(words[i].length % 2!==0){
            words[i] = words[i].split("").reverse().join("");
        }
    }
    return words.join(" ");
}