# Re-Rendering and Event Handling

## ReactJS re-rendering
Vanilla JS renders entirely
```javascript
const rootElement = document.getElementById("root");
function refreshRandomButton() {
    rootElement.innerHTML = "";
    const number = Math.floor(Math.random() * (10 - 1) + 1);
    const innerElement = document.createElement("button");
    innerElement.innerHTML = number;
    rootElement.appendChild(innerElement);
}

setInterval(refreshRandomButton, 1000);
```
React re-renders only differences
```javascript
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function refreshRandomButton() {
    const number = Math.floor(Math.random() * (10 - 1) + 1);
    const innerElement = <button>{number}</button>;
    root.render(innerElement);
}

setInterval(refreshRandomButton, 1000);
```

## Handling Events
Vanilla JS can add event handlers as attributes
```html
<button id="button" onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>
<p id="demo"></p>
```
or with Element.addEventListener(f)
```javascript
const button = document.getElementById("button");
button.addEventListener("click", () => document.getElementById('demo').innerHTML=Date());
```
Similar, add with attributes, except in camel case
```javascript
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const handleClick = () => alert("pressed");
const innerElement = <button 
    onClick={handleClick}
>Press This</button>

root.render(innerElement);
```
---
Simple Search UI with react (emulate setState with simple JS)
<details>
<summary>full code</summary>

```javascript
// set root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// emulate state
const state = { keyword: "", typing: false, result: "" };

// emulate React App
const App = () => {
    function handleChange(event) {
        setState({ 
            keyword: event.target.value,
            typing: true,
        });

    }

    function handleClick() {
        setState({
            typing: false,
            result: `We'll find results of ${state.keyword}.`
        });
    }

    return (
        <> 
            <input onChange={handleChange}/>
            <button onClick={handleClick}>search</button>
            <p>
                {state.typing ? `Looking for ${state.keyword}...` : state.result}
            </p>
        </>
    );
}

// emulate state
function setState(newState){
    Object.assign(state, newState);
    render();
}

// render function
function render(){
    root.render(<App/>);
}

// render for the first time
render();
```

</details>
