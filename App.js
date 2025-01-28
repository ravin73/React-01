import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading = React.createElement("div", { id: "parent" }, [
//     React.createElement("div",
//         { id: 'child1' }, [
//             React.createElement("h1",{},"parent1 property"),
//             React.createElement("p",{},"child1 property"),
//         ]),
//     React.createElement("div",
//         { id: 'child2' }, [
//             React.createElement("h1", {},"parent2 property"),
//             React.createElement("p", {},"child2 property"),
//         ])
// ]
// )

const jsxHeading=<h1>React Componenet</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);