//Encapsulation: defining a property and method in a class
class Animal {
  constructor(name) {
    this.name = name;
  }

  //A public method to access the property, Abstraction because all animals eat
  eats() {
    return `${this.constructor.name} eats.`;
  }
}

class Arthropoda extends Animal {
  //Inheritance: child class Arthropoda inherits from parent class Animal
  constructor(name, isColdBlooded, hasBackbone) {
    super(name, "Arthropoda");
    this.isColdBlooded = isColdBlooded;
    this.hasBackbone = hasBackbone;
  }
  //Polymorphism: A specific method to class Arthropoda
  eats() {
    return `${this.constructor.name} eats plants, algae for the herbivores, other animals for the carnivores, and both plants and animals for the omnivores.`;
  }
}

class Fish extends Animal {
  //Inheritance: child class Fish inherits from parent class Animal
  constructor(name, isColdBlooded, hasBackbone) {
    super(name, "Fish");
    this.isColdBlooded = isColdBlooded;
    this.hasBackbone = hasBackbone;
  }
  //Polymorphism: A specific method to class Fish
  eats() {
    return `${this.constructor.name} eats plants, algae, insects, invertebrates and even other fishes depending on its species.`;
  }
}

class Amphibia extends Animal {
  //Inheritance: child class Amphibia inherits from parent class Animal
  constructor(name, isColdBlooded, hasBackbone) {
    super(name, "Amphibia");
    this.isColdBlooded = isColdBlooded;
    this.hasBackbone = hasBackbone;
  }
  //Polymorphism: A specific method to class Amphibia
  eats() {
    return `${this.constructor.name} eats invertebrates, such as insects and worms and some of the larger species eat small vertebrates like fish.`;
  }
}

class Reptiles extends Animal {
  //Inheritance: child class Reptiles inherits from parent class Animal
  constructor(name, isColdBlooded, hasBackbone) {
    super(name, "Reptile");
    this.isColdBlooded = isColdBlooded;
    this.hasBackbone = hasBackbone;
  }
  //Polymorphism: A specific method to class Reptiles
  eats() {
    return `${this.constructor.name} eat insects, small mammals, birds and even other reptiles`;
  }
}

class Aves extends Animal {
  //Inheritance: child class Aves inherits from parent class Animal
  constructor(name, isWarmBlooded, hasBackbone) {
    super(name, "Aves");
    this.isWarmBlooded = isWarmBlooded;
    this.hasBackbone = hasBackbone;
  }
  //Polymorphism: A specific method to class Aves
  eats() {
    return `${this.constructor.name} eat a variety of foods depending on its species which include insects, plants, seeds, fruits, other animals, and fish.`;
  }
}

class Mammals extends Animal {
  //Inheritance: child class Mammals inherits from parent class Animal
  constructor(name, isWarmBlooded, hasBackbone) {
    super(name, "Mammals");
    this.isWarmBlooded = isWarmBlooded;
    this.hasBackbone = hasBackbone;
  }
  //Polymorphism: A specific method to class Mammals
  eats() {
    return `${this.constructor.name} eat plant, animals or both plants and animals`;
  }
}

//Abstraction: an higher level representation of the animals
class AnimalKingdom {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }
}

//creating instances to run the methods
const myAnimalKingdom = new AnimalKingdom();

const myArthropoda = new Arthropoda("Buterfly", true, false);
const myFish = new Fish("Tilapia fish", true, true);
const myAmphibia = new Amphibia("Frog", true, true);
const myReptile = new Reptiles("Tortoise", true, true);
const myBird = new Aves("Eagle", true, true);
const myMammal = new Mammals("Cat", true, true);

console.log(myArthropoda.eats());
console.log(myArthropoda);

console.log(myFish.eats());
console.log(myFish);

console.log(myAmphibia.eats());
console.log(myAmphibia);

console.log(myReptile.eats());
console.log(myReptile);

console.log(myBird.eats());
console.log(myBird);

console.log(myMammal.eats());
console.log(myMammal);
