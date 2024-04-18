import React from "react";
import reactDOM from "react-dom/client";

const App = () => {
    return (
        <div>
            <h1>Hello World from ReactJS</h1>
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);