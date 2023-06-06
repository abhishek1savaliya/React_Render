import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log('Child A Render')
    return (
        <>
            <div>Child A</div>
            <div><ChildB /></div>
        </>
    )
}

export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log('Child B Render')
    return (
        <>
            <div>Child B</div>
            <div><ChildC /></div>
        </>
    )
}

export const ChildC = () => {
    const count = useContext(CountContext)
    console.log('Child C Render')
    return (
        <>
            <div>Child C count = {count}</div>
        </>
    )
}
