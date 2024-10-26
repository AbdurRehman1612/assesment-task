import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const CellList = ({ cells, onHover, onClick }) => {
  return (
    <div className="cell-list">
      {cells.map((cell) => (
        <div
          key={cell.id}
          className="cell-item"
          onMouseEnter={() => onHover(cell.id)}
          onMouseLeave={() => onHover(null)}
          onClick={() => onClick(cell.id)}
        >
          <div>
          <span className={`eye-icon ${cell.visible ? 'visible' : 'hidden'}`}>
          {cell.visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
          <span style={{fontWeight: "bold"}}>{cell.name}</span>
        </div>
        </div>
      ))}
    </div>
  );
};

export default CellList;
