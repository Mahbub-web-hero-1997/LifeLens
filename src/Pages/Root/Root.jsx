import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <>
            <div className='container'>
            <Home />  
            <Outlet/>
           </div>
        </>
    );
};

export default Root;