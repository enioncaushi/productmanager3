import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import UpdateProduct from './components/UpdateProduct';
import './App.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />} path="/products/" />
                    <Route element={<Detail />} path="/products/:id" />
                    <Route element={<UpdateProduct/>} path="/products/edit/:id"/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
