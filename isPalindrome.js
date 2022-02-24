let isPalindrome = (x) => {
    let str = String(x)
    if (str.length === 0 || str.length ===1){
        return true 
    }
    for (let i=0; i<str.length; i++){
        if (i >= str.length -i ){
            return true
        }
        if (str[i] === str[(str.length -1)-i]){
            continue
        } else {
            return false
        }
        
    }
};

x1 = 121
x2 = 1234
x3 = -121
x4 = 1221
x5 = "samas"
console.log(isPalindrome(x1));
console.log(isPalindrome(x2));
console.log(isPalindrome(x3));
console.log(isPalindrome(x4));
console.log(isPalindrome(x5));