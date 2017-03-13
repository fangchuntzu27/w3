let person = {
	greetFunc: function() {
		console.log(this);
	},

	greetArrow: ()=> {
		console.log(this);
	},

	greetFuncArrow: function() {
		(() => console.log(this))();
	}

};

person.greetFunc();
person.greetArrow();
person.greetFuncArrow();
