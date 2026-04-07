#  Day 58 – Advance JS 3



# 1. Class Expression

JavaScript allows classes to be created as **expressions**, just like function expressions.

### Anonymous Class Expression
```js
const Person = class {
  constructor(name) {
    this.name = name;
  }
};

const p = new Person("Anubhav");
console.log(p.name);
```

### Named Class Expression
```js
const Car = class CarClass {
  constructor(model) {
    this.model = model;
  }
};

const c = new Car("BMW");
console.log(c.model);
```

---

## 2. Hoisting in Classes

Classes are **not hoisted**. You cannot use a class before declaring it.

```js
const obj = new Student();  //  ReferenceError

class Student {
  constructor() {}
}
```

---

## 3. Inheritance (`extends`)

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();
d.bark();
```

---

## 4. Getter & Setter

```js
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    this._name = value;
  }
}

const u = new User("anubhav");
console.log(u.name);
u.name = "Jha";
console.log(u.name);
```

---

## 5. Constructor Functions (Before ES6)

```js
function Animal() {
  this.name = "harsh";
}

new Animal();
```

### Adding Methods Using Prototype
```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

const cat = new Animal("Kitty");
cat.speak();
```
