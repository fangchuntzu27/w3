class Dog {
  constructor(name) {
    this.name = name;
  }
  Sleep(){
    console.log('is sleeping ...zzZ, zzZ...');
  }
  Run(){
    console.log('sususususususu...');
  }
}

class ShibaInu extends Dog{
  constructor(name, greeting) {
    super(name);
    this.greeting = greeting;
  }
  Run(){
    super.Run();
    console.log('need food & sleep');
  }
}

var dog = new Dog('BooBoo');
dog.Run();

var shibaInu = new ShibaInu('BiBi','Hi there !');
shibaInu.Run();
