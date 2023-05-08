import React from 'react'

type Greetprops = {
   name:string
   number?:number
   IsLoggedIn:boolean   
}

const Greet = (props:Greetprops) => {
    const {number = 0} = props
  return (
    <div>
        {
            props.IsLoggedIn?<h1>Hello {props.name} {number}</h1>: <h1>No Data Found</h1>
        }
      
    </div>
  )
}

export default Greet
