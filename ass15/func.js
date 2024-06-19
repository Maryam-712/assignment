function table(num){
    for (i = 1; i <= 10; i++){
        let res = num * i;
        console.log(num + " x " + i + " = " + res);
    }
}

num = prompt("Enter table number");
table(num);