/* Destructuring Assignment for Arrays */

let greetings = ['Hello', 'Hi'];
let  greet, morning = greetings;
console.log(greet);
console.log(morning);


/* swapping variables  */

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

/*  function values can be prased by destructring  */

function make(){
	return [ 'car' , 'bike'];
}

let [c, d] = make();
console.log(c);
console.log(d);


/*  ignoring some returned values  */

function f(){
	return [1, 2, 3];
}

let [e, , g] = f();
console.log(e);
console.log(g);


/*  object destructuring  */

const user = {
	id : 21,
	occupation : 'Engineer',
}

const{id, occupation} = user;
console.log(id);
console.log(occupation);


/*   without declaration  */
let h, j ;
({h, j } = {h:1, j:2});
console.log(h);
console.log(j);


/*   assigning new variables  */

const o = {i: 42, j: true};
const {i: age, j: bar} = o;

console.log(age); 
console.log(bar); 



