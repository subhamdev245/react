const root = ReactDOM.createRoot(document.querySelector(".root"))

const h1 = React.createElement("h1",{},
        React.createElement("div",{className : "Subham"},
        React.createElement("span",{},"Subham 🚀")))

root.render(h1)

console.log(
    h1
);