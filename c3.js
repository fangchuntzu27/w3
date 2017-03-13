// Object Literals
let name, phone;
let person = {
	name: name,
	phone: phone,
	intro: function() {
		console.log(`Hi, I am ${this.name} and phone number goes ${this.phone}`);
	}
}

person.name = "Adam levine";
person.phone = "0912-220-000";
person.intro();
