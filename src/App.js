import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Card from './Components/Card/Card';
import LoginCard from './Components/Login/LoginCard'

function App() {
  return (
      <div className="App">
      <Navbar/>
      <h1 className="heading_style">List of our University Recruiter..!🎓</h1>
      <Card
      imgsrc="https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png"
      sname=" Tata Motor"
      title="This is our recruiter"
      link="https://www.tata.com/"
       />,
       <Card
       imgsrc="https://mocdn.gs1.org/sites/default/files/motherson_logo.jpg"
       sname=" MotherSon"
       title="This is our recruiter"
       link="https://www.motherson.com/"
       />
       
      

    </div>
   
  );
}

export default App;
