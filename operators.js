amount=200000
intrestrate=9
tenure=20

r=intrestrate/12
i=r/100
n=tenure*12

emi=(amount*i*(i+1)**(n))/((1+i)**(n)-1)
console.log(emi)
totalpayable=n*emi
console.log(totalpayable)
totalintrst=totalpayable-amount
console.log(totalintrst)


