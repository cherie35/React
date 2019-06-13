import React from 'react';
import Me from './pages/Me.js';
import Main from './pages/Main.js';
import Projects from './pages/Projects.js';
import './App.css';

class App extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }
  render(){  
  return (
    <div classname="App">
  <Main/>
  <Projects/>
  <Me/>
</div>
 );
}
}
export default App;
