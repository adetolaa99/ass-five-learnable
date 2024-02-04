//Encapsulation
class Animal {
  constructor(name, classification) {
    this.name = name;
    this.classification = classification;
  }

  //A method all animals perform
  eat() {
    console.log(`${this.name} eats`);
  }
}

class Arthropoda extends Animal { //Inheritance from Animal
  constructor(name, isColdBlooded) {
    super(name, "Arthropoda");
    this.isColdBlooded = isColdBlooded;
    this.hasBackbone = false;
  }
  //A specific method to class Arthropoda
  eats() {
    console.log(`${this.name} eats `);
  }
}

class Fish extends Animal { //Inheritance from Animal
  constructor(name, isColdBlooded) {
    super(name, "Fish");
    this.isColdBlooded = isColdBlooded;
    this.hasBackbone = true;
  }
  //A specific method to class Fish
  eats() {
    console.log(`${this.name} eats `);
  }
}

class Amphibia extends Animal { //Inheritance from Animal
  constructor(name, isColdBlooded) {
    super(name, "Amphibia");
    this.isColdBlooded = isColdBlooded;
    this.hasBackbone = true;
  }
  //A specific method to class Amphibia
  eats() {
    console.log(`${this.name} eats `);
  }
}

class Reptile extends Animal { //Inheritance from Animal
  constructor(name, isColdBlooded) {
    super(name, "Reptile");
    this.isColdBlooded = isColdBlooded;
    this.hasBackbone = true;
  }
  //A specific method to class Reptile
  eats() {
    console.log(`${this.name} eats `);
  }
}

class Aves extends Animal { //Inheritance from Animal
  constructor(name, isWarmBlooded) {
    super(name, "Aves");
    this.isWarmBlooded = isWarmBlooded;
    this.hasBackbone = true;
  }
  //A specific method to class Aves
  eats() {
    console.log(`${this.name} eats `);
  }
}

class Mammals extends Animal { //Inheritance from Animal
  constructor(name, isWarmBlooded) {
    super(name, "Mammals");
    this.isWarmBlooded = isWarmBlooded;
    this.hasBackbone = true;
  }
  //A specific method to class Mammals
  eats() {
    console.log(`${this.name} eats `);
  }
}

//Abstraction
class AnimalKingdom {
  constructor() {
    this.animals = [];
  }

  addAnAnimal(animal) {
    this.animals.push(animal);
  }
}
