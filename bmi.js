// bmi

// below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

wt_kg=58
ht_cm=176
ht_m=176*10**-2
bmi=wt_kg/ht_m
console.log(bmi);
// if (bmi<18.5) {
//     console.log("underwieght");

// }
// else if(18.5<=bmi<=24.9){
//     console.log("Healthy Weight");

// }
// else if(25<=bmi<=29.9){
//     console.log("Overweight");
// }
// else if(bmi>=30){
//     console.log("Obesity");

// }

if (bmi<18.5) {
    console.log("underwieght");

}
else if(18.5<=bmi && bmi<=24.9){
    console.log("Healthy Weight");

}
else if(25<=bmi && bmi<=29.9){
    console.log("Overweight");
}
else if(bmi>=30){
    console.log("Obesity");

}


