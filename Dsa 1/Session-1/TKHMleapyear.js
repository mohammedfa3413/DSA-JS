function LeapYear(N){
    if(N % 400 == 0 && N % 100 !==0){
        return "Not Leap Year";
    }else if (N % 400 == 0){
        return "Leap Year";
    }
    return "Not Leap Year";
}
let Check = LeapYear(1600);
console.log(Check);