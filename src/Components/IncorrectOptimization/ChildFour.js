import React from 'react'

export const ChildFour = ({ name }) => {
    console.log('ChildFour render ')
    const date = new Date()
    return (
        <div>
            hello {name}. It is currently {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
        </div>
    )
}

export const MemorizeChildFour = React.memo(ChildFour)
