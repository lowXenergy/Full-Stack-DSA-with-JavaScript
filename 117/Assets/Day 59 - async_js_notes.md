## Day 59 notes 

##  Synchronous JavaScript  
JavaScript is **single-threaded**, meaning it executes code **line-by-line**.  
The next line runs **only after** the previous line finishes.

### **Example**
```js
console.log("A");
console.log("B");
console.log("C");
```

### **Output**
```
A
B
C
```

Everything runs in order.

---

##  Asynchronous JavaScript  
Some tasks take time → JS offloads them to browser APIs  
(e.g., **setTimeout, fetch, DOM events**).  
These tasks **do not block** the main thread.

### **Example**
```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");
```

### **Output order**
```
A
C
B   ← (printed after 2 seconds)
```

---

##  Callbacks  
A **callback** is a function passed as an argument to another function.

### **Example**
```js
function greet(name, cb) {
  console.log("Hello " + name);
  cb();
}

greet("Anubhav", () => {
  console.log("Welcome!");
});
```

---

##  Callback Hell  
Callback hell happens when callbacks become **nested, messy, and unreadable**.

###  Example: Callback Hell (Pyramid of Doom)
```js
getData(function(data1) {
  getMoreData(data1, function(data2) {
    getMoreMoreData(data2, function(data3) {
      getFinalData(data3, function(result) {
        console.log(result);
      });
    });
  });
});
```

Looks like a **pyramid of doom**  
Too many nested levels → hard to read, debug, and maintain.

