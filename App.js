import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀!");

//JSX (transpiled before it reaches the JS) -PARCEL -Babel(transpiler/JS compiler)

//JSX ==>Babel transpiles it into React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
const jsxHeading =<h1 className="head">Namaste React using JSX</h1>


//React Element
const title = (
    <h1 className="head" tabIndex="5">Namaste React using JSX from React Element</h1>
);

//React Component
const Title = ()=>(
    <h1 className="head" tabIndex="5">Namaste React using JSX from React Component</h1>
);

//React Functional Component
const HeadingComponent = ()=>(<div id="container">
    {/* component inside component : component composition */}
    <Title/> 
    {Title()}
    {/* React Element */}
    {title} 
    <h1>Namaste React Functional Component</h1>
</div>) 

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
//root.render(jsxHeading);

root.render(<HeadingComponent/>);

