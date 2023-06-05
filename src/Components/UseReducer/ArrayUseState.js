import React,{useState} from 'react'

const initState = ['Bruce','Abhishek']
function ArrayUseState() {
    const [person, setPerson] = useState(initState)
  const handleClick = ()=>{
    const nArray = [...initState]
    nArray.push("Krishna")
    nArray.push("Radha")
        setPerson(nArray)
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        person.map(p=><div key={p}>{p}</div>)
      }
    </div>
  )
}

export default ArrayUseState
