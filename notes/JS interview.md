## 1. Promise & Callback Functions

### Callback Functions

- **What**: A callback is a function passed into another function as an argument.
- **How it works**: The outer function calls it when an asynchronous task completes.
- **Why**: To handle async behavior (e.g., I/O, timers).
- **Example**:

  ```js
  function loadData(callback) {
    setTimeout(() => {
      const data = { id: 1, name: "Alice" };
      callback(data);
    }, 1000);
  }

  loadData((user) => {
    console.log("User loaded:", user);
  });
  ```

  - `loadData` receives a function and calls it after 1 second with data.

### Promises

- **What**: An object representing eventual completion (or failure) of an async operation.
- **How**: Provides `.then()` and `.catch()` methods to handle success/failure.
- **Why**: Cleaner, avoids "callback hell", easier chaining and error handling.
- **Example**:

  ```js
  const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve({ id: 1, name: "Alice" });
      else reject(new Error("Failed"));
    }, 1000);
  });

  fetchUser
    .then((user) => console.log("User:", user))
    .catch((err) => console.error(err));
  ```

---

## 2. Array Methods \[all]

Key built-in array methods:

| Method              | Use                                                |
| ------------------- | -------------------------------------------------- |
| `.forEach(fn)`      | Run a function for each item.                      |
| `.map(fn)`          | Return a new array by transforming each element.   |
| `.filter(fn)`       | Return a new array with elements passing the test. |
| `.reduce(fn, init)` | Accumulate values into a single result.            |
| `.find(fn)`         | Return the first element matching the test.        |
| `.some(fn)`         | Returns `true` if at least one passes.             |
| `.every(fn)`        | Returns `true` if all pass.                        |
| `.includes(val)`    | Check if array contains a value.                   |
| `.flat(depth)`      | Flatten nested arrays.                             |
| `.sort(fn)`         | Sort array in-place. Example transforming:         |

```js
const items = [1, 2, 3, 4];
const doubled = items.map((x) => x * 2); // [2,4,6,8]
```

---

## 3. async‑await & Asynchronous

### async/await

- **What**: Syntax built on promises for writing async code like sync.
- **How**: `async` marks a function that returns a promise. `await` pauses execution until the promise resolves.
- **Why**: Cleaner syntax, better error handling via `try/catch`.
- **Example**:

  ```js
  async function fetchData() {
    try {
      const user = await fetchUser; // promise from earlier
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  }
  fetchData();
  ```

### Asynchronous Tasks

- **Types**: Timers (`setTimeout`, `setInterval`), network calls (`fetch`), file I/O, event listeners.
- **Why**: Prevents blocking main thread, keeps UI responsive.

---

## 4. DOM (Document Object Model)

- **What**: Representation of HTML as JS objects.
- **How**: Use methods to find and manipulate elements:

  ```js
  const btn = document.querySelector("#myBtn");
  btn.addEventListener("click", () => {
    document.body.style.background = "lightblue";
  });
  ```

- **Why**: Dynamically update content, styles, handle events.
- **Common Qs**: `getElementById`, `querySelector`, event binding, event delegation, innerHTML, textContent.

---

## 5. Lifting State Up

- **What**: In React, moving shared component state to their closest common parent.
- **How**: Parent stores the state, passes data and setter functions to children via props.
- **Why**: Ensures a single source of truth; siblings can sync.
- **Example**:

  ```jsx
  function Parent() {
    const [value, setValue] = useState("");
    return (
      <>
        <ChildA value={value} onChange={setValue} />
        <ChildB value={value} />
      </>
    );
  }
  ```

---

## 6. `this` Keyword

- **What**: References context of function execution.
- **How it works**:

  - Global functions: `this` ➝ `window` (non-strict)
  - Method call: `obj.method()`: `this` ➝ `obj`
  - Constructor: `new Person()`: `this` ➝ new instance
  - Arrow function: Inherits `this` from surrounding scope.

- **Example**:

  ```js
  const obj = {
    name: "Alice",
    greet: function () {
      console.log(this.name); // "Alice"
    },
  };
  obj.greet();
  ```

---

## 7. Ajax in JavaScript

- **What**: Asynchronous HTTP requests without refreshing page—XHR or Fetch.
- **How**:

  ```js
  fetch("https://api.example.com/data")
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  ```

- **Why**: Dynamically load data (e.g. search results, user info) without full page reload.

---

## 8. Prototype Inheritance

- **What**: JS objects inherit properties from their prototype chain.
- **How**:

  ```js
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function () {
    return `Hi, I'm ${this.name}`;
  };
  const alice = new Person("Alice");
  console.log(alice.greet()); // inherits greet()
  ```

- **Why**: Share methods among instances, memory efficient, polymorphism.

---

## 9. Strict Mode

- **What**: `"use strict";` enables stricter parsing & error checking.
- **Effects**:

  - Prevent accidental globals (`x=5` throws).
  - Disallows duplicate param names.
  - `this` in functions is `undefined` instead of `window`.

- **Why**: Catch bugs early, safer JS.

---

## 10. React Hooks

- **What**: Functions like `useState`, `useEffect`, `useRef`, `useContext`, etc.
- **How**: Used only in functional components to add state and lifecycle features.
- **Examples**:

  ```jsx
  function Counter() {
    const [count, setCount] = useState(0); // state
    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]); // side effect
    return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
  }
  ```

- **Why**: Clearer code, reuse logic via custom hooks, less boilerplate than class components.

---

### Summary on Usage

- **Callbacks** → basic async handling.
- **Promises / async‑await** → cleaner async, better error handling.
- **Array methods** → work with structured data elegantly.
- **DOM / Ajax** → dynamic UIs, data loading.
- **React concepts (state lifting, hooks, `this`)** → fundamental for React dev.
- **Prototypes & strict mode** → foundational JS for safe, efficient code.

---
