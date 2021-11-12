import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {observer} from "mobx-react";
import {Route, Routes} from "react-router";
import Home from "./Home";

function App() {

    return <Router>
        123
        <Routes>
            <Route index element={<Home/>} />
        </Routes>
    </Router>
}

export default observer(App)
