import React from 'react'

type Headingprops = {
    children:string
}

const Heading = (props:Headingprops) => {
  return (
    <h2>{props.children}</h2>
  )
}

export default Heading
