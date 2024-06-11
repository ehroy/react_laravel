import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
    return (
        <div className="container mx-auto">
            <button className="bg-cyan-500 hover:bg-cyan-600">Subscribe</button>
        </div>
    );
}

const continer = document.getElementById("root");
const root = ReactDOM.createRoot(continer);
root.render(<App />);
