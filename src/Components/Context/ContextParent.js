import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

const ContextParent = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <MemoizedChildA value={count}>
                <MemoizedChildA />
            </MemoizedChildA>

        </div>
    )
}

export default ContextParent
