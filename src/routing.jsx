import React from 'react';
import {Routes, Route,BrowserRouter } from 'react-router-dom'; 
import Hadasah from './components/Hadasah';
import Dvora from './components/Dvora';
import Esti from './components/Esti';
import Miri from './components/Miri';
import Sari from './components/Sari';
import Shevi from './components/Shevi';
import Shira from './components/Shira';
import Talya from './components/Talya';
import Yael from './components/Yael';
import Avia from './components/Avia';

const Routing = () => {
    return (
        <Routes>
            <Route  path="/Hadasah" element={<Hadasah />} />
            <Route path='/Dvora' element={<Dvora/>}/>
            <Route path='/Esti' element={<Esti/>}/>
            <Route path='/Miri' element={<Miri/>}/>
            <Route path='/Sari' element={<Sari/>}/>
            <Route path='/Shevi' element={<Shevi/>}/>
            <Route path='/Shira' element={<Shira/>}/>
            <Route path='/Talya' element={<Talya/>}/>
            <Route path='/Yael' element={<Yael/>}/>
            <Route path='/Avia' element={<Avia/>}/>

        </Routes>
    );
};

export default Routing;
