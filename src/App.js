import React from 'react';

import './sass/main.scss';
import {CatPage} from './components/content/CatPage';
import {Sidebar} from './components/sidebar/Sidebar';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Sidebar/>
          <Routes>
              <Route path="cats" element={<CatPage />} />
          </Routes>
       
    </div>
  );
}

export default App;
