
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaLogin from '../pages/TelaLogin';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaLogin />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
