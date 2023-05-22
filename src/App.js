import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/header';
import Footer from './components/Footer';
import Body from './components/Body';
import EmployeeSchedule from './components/Calendar';
import EmployeeData from './components/EmployeeData';
import EmployeeForm from './components/EmployeeForm';
import About from './components/About';
import Splash from './components/Splash';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(props) {
  const { isAuthenticated, isLoading } = props.auth0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Splash />;
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/addEmployee" element={<EmployeeForm />} />
          <Route exact path="/viewEmployees" element={<EmployeeData />} />
          <Route
            exact
            path="/displayCalendar"
            element={<EmployeeSchedule />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default withAuth0(App);
