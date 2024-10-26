import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import CellList from './CellList';
import './App.css';

const initialCells = [
  { id: 1, name: 'Cell 1', visible: true },
  { id: 2, name: 'Cell 2', visible: true },
  { id: 3, name: 'Cell 3', visible: true },
  { id: 4, name: 'Cell 4', visible: true },
  { id: 5, name: 'Cell 5', visible: true },
  { id: 6, name: 'Cell 6', visible: true },
];

function App() {
  const [cells, setCells] = useState(initialCells);
  const [hoveredCell, setHoveredCell] = useState(null);

  const toggleCellVisibility = (cellId) => {
    console.log('cellId', cellId)
    setCells((prevCells) =>
      prevCells.map((cell) =>
        cell.id === cellId ? { ...cell, visible: !cell.visible } : cell
      )
    );
  };

  console.log('cells', cells)

  return (
    <div className="app-wrapper">
    <div className="app-container">
      <CellList
        cells={cells}
        onHover={(id) => setHoveredCell(id)}
        onClick={toggleCellVisibility}
      />
      <ImageGrid cells={cells} selectedCell={hoveredCell} />
    </div>
    </div>
  );
}

export default App;