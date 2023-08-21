import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute';
import RegistrationForm from './pages/RegistrationForm';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
             <Route exact path='/' element={<HomePage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationForm />}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;



// import './App.css';
// import React, {Fragment} from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Home from './components/pages/Home';
// import Register from './components/auth/Register'
// import Login from './components/auth/Login';
// import PrivateRoute from './components/routing/PrivateRoute';

// const App = () => {
//   return (
//     <Router>
//       <Fragment>
//         <Navbar/>
//         <Routes>
//           <Route exact path='/' element={<PrivateRoute/>}>
//             <Route exact path='/' element={<Home/>}/>
//           </Route>
//           <Route exact path='/register' element={<Register/>}/>
//           <Route exact path='/login' element={<Login/>}/>
//         </Routes>
//       </Fragment>
//     </Router>
    
//   );
// }


