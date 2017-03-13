var guitars = ['Martin', 'Veelah', 'Lakewood'];

//ForEach
guitars.forEach(
  (brand) => console.log(`Famous Brand : ${brand}`);
);

//Map
var UpperCaseGuitars = guitars.map((brand)=>{return brand.toUpperCase();});

var intro = [
	{brand: 'Stiill', price:'100'},
	{brand: 'Still', price:'300'}
];

var prices = cars.map(car=>car.price);

//slice
var firstTwo = guitars.slice(0, 2);

//spread
function adder (base, ...array) {
	array.forEach(function (item) {
		console.log(base + item);
	});
}

adder(3, 5, 7, 1);
