/* spread operator for concat */

let arr1 = [1, 2, 3, 4];
let arr2= [5, 6] ;

arr1 = [...arr1, ...arr2];
console.log(arr1)


/* spread operator with splice method */

let arr3 = ['a' , 'b', 'c'];
let arr4 = [ ...arr3];

arr4.push('d')
console.log(arr4)

/* spread operator with Math function */

let arr5 = [1, 2, 3, 4, -1];
console.log(Math.min(...arr5));

/* spread operator with objects */

const user1 = {
	name :'Tim',
	age: 12,
};

const user2 = {
	name :'Kim',
	location: 'Pleasanton',
};

const combo = {...user1, ...user2};
console.log(combo);

