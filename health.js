waist_size=60
buttex_size=90
health_paramtr=waist_size/buttex_size
gender="women"
console.log(health_paramtr);
// women health_paramtr<1----------normal
// women health_paramtr>1----------abnormal
// men health_paramtr<1.5----------normal
// men health_paramtr>1.5----------abnormal


if (gender=="women"){
    if(health_paramtr<=1){
    console.log("normal");
}
else if(health_paramtr>=1){
    console.log("abnormal");
}

}

else if(gender=="men"){
    if(health_paramtr<=1.5){
        console.log("normal");
    }
else if(health_paramtr=>1.5){
    console.log("abnormal");
}
}

