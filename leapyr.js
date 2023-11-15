year=2020
if (year%100==0 && year%400){
    console.log("leap year");
}

else if(year%100!=0 && year%4==0){
    console.log("leap year")
}

else{
    console.log("not year");

}