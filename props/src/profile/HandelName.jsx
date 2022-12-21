import React from 'react'

const HandelName= ({HandelEvent,FirstName}) => {
  return (
    <div>
      <button onClick={()=> HandelEvent (FirstName)}  >click</button> 
         </div>
  )
}

export default HandelName
