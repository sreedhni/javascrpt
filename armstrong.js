var num="153"
var digit_count=num.length

num=Number(num)

result=0
var original =num
while(num !=0){
    let digit=num%10
    let exp=digit**digit_count
    result=result+exp
    num=Math.floor(num/10)

}
console.log(original==result ? "armstrong" :"not armstrong");
