/* Array literals  adding and removing from begining and from end*/
const arr1 = [1, 2, 3, 4];

arr1.push("d");
console.log(arr1);

arr1.pop();
console.log(arr1);


arr1.unshift("a");
console.log(arr1);

arr1.shift()
console.log(arr1);


/* Adding multiple elements at the end */
const arr2 = [1, 2, 3];
arr2.concat(4, 5, 6);
console.log(arr2);


/* Getting a subarray */
/* first argument is the start and second is th eend  */
const arr3 = [ 1, 2, 3, 4, 5, 6];
arr3.slice(2);
console.log(arr3);
arr3.slice( 1, 3 );
console.log(arr3);

/* Adding or removing elements from any position */
/* first argument is the index to modify, second the no of elements to modify, third/ remaining is the elements you want to add */
const arr4 = [1, 5, 6];
arr4.splice(1, 0, 2, 9);
console.log(arr4);


/* Cutting and replacing within an array */
const arr5 = [1, 2, 5, 9, 10];
arr5.copyWithin(1,2);
console.log(arr5);


/* Filling an array with a specific value */
const arr6 = new Array(2).fill("a");
console.log(arr6);


/* Reverse an array */
const arr7 = [1, 2, 3, 4];
arr7.reverse();
console.log(arr7);

/*Sort an array */
const arr8 = [{name: "James"}, {name : "Aron"}, {name: "Cathy"}];
arr8.sort((a , b) => a.name < b.name);
console.log(arr8);


