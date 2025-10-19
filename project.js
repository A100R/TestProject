/*коммент

const user = {
    name: 'John',
    surname: 'Mora',
    age: 17,
}
console.log(`${user.name} - ${user.surname} - ${user.age}`);



const arr1 = ['пн','вт','ср','чт','пт','сб','вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i];
    let value = arr2[i];
    obj[key] = value;
    }
} else {
    console.log('Массивы не равны');
}
console.log(obj);
