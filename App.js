// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);
// root.render(heading);


/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) ==> HTML(Browser Understands)
 * 
 */

const parent = React.createElement(
    "div",{id:"parent"},
    React.createElement(
        "div",{id:"child"},
        [React.createElement(
            "h1",{id:"head"},"I'm an h1 tag"
        ),React.createElement(
            "h2",{id:"head"},"I'm an h2 tag"
        )]
    )
)
console.log(parent);

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
