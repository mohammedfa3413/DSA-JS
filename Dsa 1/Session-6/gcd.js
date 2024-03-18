function gcdBasic(a, b) {
    if(b==0)
    return a;

    return gcdBasic(b,a%b);
}