import React from 'react';

function Delete({onDelete}) {
  return (
    <div className="delete">
s      <img src="delete.svg" alt="delete Icon" onClick={onDelete}></img>
    </div>
  );
}

export default Delete;
