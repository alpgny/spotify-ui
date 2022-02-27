import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import './App.scss';

const App= () => {
  return (
    <div className='outerWrap'>
    <div className="App">
    <Nav />
    <Main />
    </div>
    <div className='musicControls' >Controls
    <svg  width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.9562 19L0.0439453 0V38L32.9562 19Z" fill="black"/>
</svg>

    
    </div>
    </div>
  );
}

export default App;
