import React from 'react';
import './App.scss';
import Panel from './components/Panel';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const { panels } = useSelector(state => state)
  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        {
          panels && panels.map(panel => <Panel key={panel.id} {...panel} />)
        }
        <Panel />
      </DndProvider>
    </div>
  );
}

export default App;
