import './App.css';
import React from "react";
import Cities from './Cities';
import Footer from './Footer';
import Section from './Section';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
    <>
      <h2>CSS Layout Float</h2>
      <p>In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will stack on top of each other.</p>
      <p>Resize the browser window to see the responsive effect (you will learn more about this in our next chapter - HTML Responsive.)</p>
      <Cities/>
      <Section/>
      <Footer/>
    </>
);

export default App;
