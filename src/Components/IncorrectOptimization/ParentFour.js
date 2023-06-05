import React, { useState } from 'react';
import { MemorizedChildFive } from './ChildFive';

const ParentFour = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Krishna');
    
    const person = {
        fname  : 'Jagannath',
        lname : 'Mohanam'
    } 

    console.log('ParentFour Render');

    const handleClick = ()=>{ }

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Radha')}>Change Name</button>
            <div>
                <MemorizedChildFive name={name} handleClick={handleClick} />
                {/* <ChildThree name={name}>
                    <strong>Hello</strong></ChildThree> */}
            </div>
        </div>
    );
}

export default ParentFour
