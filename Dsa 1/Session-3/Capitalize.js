
function toUpperCase(c){
    let loweCase = c.charCodeAt(0);
    let upperCase = loweCase - 32;
    return String.fromCharCode(upperCase);
}


function Capitalize(Paragraph){
    const n = Paragraph.length;
    //Array.from() to convert from String to array
    const array = Array.from(Paragraph);
    for(let i=0;i<n;i++){
        if(i==0 || array[i-1]==" " || array[i-1]=="." ){
            if(array[i] >= 'a' || array[i] <= 'z' ){
                array[i] == toUpperCase(array[i]);
            }
        }
        
    }
    return array.join("");
}


