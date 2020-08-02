import React from 'react';
import './App.css';
import Card from './components/Card';
import Panel from './components/Panel';

function App() {
  return (
    <div className="App">
      <Panel items={[{id: 1, text: 'Подготовиться к prototype'}, {id: 2, text: 'Почитать статью про useEffect()'}, {id: 3, text: 'Выучить английский'}]}/>
    </div>
  );
}

export default App;
