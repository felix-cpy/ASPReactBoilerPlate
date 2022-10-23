import React from 'react';
import { Route, Routes,  BrowserRouter} from 'react-router-dom';

const App = () => {
    return (
        <div>
            this is a react test element
                <Routes>
                    <Route path='/' element={<div>this is home stuff</div>} />
                    <Route path='/test' element={<div>This is test stuff</div> } />
                </Routes>
                
        </div>)

}

export default App;