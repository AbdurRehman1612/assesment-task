import React from 'react';
import staticImage from './Screenshot.png';


const ImageGrid = ({ cells, selectedCell }) => {
  return (
    <div className="image-grid-container">
      <div className="grid-overlay">
        {cells.map((cell,index) => {
          const row = Math.floor(index / 3); 
          const col = index % 3; 
          console.log('col,row', col,row)
          return(
          <div
            key={cell.id}
            className={`grid-cell cell-${cell.id} ${selectedCell === cell.id ? 'highlight' : ''}`}
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "white",
              backgroundImage: cell.visible ? `url(${staticImage})` : 'none',
              backgroundColor: !cell.visible && 'white',
              backgroundSize: '600px 400px',            
              backgroundPosition: `${-col * 200}px ${-row * 200}px`,        
            }}
          >
            {cell.visible && cell.name}
          </div>
        )})}
      </div>
    </div>
  );
};



export default ImageGrid;
