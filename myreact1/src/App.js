import "./App.css";
import React from "react";
import Bhuvan from "./Bhuvan";
import showMessages from "./util";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React!!!</h1>
//       <Bhuvan />
//     </div>
//   );
// }

// class App extends React.Component{
//   render(){
//     return (
//       <div className="App">
//         <h1>Hello React!!!</h1>
//         <Bhuvan/>
//       </div>
//     );
//   }
// }

const App = () => (
  showMessages('testing the app'),
  <div className="App">
    <h1>Hello React!!!</h1>
    <Bhuvan />
  </div>
);

export default App;
