import './App.css';
import React from 'react';
import Populate from './components/populateFolder/populate';
import Employee from './components/populateFolder/Employee';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Populate />} > </Route>
            <Route path='insert' element={<Employee />} > </Route>
            {/* <Route path='delete' element={<Employee />} > </Route> */}
            <Route path='update/:id' element={<Employee />} > </Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </Provider>

  );
}

export default App;
