let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'];
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Apple");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push("Fig");
console.log(fruits);

fruits.splice(2, 0, "orange");
console.log(fruits);

fruits.splice(2, 2, "orange");
console.log(fruits);

fruits = fruits.slice(2, 5);
console.log(fruits);


