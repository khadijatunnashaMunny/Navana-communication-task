import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';

function MainRouter () {
        return (
            <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout1 />} />
                    <Route path="/layout2" element={<Layout2 />} />
                    <Route path="/layout3" element={<Layout3 />} />

                </Routes>
            </Router>
            </>
        );
    
}

export default MainRouter;