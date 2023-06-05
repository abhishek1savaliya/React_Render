import React from 'react';

function ChildTwo() {
  console.log('ChildTwo Render');
  return (
    <div>
      Child Component ChildTwo
    </div>
  );
}

export default React.memo(ChildTwo);
