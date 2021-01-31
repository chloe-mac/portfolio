import './App.css';
import React from 'react';
import { Container, Row, Col, Jumbotron} from 'reactstrap';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import NavBar from '../components/NavBar/NavBar';
import Content from '../components/Content/Content';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
    
      <NavBar/>
      <Content/>
      
    </div>
  );
}

export default App;
