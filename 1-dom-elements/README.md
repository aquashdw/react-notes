# React Basic DOM Elements
ReactJS with static html, using both 17 (`ReactDOM.render()`) and 18 (`ReactDOM.createRoot().render()`). All code below should be placed between: 
```javascript
const rootElement = document.getElementById("root");

// Place Code Fragments here

// for react 17
ReactDOM.render(innerElement, rootElement);

// for react 18
const root = ReactDOM.createRoot(rootElement);
root.render(innerElement);
```

## Vanilla React
```javascript
const innerElement = React.createElement(
    "h1", {
        className: "title",
        children: ["Hello, world!", "It's me, Mario!"],
    },
);
```

## With Babel
```javascript
const titleClassName = "title";
const innerText = "Hello, World!"
const props = {
    className: titleClassName,
    children: innerText
}
const innerElement = <h1 {...props} />
```

## React.Fragment + Babel
```javascript
const innerElement = <React.Fragment children={[
    <h1>Hi</h1>,
    <h3>Bye</h3>,
    <h5>Children</h5>,
]}/>
```

## React.Fragment Empty Tag
```javascript
const innerElement = (
    <>
        <h1>Hi</h1>
        <h3>Bye</h3>
        <h5>Children</h5>
    </>
);
```

## functions to return elements
```javascript
const printElement = () => (
    <>
        <h1>Hi</h1>
        <h3>Bye</h3>
    </>
);
const innerElement = <>
    {printElement()}
    {printElement()}
    {printElement()}
</>
```

### with parameters
```javascript
const printElement = (title, description) => (
    <>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </>
)
const innerElement = <>
    {printElement("Good", "good")}
    {printElement("Bad", "bad")}
    {printElement("so so", "so so")}
</>
```

## create function variable as new html element
```javascript
const Paint = ({ title, description }) => (
    <>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </>
);

const innerElement = (
    <>
        <Paint title="Good" description="good" />
        <Paint title="Bad" description="bad" />
        <Paint title="So so" description="so so" />
    </>
);
```

### parameter for function is extension of props
```javascript
const Paint = ({ title, description, children }) => (
    <>
        <h1>{title}</h1>
        <h3>{description}</h3>
        {children}
    </>
);

const innerElement = (
    <>
        <Paint title="Good" description="good">
            <p>Children can be given</p>
        </Paint>
        <Paint title="Bad" description="bad">
            <p>as HTML children</p>
        </Paint>
        <Paint title="So so" description="so so" />
    </>
);
```

## JS + JSX
```javascript
const Text = ({ text }) => {
    if (text.charAt(0) === text.charAt(0).toUpperCase()) {
        // JS + JSX + JS + JSX
        return <h1>{text}</h1>;
    } else {
        return <h3>{text}</h3>;
    }
};

const innerElement = (
    <>
        <Text text="Text" />
        <Text text="text" />
    </>
);
```
### JS + JSX with map
```javascript
function Number({ number }) {
    return number % 2 === 0 ? <h1>{number}</h1> : <h3>{number}</h3>;
}

const innerElement = (
    <>
        {[1,2,3,4,5,6,7,8,9,10].map((number) => (
            <Number number={number}/>
        ))}
    </>
);
```