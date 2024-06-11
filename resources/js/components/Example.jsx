import React from "react";
import ReactDOM from "react-dom/client";

function Example() {
    return (
        <div className="container bg-cyan-500">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}

export default Example;

if (document.getElementById("root")) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    );
}
