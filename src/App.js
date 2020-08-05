import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Panel from './components/Panel';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.scss';

function App() {
  const panels = useSelector(state => state.panels);
  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        {
          panels && panels.map((panel) => <Panel key={panel.id} {...panel} />)
        }
        <Panel />
      </DndProvider>
    </div>
  );
}

export default App;
