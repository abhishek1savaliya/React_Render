import React, { useState } from 'react';
import ChildThree from './ChildThree';
import { MemorizeChildFour } from './ChildFour';

const ParentThree = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Krishna');
    console.log('ParentThree Render');

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Radha')}>Change Name</button>
            <div>
                <MemorizeChildFour name={name} />
                {/* <ChildThree name={name}>
                    <strong>Hello</strong></ChildThree> */}
            </div>
        </div>
    );
}

export default ParentThree
