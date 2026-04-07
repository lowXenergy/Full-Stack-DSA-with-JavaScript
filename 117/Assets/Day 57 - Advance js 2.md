
#  Day 57 – Advance JS 2

---

## 1. `this` Keyword

**Definition:**  
`this` refers to the current object depending on *how* the function is called.

---

###  Example: Basic `this`

```js
const obj = {
  name: "Anubhav",
  show() {
    console.log(this.name);
  }
};

obj.show();
```

---

## 2. `call()`

Calls a function with a specific `this` value.

```js
function hello() {
  console.log(`Hello ${this.name}`);
}

hello.call({ name: "Anubhav" });
```

---

## 3. `apply()`

Same as `call()`, but arguments are passed as an array.

```js
function sum(a, b) {
  console.log(this.name, a + b);
}

sum.apply({ name: "Total:" }, [10, 20]);
```

---

## 4. `bind()`

Returns a new function with fixed `this`.

```js
function welcome() {
  console.log("Welcome", this.user);
}

const newFn = welcome.bind({ user: "Anubhav" });
newFn();
```

---

#  Deep Notes on `this` Behavior

---

##  1. Global Scope → `this = window`

```js
console.log(this);  // window (in browser)
```

---

##  2. Normal Function → `this = window` (non–strict mode)

```js
function show() {
  console.log(this);  
}
show();  // window
```

---

##  3. ES5 Function Inside Object → `this = object`

```js
const obj = {
  name: "Anubhav",
  getName: function () {
    console.log(this);  // obj
  }
};

obj.getName();
```

---

##  4. ES6 Arrow Function Inside Object → `this = window`

Arrow functions **do not bind** `this`.

```js
const obj = {
  name: "Anubhav",
  show: () => {
    console.log(this);  // window
  }
};

obj.show();
```

---

##  5. ES5 Function inside ES5 Function → `this = window`

Nested functions lose the outer `this`.

```js
const obj = {
  name: "Anubhav",
  outer() {
    function inner() {
      console.log(this);  // window
    }
    inner();
  }
};

obj.outer();
```

---

##  Solution → Use Arrow Function

---

##  6. Arrow Function inside ES5 Function → `this = object`

Arrow function copies `this` from outer function.

```js
const obj = {
  name: "Anubhav",
  outer() {
    const inner = () => {
      console.log(this);  // obj
    };
    inner();
  }
};

obj.outer();
```

