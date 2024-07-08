function add(...numbers){
    let sum=0;
    for(let num of numbers){
        sum += num;

    }
    console.log(sum);
}

add(1,2,3,4,5,5,66,7);