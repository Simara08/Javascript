function CountLatter(str) {
    let count=1;
    for (let i = 0; i < str.length; i++) {
       if (i!=str.length-1) {
        if ( word[i]==word[i+1]) {
            count++;
        }
       }
    }
    if (count>0) {
            console.log(`${str[i]}  ${count}`);
    }
}
console.log("fydufsaufsa");