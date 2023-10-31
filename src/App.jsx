import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './hooks/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css' //Iconos de boostrap


import MainNavbar from './components/MainNavBar';
import HomeView from './view/HomeView';
import AboutView from './view/AboutView';
import ServicesView from './view/ServicesView';
import StoreView from './view/StoreView';
import LoginView from './view/LoginView';
import CheckedView from './view/CheckedView';


import './App.css';


function App() {
  const {isLoggedIn} = useAuth();
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<HomeView />} /> {/*El va ir al Home cuando ponen la URL*/}
          <Route path="/about" element={<AboutView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/store" element={<StoreView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/checked" element={isLoggedIn? <CheckedView />:<Navigate to= "/"/>}/>
          {/* Lo que hace es que pregunta si está logueado lo lleve a la ruta de checked, sino, lo lleve al home*/}
          <Route path="*" element={<Navigate replace to="/" />} />
          {/* {Este se aplicar para que cuando ponga algo en el navegador siempre lo lleve al Home} */}
        </Routes>
      </Router>
      <h1>Mi super Test Cypress</h1>

    </div>
  );
}

export default App;
