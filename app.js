const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        {id:"child"},
        [
            React.createElement("h1",{key:'1'},"I am the h1 tag"),
            React.createElement("h2",{key:'2'},"I am the h2 tag")
        ]
    )
)

// const heading = React.createElement("h1", {}, "Hello there");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
