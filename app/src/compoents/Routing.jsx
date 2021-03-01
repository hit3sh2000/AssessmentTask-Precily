import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./index";

function Routing() {
    return (
        <Router>
            <div >
                <Route path="/"  component={Home} />
            </div>
        </Router>
    )
}

export default Routing
