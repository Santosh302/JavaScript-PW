function sum(...numbers){
    let results = 0;
    for(let num of numbers){
        results += num
    }
    console.log("Sum:", results);
}
sum(1,2,3);
sum(1,2,3,4);
/* by using rest operator */

/* function add(...numbers){
    let sum=0;
    for(let num of numbers){
        sum += num;

    }
    console.log(sum);
}

add(1,2,3,4,5,5,66,7); */