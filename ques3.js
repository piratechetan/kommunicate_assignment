
const Reversenumber = (num) =>{
    let rev = 0;
    let lastDigit;
    while(num != 0){
        lastDigit = num % 10;
      rev = rev * 10 + lastDigit;
      num = Math.floor(num/10);
    }
    return rev;
}
var num = 149
console.log("Reverse number : "+Reversenumber(num));