let num = [5,8,2,9,3]
console.log(num)
num.sort()
/*for (let pos = 0; pos < num.length; pos++){
    console.log(`${pos} - ${num[pos]}`)
}*/
for (let pos in num){
    console.log(num[pos])
}