import React, { useState } from 'react';
import ChildTwo from './ChildTwo';

const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Krishna');
  console.log('ParentTwo Render');
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Radha')}>Change Name</button>
      <div>
        <ChildTwo name={name} />
      </div>
    </div>
  );
}

export default ParentTwo;
