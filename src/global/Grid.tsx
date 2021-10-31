import React from 'react';

const Grid = ({ children, className }) => (
<div className={`grid maw960 m0-auto pl15 pr15 w100% ${ className || '' }`}>
  { children }
</div>
)

export default Grid;