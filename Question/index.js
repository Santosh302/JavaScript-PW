function sum(...number){
    let result=0;
    for(num of number){
        result +=num;
    }
    console.log(result);
}
sum(1,2);
sum(1,2,3);
