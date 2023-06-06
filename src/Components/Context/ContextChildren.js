import React from 'react'

export const ChildA = () => {
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

    console.log('Child C Render')
    return (
        <>
            <div>Child C </div>
        </>
    )
}
