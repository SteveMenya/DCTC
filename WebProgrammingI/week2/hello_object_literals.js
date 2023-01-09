const me = {
    firstName : 'JJ',
    lastName: 'Okotcha',
    address: {
        number : 1300,
        street: 'Country Rd 420',
        state:'MN',
        city: 'Rosemount',
        zip: 55068
    }
};
console.log(me.firstName,)
console.log(me);

const sue = {
    firstName: 'Sue',
    lastName: 'Smith',
    age: 800
};

console.log(sue)
sue.age = 57;
console.log(sue.age);
sue.favouriteColor = 'blue';
console.log(sue);
const propertyToAccess = 'age';
console.log(sue[propertyToAccess], sue['favouriteColor']);
