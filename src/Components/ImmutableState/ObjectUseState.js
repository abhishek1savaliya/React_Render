import React, { useState } from 'react'

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}

function ObjectUseState() {

    const [person, setPerson] = useState(initialState)

    const chnageName = () => {
        // console.log(person.fname)
        // person.fname = 'Krishna'
        // console.log(person.fname)

        //  person.lname = 'Kent'

        // setPerson(person)

        const newPerson = {}
        console.log(newPerson)
        console.log(newPerson.fname)


        newPerson.fname = 'Krishna'
        console.log(newPerson.fname)
        newPerson.lname = 'Radha'

        setPerson(newPerson)



    }
    return (
        <div>
            <button onClick={chnageName}>{person.fname} {person.lname}</button>
        </div>
    )
}

export default ObjectUseState
