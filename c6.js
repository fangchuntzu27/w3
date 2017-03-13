class Guitar {
	constructor (brand, wood, shape){
		this.brand = brand;
    this.wood = wood;
    this.shape = shape;
	}
	printInfo(){
		console.log(`Made By ${this.brand}, using ${this.wood} wood, with ${this.shape} size.`);
	}
  playMusic(){
    console.log('Dm G Cmaj7 A7...');
  }
}

var GSMiniEKoa = new Person('Taylor','Hawaiian Koa','GS Mini');
GSMiniEKoa.printInfo();

var TogoS = new Person('Veelah','Solid Spruce','Travel');
TogoS.playMusic();
