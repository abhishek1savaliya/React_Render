import React, { useState, useMemo, useCallback } from 'react';
import { MemorizedChildFive } from './ChildFive';

const ParentFour = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Krishna');

    const person = {
        fname: 'Jagannath',
        lname: 'Mohanam'
    }
    // const memorizePerson = useMemo(()=>person,[])


    console.log('ParentFour Render');

    const handleClick = () => { }
    const memorizeHandleClick = useCallback(handleClick, [])

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Radha')}>Change Name</button>
            <div>
                {/* <MemorizedChildFive name={name} person={memorizePerson} /> */}
                <MemorizedChildFive name={name} handleClick={memorizeHandleClick} />
                {/* <ChildThree name={name}>
                    <strong>Hello</strong></ChildThree> */}
            </div>
        </div>
    );
}

export default ParentFour
